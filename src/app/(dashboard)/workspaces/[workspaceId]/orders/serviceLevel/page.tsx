"use client"
import ServiceTab from "@/components/analysis/service";
import ActionTab from "@/components/analysis/action";
import UnderAnalysisTab from "@/components/analysis/under";
import SkuProTab from "@/components/analysis/skupro";
import SkuTab from "@/components/analysis/sku";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServiceAnalysisRoute() {
  return (
    <Tabs defaultValue="Service">
      <TabsList>
        <TabsTrigger value="Service">Service</TabsTrigger>
        <TabsTrigger value="Action">Action</TabsTrigger>
        <TabsTrigger value="Under">Under</TabsTrigger>
        <TabsTrigger value="SkuPro">SkuPro</TabsTrigger>
        <TabsTrigger value="Sku">Sku</TabsTrigger>
      </TabsList>
      <TabsContent value="Service">
        <ServiceTab />
      </TabsContent>
      <TabsContent value="Action">
        <ActionTab />
      </TabsContent>
      <TabsContent value="Under">
        <UnderAnalysisTab />
      </TabsContent>
      <TabsContent value="SkuPro">
        <SkuProTab />
      </TabsContent>
      <TabsContent value="Sku">
        <SkuTab />
      </TabsContent>
    </Tabs>
  )
}
