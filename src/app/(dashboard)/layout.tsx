import { EditTaskModal } from "@/features/tasks/components/edit-task-modal";
import { CreateTaskModal } from "@/features/tasks/components/create-task-modal";
import { CreateProjectModal } from "@/features/projects/components/create-project-modal";
import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { HeaderBlue } from "@/components/HeaderBlue";


interface DashboardLayoutProps {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return ( 
    <div className="min-h-screen">
      <CreateWorkspaceModal />
      <CreateProjectModal />
      <CreateTaskModal />
      <EditTaskModal />
      <HeaderBlue />
    
            <main className="">
              {children}
            </main>
          </div>
   
  );
};
 

