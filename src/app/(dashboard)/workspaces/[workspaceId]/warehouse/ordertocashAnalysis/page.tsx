"use client"
import OrderFulfillTab from "@/components/ordertocash/analysis/orderfullfillment/orderfullfill";
import ReceivablesTab from "@/components/ordertocash/analysis/receivables/receivablesTab";
import TopRiskTab from "@/components/ordertocash/analysis/toprisk/topriskTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function ServiceAnalysisRoute() {
  return(
    <>

      <Tabs defaultValue="OrderFullfillment">
        <TabsList>
          <TabsTrigger value="OrderFullfillment">Order Fullfillment</TabsTrigger>
          <TabsTrigger value="Receivables">Receivables</TabsTrigger>
          <TabsTrigger value="TopRisk">Top Risk</TabsTrigger>
        
        </TabsList>
        <TabsContent value="OrderFullfillment">
            <OrderFulfillTab />
            </TabsContent>
        <TabsContent value="Receivables">
            <ReceivablesTab />
        </TabsContent>
        <TabsContent value="TopRisk">
            <TopRiskTab />
        </TabsContent>
       
      </Tabs>
      </>
  ) 
}

