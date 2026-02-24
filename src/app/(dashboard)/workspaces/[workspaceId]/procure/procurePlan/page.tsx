'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu'

import { columns } from './columns'
import { DataTable } from '@/components/demandPlan/data-table'
import taskData from '@/components/demandPlan/tasks.json'
import { cn } from '@/lib/utils'



function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  )
}

export default function ProcessIndex() {
  const [position, setPosition] = React.useState('bottom')

  // Get data directly since we're in a client component
  const tasks = taskData
  const demandData = tasks.filter(
    (task) => task.label === 'Procurement' 
  )

  return (
    <>
      <div className="m-4">
        <Tabs defaultValue="meeting" className="tracking-normal">
       
       
          <DemoContainer>
            <TabsContent value="meeting">
              <div className="flex items-center justify-center rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className="flex items-center w-full justify-between bg-sky-50 border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Procurement Plan</div>
                  <div className="m-2 space-x-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Timeline</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>View Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Weekly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Monthly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Quarterly
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Plan</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>Plan Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Jan'24
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Feb 2024
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Mar 2024
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div className="">
              <DataTable 
                columns={columns} 
                data={demandData.map(demand => ({
                    ...demand,
                    expId: demand.id || '' // Provide default empty string for expId
                }))} />
              </div>
            </TabsContent>
           
          
          </DemoContainer>
        </Tabs>
      </div>
    </>
  )
}
