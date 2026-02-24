"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SettingsIcon, UsersIcon } from "lucide-react";
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill, } from "react-icons/go";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";


import { cn } from "@/lib/utils";


const routes = [
  {
    label: "Task Manager",
    href: "",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Alert Config",
    href: "/createEvent",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  // {
  //   label: "Warehouse Control",
  //   href: "/control",
  //   icon: MdOutlineWarehouse,
  //   activeIcon: MdOutlineWarehouse,
  // },
  // {
  //   label: "Operations Metrics",
  //   href: "/warehouse",
  //   icon: MdOutlineWarehouse,
  //   activeIcon: MdOutlineWarehouse,
  // },
  // {
  //   label: "Operations Metrics2",
  //   href: "/operation",
  //   icon: MdOutlineWarehouse,
  //   activeIcon: MdOutlineWarehouse,
  // },
  // {
  //   label: "Cost Analytics",
  //   href: "/costAnalysis",
  //   icon: AiOutlineDollarCircle,
  //   activeIcon: AiOutlineDollarCircle,
  // },

 
  // {
  //   label: "Alerts",
  //   href: "/alerts",
  //   icon: GoBell,
  //   activeIcon: GoBellFill,
  // },

  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export const Navigation2 = () => {
  const workspaceId = useWorkspaceId();
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const fullHref = `/workspaces/${workspaceId}${item.href}`
        const isActive = pathname === fullHref;
        const Icon = isActive ? item.activeIcon : item.icon;
        
        return (
          <Link key={item.href} href={fullHref}>
            <div className={cn(
              "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
              isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
            )}>
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        )
      })}
    </ul>
  );
};
