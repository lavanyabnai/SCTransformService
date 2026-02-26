"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { IoIosAlert } from "react-icons/io";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import { InventoryCard, LogisticsCard, CapacityCard, OrdersCard } from "@/components/sme/card-layout-item";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";



export default function ControlTowerSum() {
  const workspaceId = useWorkspaceId();


  const inventory = [
    {
      id: 1,
      name: "Stockout",
      amount: 12,
      href: `/workspaces/${workspaceId}/inventoryPlan`,
    },
    {
      id: 2,
      name: "Proj Stockout",
      amount: 6,
      href: `/workspaces/${workspaceId}/inventoryPlan`,
    },
    {
      id: 3,
      name: "Below Min",
      amount: 5,
      href: `/workspaces/${workspaceId}/inventoryPlan`,
    },
    {
      id: 4,
      name: "Proj Below Min",
      amount: 4,
      href: `/workspaces/${workspaceId}/inventoryPlan`,
    },
    {
      id: 5,
      name: "Above Max",
      amount: 4,
      href: `/workspaces/${workspaceId}/inventoryPlan`,
    },
    {
      id: 6,
      name: "Proj Above Max",
      amount: 1,
      href: `/workspaces/${workspaceId}/inventoryPlan`,
    },
  ];
  const logistics = [
    {
      id: 1,
      name: "No Carrier Found",
      amount: "2",
      href: `/workspaces/${workspaceId}/distributionPlan`,
    },
    {
      id: 2,
      name: "Late Delivery",
      amount: "4",
      href: `/workspaces/${workspaceId}/distributionPlan`,
    },
    {
      id: 3,
      name: "Missing Document",
      amount: "9",
      href: `/workspaces/${workspaceId}/distributionPlan`,
    },
  ];
  const capacity = [
    {
      id: 1,
      name: "Line Out Of Cap",
      amount: "3",
      href: `/workspaces/${workspaceId}/supplyPlan`,
    },
    {
      id: 2,
      name: "Supp Out Of Cap",
      amount: "2",
      href: `/workspaces/${workspaceId}/supplyPlan`,
    },
  ];
  const orders = [
    {
      id: 1,
      name: "Promised Late",
      amount: "3",
      href: `/workspaces/${workspaceId}/orderPlan`,
    },
    {
      id: 2,
      name: "Promised Short",
      amount: "2",
      href: `/workspaces/${workspaceId}/orderPlan`,
    },
    {
      id: 3,
      name: "Shipped Short",
      amount: "6",
      href: `/workspaces/${workspaceId}/orderPlan`,
    },
    {
      id: 4,
      name: "Shipped Late ",
      amount: "2",
      href: `/workspaces/${workspaceId}/orderPlan`,
    },
  ];
  return (
    <div className="p-4 shadow-lg col-span-4 text-blue-900 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-4 ">
        <div className="flex items-center gap-2 text-2xl">
          <IoIosAlert className="text-4xl" />
          <h2 className="text-2xl font-bold">Control Tower Summary</h2>
        </div>

        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="bg-sky-500 text-white font-medium w-24 text-center"
          >
            Total 65
          </Badge>
          <Badge
            variant="outline"
            className="bg-blue-900  text-white border-blue-200 font-medium"
          >
            32
          </Badge>
          <Badge
            variant="outline"
            className="bg-amber-900  text-white border-amber-200 font-medium"
          >
            15
          </Badge>
          <Badge
            variant="outline"
            className="bg-gray-900 border-gray-200  text-white font-medium"
          >
            5
          </Badge>
          <Badge
            variant="outline"
            className="bg-pink-900 border-pink-200  text-white font-medium"
          >
            13
          </Badge>
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          <button className="p-1.5 rounded-md hover:bg-gray-100">
            <Filter className="h-4 w-4 text-sky-500" />
          </button>
        </div>
      </div>
      <div className="border-b " />

      <div className="grid grid-cols-4 gap-4 space-y-4 ">
        {/* Projected STOCKOUT */}

        <Card className="border shadow-sm mt-4 ">
          <CardHeader >
            <CardTitle className="text-2xl text-center font-bold">
              INVENTORY
            </CardTitle>
           
          </CardHeader>
          <CardContent className="pt-0">
            <InventoryCard data={inventory} />
          </CardContent>
        </Card>

        {/* Projected MIN INV VIOLATION */}
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold">
              LOGISTICS
            </CardTitle>
         
          </CardHeader>
          <CardContent className="pt-0">
            <LogisticsCard data={logistics} />
          </CardContent>
        </Card>

        {/* Projected MAX INV VIOLATION */}
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold">
              CAPACITY
            </CardTitle>
          
          </CardHeader>
          <CardContent className="pt-0">
            <CapacityCard data={capacity} />
          </CardContent>
        </Card>

        {/* Projected CAPACITY SHORTAGE */}
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold">
              ORDERS
            </CardTitle>
         
          </CardHeader>
          <CardContent className="pt-0">
            <OrdersCard data={orders} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
