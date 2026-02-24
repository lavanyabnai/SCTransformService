"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  GoServer,
} from "react-icons/go";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import { FaChartArea } from "react-icons/fa";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { TbCheckupList } from "react-icons/tb";
import { FaBalanceScale } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: FaChartArea,
    activeIcon: FaChartArea,
  },
  {
    label: "StockBot",
    href: "/chat",
    icon: LiaBroadcastTowerSolid,
    activeIcon: LiaBroadcastTowerSolid,
  },
  {
    label: "Control Tower",
    href: "/incidents",
    icon: LiaBroadcastTowerSolid,
    activeIcon: LiaBroadcastTowerSolid,
  },
  {
    label: "Track & Trace",
    href: "/track",
    icon: GoServer,
    activeIcon: GoServer,
  },
  {
    label: "Order Management",
    href: "/ordermange",
    icon: TiShoppingCart,
    activeIcon: TiShoppingCart,
  },
  {
    label: "Order Fulfillment",
    href: "/orderfulfill",
    icon: TbCheckupList,
    activeIcon: TbCheckupList,
  },
  // {
  //   label: "Booking Analysis",
  //   href: "/fullfillAnalysis",
  //   icon: HiMiniShoppingCart,
  //   activeIcon: HiMiniShoppingCart,
  // },
  // {
  //   label: "Store Fulfillment",
  //   href: "/storefulfill",
  //   icon: MdOutlineStorefront,
  //   activeIcon: MdOutlineStorefront,
  // },

//   {
//     label: "Order to Cash",
//     href: "/ordertocash",
//     icon: TbCashRegister,
//     activeIcon: TbCashRegister,
//   },
 
//   {
//     label: "Service Level Analytics",
//     href: "/serviceLevel",
//     icon: GoCheckCircle,
//     activeIcon: GoCheckCircleFill,
//   },

//   {
//     label: "Transportation",
//     href: "/transportation",
//     icon: HiOutlineTruck,
//     activeIcon: HiOutlineTruck,
//   },

//   {
//     label: "Benchmarking",
//     href: "/benchmark",
//     icon: FaBalanceScale,
//     activeIcon: FaBalanceScale,
//   },
//   {
//     label: "Finance Alerts",
//     href: "/financeAlerts",
//     icon: BiDollarCircle ,
//     activeIcon: BiDollarCircle,
//   },
//   {
//     label: "Finance",
//     href: "/finance",
//     icon: BiDollarCircle ,
//     activeIcon: BiDollarCircle,
//   },
// {
//   label: "Tariffs",
//   href: "/tariffs",
//   icon: FaBalanceScale,
//   activeIcon: FaBalanceScale,
// },
  {
    label: "CleanSheet",
    href: "/transTruck",
    icon: FaBalanceScale,
    activeIcon: FaBalanceScale,
  }
];

export const Navigation = () => {
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
