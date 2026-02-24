"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PerformanceDashboard from "@/components/transportation/alerts/performance-dashboard"
import AlertsDashboard from "@/components/transportation/alerts/alerts-dashboard"

export default function ControlTowerMain() {
  return (
    <Tabs defaultValue="performance" className="w-full">
      <div className="bg-white border-b border-gray-200 px-6 py-2">
        <TabsList className="bg-gray-100">
          <TabsTrigger
            value="performance"
            className="text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Performance Dashboard
          </TabsTrigger>
          <TabsTrigger
            value="alerts"
            className="text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Alerts Dashboard
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="performance" className="m-0">
        <PerformanceDashboard />
      </TabsContent>

      <TabsContent value="alerts" className="m-0">
        <AlertsDashboard />
      </TabsContent>
    </Tabs>
  )
}
