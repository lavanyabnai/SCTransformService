import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
    { name: "Fill Rate(%)", stat: "87.66" },
    { name: "Total Orders", stat: "53.8K" },
    { name: "Cancel Rate(%)", stat: "62.46" },
    { name: "Avg Pr Time(Hrs)", stat: "789.64" },
  ];

export default function Metrics () {
  return (
<Card>
<CardContent>
<dl className="m-4 grid grid-cols-2 gap-4">
      {stats.map((item) => (
        <div
          key={item.name}
          className="flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-5 shadow sm:p-6"
        >
             <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-violet-800  lg:text-5xl">
            {item.stat}
          </dd>
          <dt className="truncate text-center text-lg font-medium text-violet-800">
            {item.name}
          </dt>
         
        </div>
      ))}
        </dl>
        </CardContent>
        </Card>

  )
}
