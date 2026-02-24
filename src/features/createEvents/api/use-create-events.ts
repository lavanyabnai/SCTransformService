import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.createEvents["$post"], 200>;
type RequestType = InferRequestType<typeof client.api.createEvents["$post"]>;

export const useCreateEvents = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async ({ form }) => {
      const response = await client.api.createEvents["$post"]({ form });

      if (!response.ok) {
        throw new Error("Failed to create events");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Events created");
      queryClient.invalidateQueries({ queryKey: ["createEvents"] });
    },
    onError: () => {
      toast.error("Failed to create events");
    }
  });

  return mutation;
};
