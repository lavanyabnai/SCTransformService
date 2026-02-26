import type { Metadata } from "next"
import FinancialDashboard from "@/components/financeDashboard/financial-dashboard"

export const metadata: Metadata = {
  title: "Financial Dashboard",
  description: "A comprehensive financial dashboard with key performance indicators",
}

export default function Page() {
  return <FinancialDashboard />
}
