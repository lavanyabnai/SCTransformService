"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExecutiveTab from "@/components/transportation/executive/ExecutiveTab"
import OperationalTab from "@/components/transportation/operation/OperationalTab"
import CostTab from "@/components/transportation/cost/CostTab"
import LoadTab from "@/components/transportation/load/LoadTab"
import ServiceTab from "@/components/transportation/service/ServiceTab"

export default function Transportation() {
  return (
    // <DashboardLayout/>
      <Tabs defaultValue="service">
        <TabsList>
          <TabsTrigger value="executive">Executive</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="service">Service</TabsTrigger>
          <TabsTrigger value="loading">Loading Efficiency</TabsTrigger>
          <TabsTrigger value="cost">Cost</TabsTrigger>
        </TabsList>
        <TabsContent value="executive">
          <ExecutiveTab />
        </TabsContent>
        <TabsContent value="operations">
          <OperationalTab />
        </TabsContent>
        <TabsContent value="cost">
          <CostTab />
        </TabsContent>
        <TabsContent value="loading">
          <LoadTab />
        </TabsContent>
        <TabsContent value="service">
          <ServiceTab />
        </TabsContent>
      </Tabs>
   
  ) 
}

