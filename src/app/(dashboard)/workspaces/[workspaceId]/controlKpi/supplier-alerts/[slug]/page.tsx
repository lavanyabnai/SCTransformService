"use client"

import SupplierOOSDashboard from "@/components/controlKpi/supplier-oos-dashboard"

// Mock function to get supplier data based on slug
function getSupplierData(slug: string) {
  const supplierAlertsData = [
    {
      supplierName: "Foxconn Technology Group",
      supplierCode: "FOX-001",
      componentType: "Quest 3 Main Assembly",
      materialCode: "VR-Q3-MAIN-128",
      alertType: "Critical OOS",
      affectedSKUs: 3,
      estimatedImpact: 2850000,
      currentStock: 450,
      requiredStock: 12000,
      shortagePercentage: 96.3,
      supplierStatus: "Production Halt",
      estimatedRecovery: "7-10 days",
      priority: "Critical",
      dueDate: "01/20/2025",
      location: "Shenzhen, China",
      contractValue: 45000000,
      qualityRating: 4.8,
      onTimeDelivery: 92.5,
    },
    {
      supplierName: "Samsung Display Co.",
      supplierCode: "SAM-002",
      componentType: "OLED Display Panels",
      materialCode: "VR-OLED-90HZ",
      alertType: "Severe OOS",
      affectedSKUs: 2,
      estimatedImpact: 1950000,
      currentStock: 1200,
      requiredStock: 8500,
      shortagePercentage: 85.9,
      supplierStatus: "Capacity Issues",
      estimatedRecovery: "5-7 days",
      priority: "High",
      dueDate: "01/22/2025",
      location: "Seoul, South Korea",
      contractValue: 32000000,
      qualityRating: 4.9,
      onTimeDelivery: 88.2,
    },
    // Add other items as needed
  ]

  // Find matching supplier based on slug
  return (
    supplierAlertsData.find((item) => slug.includes(encodeURIComponent(item.supplierCode))) || supplierAlertsData[0]
  )
}

export default async function SupplierOOSDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const supplierData = getSupplierData(slug)

  return <SupplierOOSDashboard supplierData={supplierData} />
}
