import RedeployTab from "@/components/bench/redeploy";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import RecommendTab from "@/components/bench/recommendTab";
export default function BenchMarking() {


    return (
        <div className="h-full ">
            <Tabs defaultValue="overall">
                <TabsList >
                    <TabsTrigger value="overall">Overall</TabsTrigger>
                    <TabsTrigger value="receiving">Receiving</TabsTrigger>
                    <TabsTrigger value="putaway">Putaway</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping</TabsTrigger>
                    <TabsTrigger value="slotting">Slotting</TabsTrigger>
                    <TabsTrigger value="warehouse">Warehouse</TabsTrigger>

                </TabsList>

                <TabsContent value="receiving">
                    <RedeployTab />
                </TabsContent>
                <TabsContent value="overall">
                    {/* <ControlTower /> */}
                    <RecommendTab />
                </TabsContent>
            </Tabs>

            {/* <MultipleChartTypes /> */}
        </div>
    );
};