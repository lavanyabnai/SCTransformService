import Image from "next/image"
import { AlertTriangle, ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SupplyChainDashboard() {
  return (
    <div className="flex flex-col gap-2 max-w-5xl mx-auto p-4">
      {/* Crankshaft Alert - Red */}
      <div className="rounded-md overflow-hidden border shadow-sm">
        <div className="bg-red-500 text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            <h2 className="font-medium">Projected Stockout: Crankshaft at Dallas Plant</h2>
          </div>
          <div className="flex gap-1">
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="bg-white grid grid-cols-5 divide-x">
          {/* 5 Days Out Projection */}
          <div className="p-3 flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-1">5 Days Out Projection</div>
            <div className="relative h-20 w-full">
              <div className="absolute bottom-0 left-0 right-0 h-16 border-b border-l border-gray-400"></div>
              <div className="absolute bottom-0 left-4 h-3 w-3 rounded-full bg-blue-500 border-2 border-white shadow-md"></div>
              <div className="absolute bottom-0 left-0 transform -translate-y-1/2 -translate-x-1/2">
                <div className="h-6 w-6 flex items-center justify-center">
                  <div className="h-3 w-3 border-r-2 border-b-2 border-gray-600 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Crankshaft */}
          <div className="p-3 flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-1">Crankshaft</div>
            <div className="h-20 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="Crankshaft"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Sites Affected */}
          <div className="p-3">
            <div className="text-sm text-gray-500 uppercase mb-2">Sites Affected</div>
            <div className="font-medium text-lg">4 Sites</div>
            <div className="font-medium text-lg">3 Lanes</div>
          </div>

          {/* Projected Loss */}
          <div className="p-3">
            <div className="text-sm text-gray-500 uppercase mb-2">Projected Loss</div>
            <div className="flex items-center gap-1">
              <span className="text-gray-500">💰</span>
              <span className="font-medium text-lg">$1.2 million</span>
            </div>
          </div>

          {/* Resolutions */}
          <div className="grid grid-cols-2 divide-x">
            {/* Resolution 1 */}
            <div className="p-3 flex flex-col items-center">
              <div className="text-center bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-md mb-2 w-full">
                Resolution 1
              </div>
              <div className="text-center mb-1">
                <div className="text-sm">🗣️ Collaboration</div>
                <div className="text-sm">Supplier A</div>
              </div>
              <button className="mt-2 bg-gray-200 text-gray-700 rounded-md px-3 py-1 text-sm flex items-center gap-1">
                <Avatar className="h-5 w-5">
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                NEO it!
              </button>
            </div>

            {/* Resolution 2 */}
            <div className="p-3 flex flex-col items-center">
              <div className="text-center bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-md mb-2 w-full">
                Resolution 2
              </div>
              <div className="text-center mb-1">
                <div className="text-sm">⚡ Expedited</div>
                <div className="text-sm">1 Shipment</div>
              </div>
              <div className="text-sm text-blue-500 font-medium">$1,800 Gain</div>
              <button className="mt-2 bg-blue-600 text-white rounded-md px-3 py-1 text-sm flex items-center gap-1">
                <Avatar className="h-5 w-5">
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                NEO it!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side Pinion Alert - Orange */}
      <div className="rounded-md overflow-hidden border shadow-sm">
        <div className="bg-orange-500 text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            <h2 className="font-medium">Projected Below Min: Side Pinion at Dallas Plant</h2>
          </div>
          <div className="flex gap-1">
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="bg-white grid grid-cols-5 divide-x">
          {/* Time */}
          <div className="p-3 flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-1">9/24 4:12 PM</div>
            <div className="relative h-20 w-full">
              <div className="h-16 w-full border border-gray-300 rounded-md overflow-hidden">
                <div className="relative h-full w-full">
                  <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-400"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-8 transform -translate-y-1/2">
                    <div className="h-full w-full flex items-center">
                      <div className="h-1 bg-blue-500 w-1/3"></div>
                      <div className="h-1 bg-red-500 w-1/3"></div>
                      <div className="h-1 bg-blue-500 w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Pinion */}
          <div className="p-3 flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-1">Side Pinion</div>
            <div className="h-20 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Side Pinion"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Sites Affected */}
          <div className="p-3">
            <div className="text-sm text-gray-500 uppercase mb-2">Sites Affected</div>
            <div className="font-medium text-lg">1 Site</div>
            <div className="font-medium text-lg">3 Lanes</div>
          </div>

          {/* Risk Factor */}
          <div className="p-3">
            <div className="text-sm text-gray-500 uppercase mb-2">Risk Factor</div>
            <div className="font-medium text-lg">0.3% Very Low</div>
            <div className="text-sm text-gray-600">No action needed</div>
          </div>

          {/* Resolutions */}
          <div className="grid grid-cols-2 divide-x">
            {/* Resolution 1 */}
            <div className="p-3 flex flex-col items-center">
              <div className="text-center bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-md mb-2 w-full">
                Resolution 1
              </div>
              <div className="text-center mb-1">
                <div className="text-sm">❌ No Action</div>
              </div>
              <button className="mt-2 bg-gray-200 text-gray-700 rounded-md px-3 py-1 text-sm flex items-center gap-1">
                <Avatar className="h-5 w-5">
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                NEO it!
              </button>
            </div>

            {/* Resolution 2 */}
            <div className="p-3 flex flex-col items-center">
              <div className="text-center bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-md mb-2 w-full">
                Resolution 2
              </div>
              <div className="text-center mb-1">
                <div className="text-sm">⚡ Expedite</div>
                <div className="text-sm">Shipment</div>
              </div>
              <div className="text-sm text-red-500 font-medium">$5,340 Cost</div>
              <div className="text-sm text-blue-500 font-medium">$3,800 Gain</div>
              <button className="mt-2 bg-blue-600 text-white rounded-md px-3 py-1 text-sm flex items-center gap-1">
                <Avatar className="h-5 w-5">
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                NEO it!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Change Alert - Orange */}
      <div className="rounded-md overflow-hidden border shadow-sm">
        <div className="bg-orange-500 text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            <h2 className="font-medium">Temperature Change while in transit (-4 degrees)</h2>
          </div>
          <div className="flex gap-1">
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="bg-white grid grid-cols-5 divide-x">
          {/* Time */}
          <div className="p-3 flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-1">9/24 4:12 PM</div>
            <div className="relative h-20 w-full">
              <div className="h-16 w-full border border-gray-300 rounded-md overflow-hidden">
                <div className="relative h-full w-full">
                  <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-400"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-8 transform -translate-y-1/2">
                    <div className="h-full w-full flex items-center">
                      <div className="h-1 bg-red-500 w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wheel Hub */}
          <div className="p-3 flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-1">Wheel Hub</div>
            <div className="h-20 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Wheel Hub"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Shipment */}
          <div className="p-3">
            <div className="text-sm text-gray-500 uppercase mb-2">Shipment</div>
            <div className="font-medium text-lg">92830</div>
            <div className="flex items-center gap-1 text-sm mt-1">
              <span>📍</span>
              <span>Phoenix</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <ArrowRight className="h-3 w-3" />
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span>📍</span>
              <span>Dallas</span>
            </div>
          </div>

          {/* Projected Loss */}
          <div className="p-3">
            <div className="text-sm text-gray-500 uppercase mb-2">Projected Loss</div>
            <div className="flex items-center gap-1">
              <span className="text-gray-500">💰</span>
              <span className="font-medium text-lg">$275 thousand</span>
            </div>
          </div>

          {/* Resolutions */}
          <div className="grid grid-cols-2 divide-x">
            {/* Resolution 1 */}
            <div className="p-3 flex flex-col items-center">
              <div className="text-center bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-md mb-2 w-full">
                Resolution 1
              </div>
              <div className="text-center mb-1">
                <div className="text-sm">➕ Additional</div>
                <div className="text-sm">Checkpoints</div>
              </div>
              <div className="text-sm text-orange-500 font-medium">$45K Cost</div>
              <div className="text-sm text-blue-500 font-medium">$116K Gain</div>
              <button className="mt-2 bg-gray-200 text-gray-700 rounded-md px-3 py-1 text-sm flex items-center gap-1">
                <Avatar className="h-5 w-5">
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                NEO it!
              </button>
            </div>

            {/* Resolution 2 */}
            <div className="p-3 flex flex-col items-center">
              <div className="text-center bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-md mb-2 w-full">
                Resolution 2
              </div>
              <div className="text-center mb-1">
                <div className="text-sm">🔄 Change</div>
                <div className="text-sm">Equipment</div>
              </div>
              <div className="text-sm text-orange-500 font-medium">$48K Cost</div>
              <div className="text-sm text-blue-500 font-medium">$71K Gain</div>
              <button className="mt-2 bg-blue-600 text-white rounded-md px-3 py-1 text-sm flex items-center gap-1">
                <Avatar className="h-5 w-5">
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                NEO it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

