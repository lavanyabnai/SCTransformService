"use client"


import TopCard from "@/components/procure/top-card"
import SupplierInfo from "@/components/procure/supplier-info"
import InvProject from "@/components/procure/inv-project"
import Map from "@/components/procure/map"
import HistoryAnalysis from "@/components/procure/history-analysis"
import Resolution from "@/components/procure/resolution"
import Inbound from "@/components/procure/inbound"


export default function ProcurementAlertDashboard() {

  return (
   
      <div className="flex h-screen overflow-hidden bg-gray-50">
       

        <div className="flex flex-col flex-1 overflow-hidden">
         

          <main className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-1 gap-6">
              <TopCard />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SupplierInfo />
                <InvProject />
              </div>

              <Map />

              <HistoryAnalysis />

              <Inbound />

              <Resolution />
            </div>
          </main>
        </div>
      </div>
   
  )
}
