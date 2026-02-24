// import { useQuery } from "@tanstack/react-query";

// import { client } from "@/lib/rpc";

// export const useGetBusinessUnits = () => {
//   const query = useQuery({
//     queryKey: ["business-units"],
//     queryFn: async () => {
//       const response = await client.api.businessUnits.$get();

//       if (!response.ok) {
//         throw new Error("Failted to fetch business units");
//       }

//       const { data } = await response.json();

//       return data;
//     },
//   });

//   return query;
// };
