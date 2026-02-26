"use client"
import { NavigationAll } from "@/components/navigationall";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
  GoServer,
} from "react-icons/go";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import { FaChartArea } from "react-icons/fa";
import { TbCheckupList, TbCashRegister } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineStorefront } from "react-icons/md";
import { SettingsIcon, UsersIcon } from "lucide-react";

interface OrdersLayoutProps {
  children: React.ReactNode;
}

const data = [
  {
    label: "Dashboard",
    href: "/orders/dashboard",
    icon: FaChartArea,
    activeIcon: FaChartArea,
  },
  {
    label: "Control Tower",
    href: "/orders/incidents",
    icon: LiaBroadcastTowerSolid,
    activeIcon: LiaBroadcastTowerSolid,
  },
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

const data2 = [
  {
    label: "Task Manager",
    href: "/orders/taskmange",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/orders/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Alert Config",
    href: "/orders/createEvent",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/orders/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/orders/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export default function OrdersLayout({ children }: OrdersLayoutProps) {
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
