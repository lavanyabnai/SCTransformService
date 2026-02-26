import { Card, CardContent } from "@/components/ui/card";

import { AlertTriangle } from "lucide-react";

import Image from "next/image";


export default function TopCard() {
  return (
    <div className="grid grid-cols-2 rounded-lg mb-4 gap-x-6 ">
      <Card className=" text-blue-900 h-[160px]">
        <div className="flex rounded-t-lg bg-sky-500 items-center text-white p-4">
          <AlertTriangle className="h-8 w-8 mr-2" />
          <span className="font-medium text-base">
            Events: Projected below min - Oriental tile Diglas at Dallas Plant
          </span>
        </div>

        <CardContent className="flex justify-center items-center">
       <div className="grid grid-cols-3 gap-x-6 items-center justify-center mt-8">
            <div>
              <div className="text-base text-gray-500">
                Min Safety Stock: <span className="font-medium">24</span>
              </div>
            </div>
            <div>
              <div className="text-base text-gray-500">
                Projected On Hand: <span className="font-medium">20</span>
              </div>
            </div>
            <div>
              <div className="text-base text-gray-500">
                Date: <span className="font-medium">03/26/2025</span>
              </div>
            </div>
            </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-x-4 rounded-lg">
        <div className="text-blue-900 h-[160px] rounded-xl border shadow">
        <h1 className="text-base font-semibold p-4">Item: Oriental tile Diglas</h1>
          
          <CardContent className="grid grid-cols-2 items-center gap-4">
            <Image src="/assets/tile.png" alt="pinion"  width={80} height={80} className="mt-2" />
           

            <div className="flex flex-col gap-y-1 text-sm pb-2">
              <p>Item ID: SP9946-1</p>
              <p>Type: Product</p>
              <p>Weight: 0.5 lbs</p>
            </div>
          </CardContent>
        </div>

        <div className="text-blue-900 h-[160px] rounded-xl border shadow">
          <h1 className="text-base font-semibold p-4">Optimization</h1>
          
          <CardContent className="grid grid-cols-2 items-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base font-bold text-yellow-500">10%</span>
              </div>
              <svg className="h-16 w-16" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#f0f0f0"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="10"
                  strokeDasharray="282.7"
                  strokeDashoffset="254.43"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            
            </div>

            <div className="flex flex-col gap-y-1 text-base">
              <p>0-3%</p>
              <p>very Low</p>
              <p>No action needed</p>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
