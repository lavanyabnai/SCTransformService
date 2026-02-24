"use client";
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from "react-icons/go";

import { SettingsIcon, UsersIcon } from "lucide-react";
import { NavigationAll } from "@/components/navigationall";

interface InventoryLayoutProps {
  children: React.ReactNode;
};


const data = [

  {
    label: "Transportation",
    href: "/transport/transportation",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Alerts",
    href: "/transport/alerts",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Performance",
    href: "/transport/performance",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Executive",
    href: "/transport/executive",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Operations",
    href: "/transport/operations",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Service",
    href: "/transport/service",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Loading Efficiency",
    href: "/transport/loading",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Cost",
    href: "/transport/cost",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  }
  ];


  const data2 = [
    {
      label: "Task Manager",
      href: "/transport/taskmange",
      icon: GoHome,
      activeIcon: GoHomeFill,
    },
    {
      label: "My Tasks",
      href: "/transport/tasks",
      icon: GoCheckCircle,
      activeIcon: GoCheckCircleFill,
    },
    {
      label: "Alert Config",
      href: "/transport/createEvent",
      icon: GoCheckCircle,
      activeIcon: GoCheckCircleFill,
    },
    {
      label: "Settings",
      href: "/transport/settings",
      icon: SettingsIcon,
      activeIcon: SettingsIcon,
    },
    {
      label: "Members",
      href: "/transport/members",
      icon: UsersIcon,
      activeIcon: UsersIcon,
    }
  ];
  
export default function TransportLayout({ children }: InventoryLayoutProps) {
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
 

