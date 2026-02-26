"use client"

import AllocationAlertsHeader from "@/components/order/allocation-alerts/allocation-alerts-header"
import AgentSummary from "@/components/order/allocation-alerts/agent-summary"
import AlertDetails from "@/components/order/allocation-alerts/alert-details"
import NetworkStats from "@/components/order/allocation-alerts/network-stats"
import ActiveOrderStats from "@/components/order/allocation-alerts/active-order-stats"
import LinkedAlertsTable from "@/components/order/allocation-alerts/linked-alerts-table"
import AllocationSolutions from "@/components/order/allocation-alerts/allocation-solutions"

export default function AllocationAlertsPage() {
  return (
    <div className="flex h-screen bg-gray-50">

      <div className="flex-1 flex flex-col overflow-hidden">
        <AllocationAlertsHeader />

        <div className="flex-1 p-6 overflow-auto space-y-6">
          <AgentSummary />
          <AlertDetails />

          <div className="grid grid-cols-2 gap-6">
            <NetworkStats />
            <ActiveOrderStats />
          </div>

          <LinkedAlertsTable />
          <AllocationSolutions />
        </div>
      </div>
    </div>
  )
}
