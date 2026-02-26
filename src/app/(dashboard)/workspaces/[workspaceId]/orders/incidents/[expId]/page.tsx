import tasks from '@/app/data/columndata/tasks.json'
import Image from 'next/image';

import Inbound from "@/components/problems/Inbound";
import HistoryAnalysis from "@/components/problems/HistoryAnalysis";
import InvProject from "@/components/problems/InvProject";
import Map from "@/components/problems/Map";
import Resolution from "@/components/problems/Resolution";
import TopCard from "@/components/problems/TopCard";
import { Card, CardContent } from "@/components/ui/card";

export default async function Page({
  params,
}: {
  params: Promise<{ expId: string }>
}) {
  const expId = (await params).expId
  const exp = tasks.filter((task) => task.id === expId)[0]

  return (
    <div className="bg-white w-full rounded-lg border mt-2">
      <div className="p-2 flex items-center justify-between">
        <div className="min-w-0">
          <h1 className="text-xl font-semibold text-gray-900">
            Events Summary -
          </h1>
          <h2 className="mt-1 text-base text-gray-600"></h2>
          <div className="mt-1 flex flex-row flex-wrap space-x-4 sm:mt-0">
            <div className="mt-2 flex items-center">
              <Image
                className="h-5 w-5 rounded-full"
                src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                alt=""
                width={20}
                height={20}
              />
              <div className="ml-2 text-sm text-gray-500">John Doe</div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-2">
        <div>
          <TopCard />
          <div className="grid grid-cols-2 gap-6 rounded-lg">
            <div className="flex flex-col gap-y-4">
              <InvProject />
              <Map />
            </div>

            <div className="flex flex-col gap-y-4">
              <Card className="text-blue-900">
                <CardContent>
                  <Inbound />
                  <HistoryAnalysis />
                  <Resolution />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
