"use client"

import { NavigationAll } from "@/components/navigationall";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,

} from "react-icons/go";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import { 
  FaChartArea, 
  FaWarehouse, 

  FaMoneyBillWave,
  FaChartLine,
  FaTable,
  FaIndustry,
  FaFileAlt,
  FaBoxes,
  FaShoppingCart,
  FaTruck
} from "react-icons/fa";
import { SettingsIcon, UsersIcon } from "lucide-react";

interface InventoryLayoutProps {
  children: React.ReactNode;
};

const data = [
  {
    label: "Dashboard",
    href: "/inventory/dashboard",
    icon: FaChartArea,
    activeIcon: FaChartArea,
  },
  {
    label: "Control Tower",
    href: "/inventory/controlTower",
    icon: LiaBroadcastTowerSolid,
    activeIcon: LiaBroadcastTowerSolid,
  },
  {
    label: "Inventory Control",
    href: "/inventory/invcontrol",
    icon: FaWarehouse,
    activeIcon: FaWarehouse,
  },
  {
    label: "Working Capital",
    href: "/inventory/workingcap",
    icon: FaMoneyBillWave,
    activeIcon: FaMoneyBillWave,
  },
  {
    label: "Inventory Projection",
    href: "/inventory/invProj",
    icon: FaChartLine,
    activeIcon: FaChartLine,
  },
  {
    label: "Inventory Table",
    href: "/inventory/invTable",
    icon: FaTable,
    activeIcon: FaTable,
  },
  {
    label: "Capacity Planning",
    href: "/inventory/capacityTable",
    icon: FaIndustry,
    activeIcon: FaIndustry,
  },
  {
    label: "Consolidated Report",
    href: "/inventory/consolidated",
    icon: FaFileAlt,
    activeIcon: FaFileAlt,
  },
  {
    label: "Inventory Level",
    href: "/inventory/invLevel",
    icon: FaBoxes,
    activeIcon: FaBoxes,
  },
  {
    label: "Manufacturing Dashboard",
    href: "/inventory/manfDash",
    icon: FaIndustry,
    activeIcon: FaIndustry,
  },
  {
    label: "Order",
    href: "/inventory/orderTable",
    icon: FaShoppingCart,
    activeIcon: FaShoppingCart,
  },
  {
    label: "Supply",
    href: "/inventory/supplyTable",
    icon: FaTruck,
    activeIcon: FaTruck,
  },
];

const data2 = [
  {
    label: "Task Manager",
    href: "/inventory/taskmange",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/inventory/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Alert Config",
    href: "/inventory/createEvent",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/inventory/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/inventory/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];
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
 

