"use client"
import OnTimeShipArea from "@/components/orderfullfill/analysis/shipper/OnTimeShipArea";
import OnTimeScatter from "@/components/orderfullfill/analysis/shipper/OntimeScatter";
import AvgShipArea from "@/components/orderfullfill/analysis/shipper/AvgShipArea";
import { ShippingTable } from "./table";
export default function ShipperTab() {
  // Data matching the chart from Jan 2022 to Sep 2022
  return (
    <div>
  
  <ul className="mx-4 my-4 grid grid-cols-2 gap-4">
  
  <OnTimeShipArea />
  <OnTimeScatter />
  <AvgShipArea />

  <ShippingTable />

  
  </ul>

  
  
    </div>
  )
}

