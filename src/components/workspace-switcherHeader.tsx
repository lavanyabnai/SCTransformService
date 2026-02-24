"use client";

import { useRouter } from "next/navigation";


import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { WorkspaceAvatar } from "@/features/workspaces/components/workspace-avatar";
import { useCreateWorkspaceModal } from "@/features/workspaces/hooks/use-create-workspace-modal";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const WorkspaceSwitcherHeader = () => {
  const workspaceId = useWorkspaceId();
  const router = useRouter();
  const { data: workspaces } = useGetWorkspaces();
  useCreateWorkspaceModal();

  const onSelect = (id: string) => {
    router.push(`/workspaces/${id}`);
  };

  return (
    <div className="flex gap-x-2">
    
      <Select onValueChange={onSelect} value={workspaceId}>
        <SelectTrigger className="w-full bg-neutral-200 font-medium p-2">
          <SelectValue placeholder="No workspace selected" />
        </SelectTrigger>
        <SelectContent className="">
          {workspaces?.documents.map((workspace) => (
            <SelectItem key={workspace.$id} value={workspace.$id}>
              <div className="flex  justify-start items-center gap-3 font-medium ">
                <WorkspaceAvatar name={workspace.name} image={workspace.imageUrl} />
                <div className="text-base font-bold flex flex-col items-start">
                  {workspace.name}

                </div>

              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex items-center justify-between">
        {/* <p className="text-xs uppercase text-neutral-500">Workspaces</p> */}
        {/* <RiAddCircleFill onClick={open} className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition" /> */}
      </div>
    </div>
  );
};
