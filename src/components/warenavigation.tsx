"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { GoServer, GoNorthStar } from "react-icons/go";
import { MdOutlineWarehouse } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";

const routes = [

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
// {
//   label: "Operations Metrics2",
//   href: "/operation",
//   icon: MdOutlineWarehouse,
//   activeIcon: MdOutlineWarehouse,
// },
{
  label: "Cost Analytics",
  href: "/warehouse/cost",
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



//   {
//   label: "Incidents",
//   href: "/incidents",
//   icon: GoServer,
//   activeIcon: GoServer,
// },
// {
//   label: "My Tasks",
//   href: "/tasks",
//   icon: GoCheckCircle,
//   activeIcon: GoCheckCircleFill,
// },

// {
//   label: "Settings",
//   href: "/settings",
//   icon: SettingsIcon,
//   activeIcon: SettingsIcon,
// },
// {
//   label: "Members",
//   href: "/members",
//   icon: UsersIcon,
//   activeIcon: UsersIcon,
// },

];

export const WareNavigation = () => {
  const workspaceId = useWorkspaceId();
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const fullHref = `/workspaces/${workspaceId}${item.href}`;
        const isActive = pathname === fullHref;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link key={item.href} href={fullHref}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
