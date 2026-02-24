import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function TopCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg mb-4 gap-6">
      <Card className="text-blue-900 h-[160px]">
        <div className="flex rounded-t-lg bg-red-500 items-center text-white p-4">
          <AlertTriangle className="h-8 w-8 mr-2" />
          <span className="font-medium text-base">
            CRITICAL ALERT: Supplier Capacity Issue - Oriental tile Diglas at Dallas Plant
          </span>
        </div>

        <CardContent className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center mt-4">
            <div>
              <div className="text-base text-gray-500">
                Required Quantity: <span className="font-medium">200 units</span>
              </div>
            </div>
            <div>
              <div className="text-base text-gray-500">
                Available Capacity: <span className="font-medium text-red-500">120 units</span>
              </div>
            </div>
            <div>
              <div className="text-base text-gray-500">
                Delivery Date: <span className="font-medium">03/26/2025</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
        <div className="text-blue-900 h-[160px] rounded-xl border shadow">
          <h1 className="text-base font-semibold p-4">Item: Oriental tile Diglas</h1>

          <CardContent className="grid grid-cols-2 items-center gap-4">
            <div className="bg-gray-100 rounded-lg flex items-center justify-center h-20 w-20">
              <Package2Icon className="h-12 w-12 text-blue-600" />
            </div>

            <div className="flex flex-col gap-y-1 text-sm pb-2">
              <p>Item ID: SP9946-1</p>
              <p>Type: Product</p>
              <p>Weight: 0.5 lbs</p>
              <p>Category: Tiles</p>
            </div>
          </CardContent>
        </div>

        <div className="text-blue-900 h-[160px] rounded-xl border shadow">
          <h1 className="text-base font-semibold p-4">Impact Assessment</h1>

          <CardContent className="grid grid-cols-2 items-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base font-bold text-red-500">80%</span>
              </div>
              <svg className="h-16 w-16" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f0f0f0" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="10"
                  strokeDasharray="282.7"
                  strokeDashoffset="56.54"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-y-1 text-sm">
              <p className="font-semibold text-red-500">Critical</p>
              <p>Production Impact</p>
              <p>Immediate action required</p>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  )
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}
