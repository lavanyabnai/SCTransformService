import { FinancialAlertsDashboard } from "./financial-alerts-dashboard"

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Finance Control Tower</h1>
      <FinancialAlertsDashboard />
    </div>
  )
}