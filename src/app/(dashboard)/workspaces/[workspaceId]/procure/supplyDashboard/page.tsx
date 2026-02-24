"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PrinterIcon } from "@heroicons/react/24/outline";
import {
  FilePlusIcon,
  Pencil2Icon,
  TrashIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


import SupplyDashboard from "@/components/lowes/SupplyDashboard";


export default function InventoryIndex() {
  // const { tasks, supplyData } = useLoaderData();

  return (
    <div className="m-4">
   
        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Supply Planning Dashboard</div>

            <div className="m-2 space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-indigo-100 "
                    >
                      <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>New</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-purple-100"
                    >
                      <Pencil2Icon className="text-purple-700 w-6 h-6 " />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-red-100"
                    >
                      <TrashIcon className="text-red-700 w-6 h-6 " />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-yellow-100"
                    >
                      <PrinterIcon className="text-yellow-800 w-6 h-6 " />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Print</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-green-100"
                    >
                      <DownloadIcon className="text-green-700 w-6 h-6 " />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div>
          <SupplyDashboard />
        </div>

    </div>
  );
}
