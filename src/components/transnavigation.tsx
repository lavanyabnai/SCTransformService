"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { GoCheckCircle, GoCheckCircleFill, } from "react-icons/go";


import { cn } from "@/lib/utils";

const routes = [

{
  label: "Transportation",
  href: "/transport/transportation",
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
},

];

export const TransportNavigation = () => {
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
