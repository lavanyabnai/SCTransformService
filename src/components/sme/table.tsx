"use client"

import * as React from "react"
import { ButtonNormal } from '@/components/ui/button-normal'
import { useCreateTaskModal } from "@/features/tasks/hooks/use-create-task-modal";
import { columns } from "@/features/tasks/components/columns";
import { DataTable } from "@/features/tasks/components/data-table";
import { useGetTasks } from "@/features/tasks/api/use-get-tasks";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

export function DataTableDemo() {
  const workspaceId = useWorkspaceId();
  const { 
    data: tasks  } = useGetTasks({
    workspaceId,
  
  });
  const { open } = useCreateTaskModal();
  return (
    <div className=" p-4 shadow-lg text-blue-900 bg-white rounded-xl border border-gray-200">
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-black">My Tasks</h2>

        <ButtonNormal className="bg-blue-500 h-8 w-8 hover:bg-blue-100" onClick={open}>
      <span className="text-center text-xl font-bold text-white">+</span>
    </ButtonNormal>
      </div>
      <div className="mt-4 overflow-y-auto">
      <DataTable columns={columns} data={tasks?.documents ?? []} />
       
      </div>
      
    </div>
    </div>
  )
}
