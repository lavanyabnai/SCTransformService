import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.inputscenarios["$post"], 200>;
type RequestType = InferRequestType<typeof client.api.inputscenarios["$post"]>;

export const useCreateInputScenario = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async ({ form }) => {
      const response = await client.api.inputscenarios["$post"]({ form });

      if (!response.ok) {
        throw new Error("Failed to create input scenarios");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Input scenarios created");
      queryClient.invalidateQueries({ queryKey: ["inputscenarios"] });
    },
    onError: () => {
      toast.error("Failed to create input scenarios");
    }
  });

  return mutation;
};
