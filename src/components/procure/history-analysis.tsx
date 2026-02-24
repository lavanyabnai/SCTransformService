import { HistoryChart } from "./history-chart"
import { BarChart3, Clock } from "lucide-react"

const stats = [
  {
    name: "Oriental Manufacturing",
    stat: "76% OTIF",
    sub: "14 Days Avg Lead Time",
    trend: "Declining",
    color: "text-red-500",
  },
  {
    name: "Acme Tiles",
    stat: "92% OTIF",
    sub: "18 Days Avg Lead Time",
    trend: "Stable",
    color: "text-green-500",
  },
]

export default function HistoryAnalysis() {
  return (
    <div>
      <div className="flex items-center mb-4">
        <BarChart3 className="h-5 w-5 text-blue-900 mr-2" />
        <h2 className="text-xl font-semibold text-blue-900">Historical Performance Analysis</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-4 shadow">
          <h3 className="text-base font-semibold mb-2">Oriental tile Diglas - SP9943-1</h3>
          <p className="text-sm text-gray-500 mb-4">Last 6 Months Delivery Performance</p>
          <HistoryChart />
        </div>

        <div className="col-span-1 md:col-span-2 rounded-lg border p-4 shadow">
          <h3 className="text-base font-semibold mb-2">Supplier Scorecard Comparison</h3>
          <p className="text-sm text-gray-500 mb-4">Alternative Suppliers Performance</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((item) => (
              <div key={item.name} className="rounded-lg border p-4">
                <div className="text-sm font-medium text-gray-500">{item.name}</div>
                <div className="mt-1 text-2xl font-semibold text-blue-900">{item.stat}</div>
                <div className="mt-1 text-sm text-gray-500">{item.sub}</div>
                <div className={`mt-1 text-sm font-medium ${item.color}`}>Trend: {item.trend}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-blue-900 mr-2" />
              <h4 className="text-sm font-medium">Historical Issues</h4>
            </div>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                <span>Oriental Manufacturing had 3 capacity issues in the last 12 months</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                <span>Average resolution time for capacity issues: 18 days</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                <span>Quality issues reported in 7% of deliveries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
