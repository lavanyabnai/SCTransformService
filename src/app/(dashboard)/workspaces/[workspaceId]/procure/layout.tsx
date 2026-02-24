"use client";
import { NavigationAll } from "@/components/navigationall";

import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from "react-icons/go";
import { SettingsIcon, UsersIcon } from "lucide-react";

const data = [


{
  label: "Procurement Governance",
  href: "/procure/procureGov",
  icon: GoCheckCircle,
  activeIcon: GoCheckCircleFill,
},
{
  label: "Procurement Control Tower",
  href: "/procure/procurePlan",
  icon: GoCheckCircle,
  activeIcon: GoCheckCircleFill,
},
{
  label: "Spend Analysis",
  href: "/procure/spendAnalysis",
  icon: GoCheckCircle,
  activeIcon: GoCheckCircleFill,
},
{
  label: "Payables",
  href: "/procure/payableAnalysis",
  icon: GoCheckCircle,
  activeIcon: GoCheckCircleFill,
},
{
  label: "Category Analysis",
  href: "/procure/categoryAnalysis",
  icon: GoCheckCircle,
  activeIcon: GoCheckCircleFill,
},
{
  label: "Expense Analysis",
  href: "/procure/expenseAnalysis",
  icon: GoCheckCircle,
  activeIcon: GoCheckCircleFill,
},
{
  label: "Supply Dashboard",
  href: "/procure/supplyDashboard",
  icon: GoCheckCircle,
  activeIcon: GoCheckCircleFill,
},

];

const data2 = [
  {
    label: "Task Manager",
    href: "/procure/taskmange",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/procure/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Alert Config",
    href: "/procure/createEvent",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/procure/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/procure/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];


interface InventoryLayoutProps {
  children: React.ReactNode;
};

export default function ProcureLayout({ children }: InventoryLayoutProps) {
  return ( 
    <div className="min-h-screen">
    
      <div className="mt-20 flex w-full h-full">
        <div className="fixed hidden lg:block lg:w-[260px] h-screen overflow-y-auto">
        <aside className="p-4 h-full bg-neutral-100 w-full">
      <NavigationAll data={data} data2={data2}/>
    </aside>
        </div>
        <div className="lg:pl-[264px] w-full">
          <div className="mx-auto max-w-screen-4xl h-full">
      
            <main className="py-2 px-6 flex flex-col">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
    
  );
};
 

