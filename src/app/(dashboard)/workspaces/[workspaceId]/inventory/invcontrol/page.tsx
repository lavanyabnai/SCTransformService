"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import InvDashboardTab from "@/components/inventoryControl/InvDashboardTab"
import StockOutTab from "@/components/inventoryControl/StockOutTab"
import RedistributionDashboard from "@/components/Redistribution/RedistributionDashboard";
import Redploy from "@/components/Redistribution/Redploy";

export default function InventoryControl() {
    return (
        <div className="h-full ">
          
            <Tabs defaultValue="dashboard">
                <TabsList >
                      <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                    <TabsTrigger value="excess">Excess/Deficit</TabsTrigger>
              
                    <TabsTrigger value="redashboard">Redistribution</TabsTrigger>
                    <TabsTrigger value="stockout">Stockout</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard">

                    <InvDashboardTab />
                </TabsContent>
                <TabsContent value="stockout">
                    <StockOutTab />
            </TabsContent>
            <TabsContent value="redashboard">
                <RedistributionDashboard />

            </TabsContent>
            <TabsContent value="excess">
                <Redploy />
            </TabsContent>
            </Tabs>
        </div>
    );
};