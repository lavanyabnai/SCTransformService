"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";


import { FaBalanceScale } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { BiDollarCircle } from "react-icons/bi";


const routes = [

  {
    label: "Finance Alerts",
    href: "/financeRoute/financeAlerts",
    icon: BiDollarCircle ,
    activeIcon: BiDollarCircle,
  },
  {
    label: "Finance",
    href: "/financeRoute/finance",
    icon: BiDollarCircle ,
    activeIcon: BiDollarCircle,
  },
{
  label: "Tariffs",
  href: "/financeRoute/tariffs",
  icon: FaBalanceScale,
  activeIcon: FaBalanceScale,
},

];

export const FinanceNavigation = () => {
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
