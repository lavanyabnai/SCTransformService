"use client";


import { NavigationAll } from "@/components/navigationall";

import { GoServer, GoNorthStar } from "react-icons/go";
import { MdOutlineWarehouse } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,

} from "react-icons/go";
import { SettingsIcon, UsersIcon } from "lucide-react";

const data = [

  {
    label: "Control Tower",
    href: "/warehouse/control",
    icon: LiaBroadcastTowerSolid,
    activeIcon: LiaBroadcastTowerSolid,
},

{
  label: "Operations Metrics",
  href: "/warehouse/operations",
  icon: MdOutlineWarehouse,
  activeIcon: MdOutlineWarehouse,
},

{
  label: "Cost Analytics",
  href: "/warehouse/costAnalysis",
  icon: AiOutlineDollarCircle,
  activeIcon: AiOutlineDollarCircle,
},
{
  label: "Track & Trace",
  href: "/warehouse/track",
  icon: GoServer,
  activeIcon: GoServer,
},

{
  label: "Benchmarking",
  href: "/warehouse/benchmark",
  icon: GoNorthStar,
  activeIcon: GoNorthStar,
},
];

const data2 = [
  {
    label: "Task Manager",
    href: "/warehouse/taskmange",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/warehouse/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Alert Config",
    href: "/warehouse/createEvent",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/warehouse/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/warehouse/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

interface InventoryLayoutProps {
  children: React.ReactNode;
};

export default function InventoryLayout({ children }: InventoryLayoutProps) {
  return ( 
    <div className="min-h-screen">
    
      <div className="mt-20 flex w-full h-full">
        <div className="fixed hidden lg:block lg:w-[260px] h-screen overflow-y-auto">
        <aside className="p-4 h-full bg-neutral-100 w-full">
    
      <NavigationAll data={data} data2={data2} />
     
      
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
 

