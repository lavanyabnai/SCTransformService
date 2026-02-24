"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoServer,
} from "react-icons/go";

import { TbCheckupList, TbCashRegister } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineStorefront } from "react-icons/md";

import { cn } from "@/lib/utils";

const routes = [
  // {
  //   label: "Dashboard",
  //   href: "/dashboard",
  //   icon: FaChartArea,
  //   activeIcon: FaChartArea,
  // },
  // {
  //   label: "Control Tower",
  //   href: "/orders/controltower",
  //   icon: LiaBroadcastTowerSolid,
  //   activeIcon: LiaBroadcastTowerSolid,
  // },
  {
    label: "Track & Trace",
    href: "/orders/track",
    icon: GoServer,
    activeIcon: GoServer,
  },
  {
    label: "Order Management",
    href: "/orders/ordermange",
    icon: TiShoppingCart,
    activeIcon: TiShoppingCart,
  },
  {
    label: "Order Fulfillment",
    href: "/orders/orderfulfill",
    icon: TbCheckupList,
    activeIcon: TbCheckupList,
  },

  {
    label: "Store Fulfillment",
    href: "/orders/storefulfill",
    icon: MdOutlineStorefront,
    activeIcon: MdOutlineStorefront,
  },

  {
    label: "Order to Cash",
    href: "/orders/ordertocash",
    icon: TbCashRegister,
    activeIcon: TbCashRegister,
  },
 
  {
    label: "Service Level Analytics",
    href: "/orders/serviceLevel",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },

];

export const OrderNavigation = () => {
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
