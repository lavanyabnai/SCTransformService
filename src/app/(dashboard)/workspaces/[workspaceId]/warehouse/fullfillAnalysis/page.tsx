"use client";
import BookingTab from "@/components/orderfullfill/analysis/booking/BookingTab";
import FullFillTab from "@/components/orderfullfill/analysis/fullfillment/FullFillTab";
import ShipperTab from "@/components/orderfullfill/analysis/shipper/ShipperTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function BookingAnalysisTab() {
  return (
    <Tabs defaultValue="booking">
      <TabsList>
        <TabsTrigger value="booking">Booking</TabsTrigger>
        <TabsTrigger value="fulfillment">Fulfillment</TabsTrigger>
        <TabsTrigger value="shippers">Shippers</TabsTrigger>
      </TabsList>
      <TabsContent value="booking">
        <BookingTab />
      </TabsContent>
      <TabsContent value="fulfillment">
        <FullFillTab />
      </TabsContent>
      <TabsContent value="shippers">
        <ShipperTab />
      </TabsContent>
    </Tabs>

  );
}
