import InsightsTab from "@/components/dashboard/Insights/InsightTab";

import MultipleChartTypes from "@/components/chartui/MultipleChartTypes";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import AlertsTab  from "@/app/(dashboard)/workspaces/[workspaceId]/warehouse/warecontrol/page";


export default function DashboardPage() {

  
  return (
    <div className="h-full ">
      <Tabs defaultValue="insights">
        <TabsList >
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="insights">
          <InsightsTab />
          <MultipleChartTypes />
        </TabsContent>
        <TabsContent value="alerts">
          {/* <ControlTower /> */}
          <AlertsTab />
        </TabsContent>
      </Tabs>
  
      {/* <MultipleChartTypes /> */}
    </div>
  );  
};