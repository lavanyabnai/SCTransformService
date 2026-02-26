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
    label: "Finance Alerts",
    href: "/financeRoute/financeAlerts",
    icon: BiDollarCircle,
    activeIcon: BiDollarCircle,
  },
  {
    label: "Finance",
    href: "/financeRoute/finance",
    icon: BiDollarCircle,
    activeIcon: BiDollarCircle,
  },
  {
    label: "Tariffs",
    href: "/financeRoute/tariffs",
    icon: FaBalanceScale,
    activeIcon: FaBalanceScale,
  },
];
const data2 = [
  {
    label: "Task Manager",
    href: "/financeRoute/taskmange",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/financeRoute/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Alert Config",
    href: "/financeRoute/createEvent",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/financeRoute/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/financeRoute/members",
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
