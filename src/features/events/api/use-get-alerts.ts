import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";


interface UseGetAlertsProps {
  workspaceId: string;
};


export const useGetAlerts = ({
  workspaceId,
}: UseGetAlertsProps) => {

  const query = useQuery({
    queryKey: ["alerts", workspaceId],
    queryFn: async () => {
      const response = await client.api.alerts.$get({
        query: {
          workspaceId
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch alerts");
      }

      const { data } = await response.json();
      console.log(data, "api/use-get-alerts.ts");
      return data;
    },
  });

  return query;
};
