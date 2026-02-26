"use client"

import DemandBalancingDashboard from "@/components/controlKpi/demand/demand-balancing-dashboard"

// Mock function to get demand balancing data based on slug
function getDemandBalancingData(slug: string) {
  const demandBalancingData = [
    {
      sourceLocation: "META-CA-01",
      materialCode: "VR-Q3-128",
      revenueImpact: 4291328,
      unitImpact: 199597,
      impactCoverage: 100.0,
      confidenceLevel: 81.21,
      predictedAction: "Transfer",
      actionPriority: "High",
      dueDate: "01/18/2025",
      description: "Transfer 5,500 units of Quest 3 128GB to META-TX-01 DC to fill projected backorders",
      alertType: "Stock Shortage",
      transferLeadTime: "3-5 days",
      currentStock: 12450,
      projectedDemand: 18000,
    },
    {
      sourceLocation: "META-EU-01",
      materialCode: "VR-Q3-512",
      revenueImpact: 3306994,
      unitImpact: 459010,
      impactCoverage: 100.0,
      confidenceLevel: 88.6,
      predictedAction: "Expedite",
      actionPriority: "High",
      dueDate: "01/20/2025",
      description: "Expedite existing stock transfer of 459,010 units of Quest 3 512GB to META-APAC-01 DC",
      alertType: "Critical Shortage",
      transferLeadTime: "7-10 days",
      currentStock: 8920,
      projectedDemand: 15200,
    },
    // Add other items as needed
  ]

  // Find matching item based on slug
  return (
    demandBalancingData.find((item) => slug.includes(encodeURIComponent(item.materialCode))) || demandBalancingData[0]
  )
}

export default async function DemandBalancingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const demandData = getDemandBalancingData(slug)

  return <DemandBalancingDashboard demandData={demandData} />
}
