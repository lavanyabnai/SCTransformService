"use client";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import InventoryProjectionTable from "@/components/WorkingCap/InventoryProjection"
import InventoryOpportunity from "@/components/WorkingCap/InventoryOpportunity"
import SimulationChart from "@/components/simulation/SimulationChart";
import InvAnalysis from "@/components/endToend/InvAnalysis";
import Segmentation from "@/components/endToend/Segmentation";


export default function WorkingCap() {
    return (
        <div className="h-full">
            <Tabs defaultValue="invPro">
                <TabsList>
                    <TabsTrigger value="invPro">Inventory Projection</TabsTrigger>
                    <TabsTrigger value="opp">Inventory Opportunity</TabsTrigger>
                    <TabsTrigger value="simulation">Simulation</TabsTrigger>
                    <TabsTrigger value="segmentation">Segmentation</TabsTrigger>
                    <TabsTrigger value="invanalysis">Inventory Analysis</TabsTrigger>
                </TabsList>
                <TabsContent value="invPro">
                    <InventoryProjectionTable />

                </TabsContent>

                <TabsContent value="opp">
                    <InventoryOpportunity />
                </TabsContent>
                <TabsContent value="simulation">
                    <SimulationChart />
                </TabsContent>
                <TabsContent value="segmentation">

                    <Segmentation />
                </TabsContent>
                <TabsContent value="invanalysis">
                    <InvAnalysis />

                </TabsContent>
            </Tabs>
        </div>
    );
};