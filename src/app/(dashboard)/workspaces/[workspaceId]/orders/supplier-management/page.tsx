"use client"

import AgentSummary from "@/components/order/supplier-management/agent-summary"
import SupplierBreakdown from "@/components/order/supplier-management/supplier-breakdown"
import ProductionTimeline from "@/components/order/supplier-management/production-timeline"
import ActionsNeeded from "@/components/order/supplier-management/actions-needed"
import SolutionOverview from "@/components/order/supplier-management/solution-overview"

export default function SupplierManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Supplier Management</h1>
        <p className="text-gray-600 mt-1">Monitor supplier performance and resolve issues</p>
      </div>
      <AgentSummary />
      <SupplierBreakdown />
      <ProductionTimeline />
      <ActionsNeeded />
      <SolutionOverview onSubmit={() => {}} />
    </div>
  )
}
