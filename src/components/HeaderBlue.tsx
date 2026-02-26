"use client";

import Image from "next/image";
import Link from "next/link";

import { Suspense } from "react";

import { UserButton } from "@/features/auth/components/user-button";
import { WorkspaceSwitcherHeader } from "./workspace-switcherHeader";
import { MobileSidebar } from "./mobile-sidebar";
import { GlobalSearch } from "./global-search";

import {
  TowerControl,
  Boxes,
  PackageCheck,
  Warehouse,
  HandCoins,
  Banknote,
  Truck,
  Database,
} from "lucide-react";

import { MegaDropdownCategories } from "@/components/mega-dropdown-categories";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";


export const HeaderBlue = () => {
  const workspaceId = useWorkspaceId();

  const categories = [
    {
      category: "Control Tower",
      items: [
        {
          name: "Control Tower",
          description: "Third-party integrations and more",
          shortDescription: "Third-party Integrations",
          to: `/workspaces/${workspaceId}/controlKpi/supplyChain`,
          icon: TowerControl,
          iconBackground: "bg-violet-100",
          iconForeground: "text-violet-700",
          highlight: true,
        },
        {
          name: "Inventory Control",
          description: "Balance your demand and supply",
          shortDescription: "Demand Supply",
          to: `/workspaces/${workspaceId}/inventory/invcontrol`,
          icon: Boxes,
          iconBackground: "bg-blue-100",
          iconForeground: "text-blue-700",
        },
        {
          name: "Orders and Returns",
          description: "Manage orders",
          shortDescription: "Order Management",
          to: `/workspaces/${workspaceId}/events/demand`,
          icon: PackageCheck,
          iconBackground: "bg-green-100",
          iconForeground: "text-green-700",
        },
        {
          name: "Warehousing",
          description: "Manage warehouse",
          shortDescription: "Warehouse Management",
          to: `/workspaces/${workspaceId}/warehouse/control`,
          icon: Warehouse,
          iconBackground: "bg-purple-100",
          iconForeground: "text-purple-700",
        },
        {
          name: "Procurement",
          description: "Manage procurement",
          shortDescription: "Procurement Management",
          to: `/workspaces/${workspaceId}/procure/procureGov`,
          icon: HandCoins,
          iconBackground: "bg-orange-100",
          iconForeground: "text-orange-700",
        },
        {
          name: "Finance",
          description: "Manage finance",
          shortDescription: "Finance Management",
          to: `/workspaces/${workspaceId}/financeRoute/finance`,
          icon: Banknote,
          iconBackground: "bg-yellow-100",
          iconForeground: "text-yellow-700",
        },
        {
          name: "Transportation",
          description: "Manage transportation",
          shortDescription: "Transportation Management",
          to: `/workspaces/${workspaceId}/transport/alerts`,
          icon: Truck,
          iconBackground: "bg-indigo-100",
          iconForeground: "text-indigo-700",
        },
         {
          name: "SupplyChain Data Platform",
          description: "Data Writeback",
          shortDescription: "Data Writeback",
          to: `/workspaces/${workspaceId}/supplyChainData`,
          icon: Database,
          iconBackground: "bg-teal-100",
          iconForeground: "text-teal-700",
        },
      ],
    },
    // {
    //   category: "Digital Twin",
    //   items: [
    //     {
    //       name: "OTIF Control Tower",
    //       description: "OTIF Control Tower",
    //       shortDescription: "OTIF Control Tower",
    //       to: `/workspaces/${workspaceId}/controlKpi/supplyChain`,
    //       icon: TowerControl,
    //       iconBackground: "bg-violet-100",
    //       iconForeground: "text-violet-700",
    //     },
    //     {
    //       name: "Warehouse CT",
    //       description: "Warehouse Control Tower",
    //       shortDescription: "Warehouse CT",
    //       to: `/workspaces/${workspaceId}/warehouse/control`,
    //       icon: Warehouse,
    //       iconBackground: "bg-blue-100",
    //       iconForeground: "text-blue-700",
    //     },
    //     {
    //       name: "Procurement CT",
    //       description: "Procurement Control Tower",
    //       shortDescription: "Procurement CT",
    //       to: `/workspaces/${workspaceId}/procure/procureGov`,
    //       icon: HandCoins,
    //       iconBackground: "bg-orange-100",
    //       iconForeground: "text-orange-700",
    //     },
    //     {
    //       name: "Transportation CT",
    //       description: "Transportation Control Tower",
    //       shortDescription: "Transportation CT",
    //       to: `/workspaces/${workspaceId}/transport/alerts`,
    //       icon: Truck,
    //       iconBackground: "bg-green-100",
    //       iconForeground: "text-green-700",
    //     },
    //     {
    //       name: "Supply Chain Data Platform",
    //       description: "Data Writeback",
    //       shortDescription: "Data Writeback",
    //       to: `/workspaces/${workspaceId}/supplyChainData`,
    //       icon: Database,
    //       iconBackground: "bg-teal-100",
    //       iconForeground: "text-teal-700",
    //     },
    //   ],
    // },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="py-4 px-6 flex items-center justify-between bg-blue-900">
        <div className="flex items-center gap-x-2">
          <MobileSidebar />
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="block lg:hidden"
              src="/assets/logo.png"
              alt="logo"
              width={60}
              height={60}
            />
            <Image
              className="hidden lg:block"
              src="/assets/logo.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="hidden lg:block"
              src="/assets/white-logo.png"
              alt="logo"
              width={180}
              height={180}
            />
            {/* <h1 className="hidden lg:block font-sans text-2xl font-bold text-[#05022d]">BlueNorth AI</h1> */}
          </Link>
          {/* <div className="ml-6">
        <h1 className="text-2xl font-semibold">
          {title}
        </h1>
        <p className="hidden lg:block text-muted-foreground">
          {description}
        </p>
      </div> */}
        </div>
        <GlobalSearch />
        <div className="flex items-center gap-2">
          <Suspense
            fallback={
              <div className="w-40 h-9 bg-neutral-200 rounded-md animate-pulse"></div>
            }
          >
            <WorkspaceSwitcherHeader />
          </Suspense>
          <UserButton />

          {/* <MegaDropdown dropdown={dropdownItems} /> */}
          {/* <MegaDropdownCard dropdown={dropdownItems} /> */}

          <MegaDropdownCategories categories={categories} />
        </div>
      </nav>
    </header>
  );
};
