import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";


export const useGetInputScenarios = () => {

  const query = useQuery({
    queryKey: ["inputscenarios"],
    queryFn: async () => {
      const response = await client.api.inputscenarios.$get({
        query: {
         
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch input scenarios");
      }

      const { data } = await response.json();
      console.log(data, "api/use-get-inputscenarios.ts");
      return data;
    },
  });

  return query;
};
