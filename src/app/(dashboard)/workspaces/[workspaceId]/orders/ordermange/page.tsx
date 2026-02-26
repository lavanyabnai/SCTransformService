"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderFulfillTab from "@/components/ordermange/orderFulfill/OrderFulfillTab";
import RetailTab from "@/components/ordermange/retailstore/RetailTab";
import SupplychainTab from "@/components/ordermange/supplychain/SupplychainTab";
import SalesPerformanceTab from "@/components/ordermange/salesperformance/SalesPerformanceTab";
import InvHealthTab from "@/components/ordermange/invhealth/InvHealthTab";
import DemandPlanTab from "@/components/ordermange/demandplanning/DemandPlanTab";
import DashboardSummaryTab from "@/components/ordermange/dashboardSummary/DashboardSum";
export default function OrderManagement() {
  return (
    <div className="h-full ">
      <Tabs defaultValue="summary">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="order-fulfill">Order Fulfillment</TabsTrigger>
          <TabsTrigger value="retail">Retail Store</TabsTrigger>
          <TabsTrigger value="supplychain">Supply Chain</TabsTrigger>
          <TabsTrigger value="sale">Sales Performance</TabsTrigger>
          <TabsTrigger value="invhealth">Inventory Health</TabsTrigger>
          <TabsTrigger value="demandplan">Demand Planning</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <DashboardSummaryTab />
        </TabsContent>
        <TabsContent value="order-fulfill">
          <OrderFulfillTab />
        </TabsContent>
        <TabsContent value="retail">
          <RetailTab />
        </TabsContent>
        <TabsContent value="supplychain">
          <SupplychainTab />
        </TabsContent>
        <TabsContent value="sale">
          <SalesPerformanceTab />
        </TabsContent>
        <TabsContent value="invhealth">
          <InvHealthTab />
        </TabsContent>
        <TabsContent value="demandplan">
          <DemandPlanTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
