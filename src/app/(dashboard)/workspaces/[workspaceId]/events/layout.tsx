"use client"
import { NavigationAll } from "@/components/navigationall";
import { FaBalanceScale } from "react-icons/fa";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
import { BiDollarCircle } from "react-icons/bi";
import { SettingsIcon, UsersIcon } from "lucide-react";

interface InventoryLayoutProps {
  children: React.ReactNode;
}
const data = [
  {
    label: "Demand",
    href: "/events/demand",
    icon: BiDollarCircle,
    activeIcon: BiDollarCircle,
  },
  {
    label: "Inventory",
    href: "/events/inventory",
    icon: BiDollarCircle,
    activeIcon: BiDollarCircle,
  },
  {
    label: "Logistics & Warehousing",
    href: "/events/logistics",
    icon: FaBalanceScale,
    activeIcon: FaBalanceScale,
  },
  {
    label: "Procurement",
    href: "/events/supply",
    icon: FaBalanceScale,
    activeIcon: FaBalanceScale,
  },
  // {
  //   label: "Demand Planning",
  //   href: "/events/demandPlanning",
  //   icon: FaBalanceScale,
  //   activeIcon: FaBalanceScale,
  // },
  // {
  //   label: "Inventory Planning",
  //   href: "/events/invPlanning",
  //   icon: FaBalanceScale,
  //   activeIcon: FaBalanceScale,
  // },
  // {
  //   label: "Execution Store",
  //   href: "/events/exStore",
  //   icon: FaBalanceScale,
  //   activeIcon: FaBalanceScale,  
  // },
  // {
  //   label: "Execution DC",
  //   href: "/events/exDc",
  //   icon: FaBalanceScale,
  //   activeIcon: FaBalanceScale,  
  // },
  // {
  //   label: "Execution Carrier",
  //   href: "/events/exCarrier",
  //   icon: FaBalanceScale,
  //   activeIcon: FaBalanceScale,  
  // },
  // {
  //   label: "Execution Supplier",
  //   href: "/events/exSupplier",
  //   icon: FaBalanceScale,
  //   activeIcon: FaBalanceScale,  
  // }
];
const data2 = [
  {
    label: "Task Manager",
    href: "/events/taskmange",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/events/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Alert Config",
    href: "/events/createEvent",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/events/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/events/members",
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
            <main className="py-2 px-6 flex flex-col">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
