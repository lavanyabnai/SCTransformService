"use client"

import { Button } from "@/components/ui/button"
import { UserButton } from "@/features/auth/components/user-button";
import { Menu } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { WorkspaceSwitcherHeader } from "@/components/workspace-switcherHeader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { GlobalSearch } from "@/components/global-search";


import {
  BarChart,
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  HomeIcon,
  Settings,
  ShoppingCart,
  Users,
  Shield,
  LifeBuoy,
  Layers,
  Code,
  Database,
  Cloud,
  Globe,
} from "lucide-react"

import { MegaDropdownCategories } from "@/components/mega-dropdown-categories";
import { useWorkspaceId } from '@/features/workspaces/hooks/use-workspace-id';
interface TopNavBarProps {
  toggleSidebar: () => void
}

export function TopNavBar({ toggleSidebar }: TopNavBarProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  const workspaceId = useWorkspaceId();

  // const dropdownItems = [
  //   {
  //     name: "Dashboard",
  //     description: "View your dashboard",
  //     to: "/dashboard",
  //     icon: HomeIcon,
  //     iconBackground: "bg-blue-100",
  //     iconForeground: "text-blue-700",
  //   },
  //   {
  //     name: "Analytics",
  //     description: "View your analytics",
  //     to: "/analytics",
  //     icon: BarChart,
  //     iconBackground: "bg-green-100",
  //     iconForeground: "text-green-700",
  //   },
  //   {
  //     name: "Products",
  //     description: "Manage your products",
  //     to: "/products",
  //     icon: ShoppingCart,
  //     iconBackground: "bg-purple-100",
  //     iconForeground: "text-purple-700",
  //   },
  //   {
  //     name: "Customers",
  //     description: "Manage your customers",
  //     to: "/customers",
  //     icon: Users,
  //     iconBackground: "bg-yellow-100",
  //     iconForeground: "text-yellow-700",
  //   },
  //   {
  //     name: "Orders",
  //     description: "View your orders",
  //     to: "/orders",
  //     icon: FileText,
  //     iconBackground: "bg-pink-100",
  //     iconForeground: "text-pink-700",
  //   },
  //   {
  //     name: "Calendar",
  //     description: "Manage your schedule",
  //     to: "/calendar",
  //     icon: Calendar,
  //     iconBackground: "bg-red-100",
  //     iconForeground: "text-red-700",
  //   },
  //   {
  //     name: "Billing",
  //     description: "Manage your billing",
  //     to: "/billing",
  //     icon: CreditCard,
  //     iconBackground: "bg-indigo-100",
  //     iconForeground: "text-indigo-700",
  //   },
  //   {
  //     name: "Documentation",
  //     description: "Read the docs",
  //     to: "/docs",
  //     icon: BookOpen,
  //     iconBackground: "bg-teal-100",
  //     iconForeground: "text-teal-700",
  //   },
  //   {
  //     name: "Settings",
  //     description: "Adjust your settings",
  //     to: "/settings",
  //     icon: Settings,
  //     iconBackground: "bg-gray-100",
  //     iconForeground: "text-gray-700",
  //   },
  // ]

  const categories = [
    {
      category: "Control Tower",
      items: [
        {
          name: "Inventory Control",
          description: "Balance your demand and supply",
          to: `/workspaces/${workspaceId}/inventory/invcontrol`,
          icon: HomeIcon,
          highlight: true,
          iconBackground: "bg-blue-100",
          iconForeground: "text-blue-700",
        },
      
        {
          name: "Orders and Returns",
          description: "Manage your orders and returns",
          to: "/analytics",
          icon: BarChart,
          iconBackground: "bg-green-100",
          iconForeground: "text-green-700",
        },
        {
          name: "Warehousing",
          description: "Manage your warehouse",
          to: "/workspaces/${workspaceId}/warehouse/control",
          icon: ShoppingCart,
          iconBackground: "bg-purple-100",
          iconForeground: "text-purple-700",
        },
      
      
        {
          name: "Transportation",
          description: "Manage your transportation",
          to: "/workspaces/${workspaceId}/warehouse/control",
          icon: ShoppingCart,
          iconBackground: "bg-purple-100",
          iconForeground: "text-purple-700",
        },
        {
          name: "Finance",
          description: "Manage your finance",
          to: "/finance",
          icon: Users,
          iconBackground: "bg-yellow-100",
          iconForeground: "text-yellow-700",
        },
        {
          name: "Procurement",
          description: "Manage your procurement",
          to: "/procurement",
          icon: ShoppingCart,
          iconBackground: "bg-purple-100",
          iconForeground: "text-purple-700",
        },
      ],
    },
    {
      category: "Digital Twin",
      items: [
        {
          name: "Orders",
          description: "View your orders",
          to: `/workspaces/${workspaceId}/warehouse/control`,
          icon: FileText,
          iconBackground: "bg-pink-100",
          iconForeground: "text-pink-700",
        },
        {
          name: "Calendar",
          description: "Manage your schedule",
          to: "/calendar",
          icon: Calendar,
          iconBackground: "bg-red-100",
          iconForeground: "text-red-700",
        },
        {
          name: "Billing",
          description: "Manage your billing",
          to: "/billing",
          icon: CreditCard,
          iconBackground: "bg-indigo-100",
          iconForeground: "text-indigo-700",
        },
        {
          name: "Settings",
          description: "Adjust your settings",
          to: "/settings",
          icon: Settings,
          iconBackground: "bg-gray-100",
          iconForeground: "text-gray-700",
        },
      ],
    },
    {
      category: "Advance Analytics",
      items: [
        {
          name: "API",
          description: "API documentation",
          to: "/api",
          icon: Code,
          iconBackground: "bg-cyan-100",
          iconForeground: "text-cyan-700",
        },
        {
          name: "Database",
          description: "Database management",
          to: "/database",
          icon: Database,
          iconBackground: "bg-emerald-100",
          iconForeground: "text-emerald-700",
        },
        {
          name: "Deployment",
          description: "Deployment options",
          to: "/deployment",
          icon: Cloud,
          iconBackground: "bg-sky-100",
          iconForeground: "text-sky-700",
        },
        {
          name: "Integrations",
          description: "Third-party integrations",
          to: "/integrations",
          icon: Layers,
          iconBackground: "bg-violet-100",
          iconForeground: "text-violet-700",
        },
      ],
    },
    {
      category: "Unified Data Platform",
      items: [
        {
          name: "Documentation",
          description: "Read the docs",
          to: "/docs",
          icon: BookOpen,
          iconBackground: "bg-teal-100",
          iconForeground: "text-teal-700",
        },
        {
          name: "Support",
          description: "Get help and support",
          to: "/support",
          icon: LifeBuoy,
          iconBackground: "bg-amber-100",
          iconForeground: "text-amber-700",
        },
        {
          name: "Security",
          description: "Security settings",
          to: "/security",
          icon: Shield,
          iconBackground: "bg-lime-100",
          iconForeground: "text-lime-700",
        },
        {
          name: "Marketplace",
          description: "Explore extensions",
          to: "/marketplace",
          icon: Globe,
          iconBackground: "bg-fuchsia-100",
          iconForeground: "text-fuchsia-700",
        },
      ],
    },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b flex items-center justify-between p-2 bg-blue-900">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5 text-white" />
        </Button>

        <Link href="/" className="flex items-center gap-2">
       {isMobile ? (
         <Image src="/assets/logo.png" alt="logo" width={60} height={60} />
       ) : (
         <>
           <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
           <Image src="/assets/white-logo.png" alt="logo" width={180} height={180} />
         </>
       )}
      </Link>
        {/* <div className="flex items-center gap-2">
          <span className="font-semibold text-white">{isMobile ? "Azure" : "Microsoft Azure"}</span>
          <div className="h-6 w-px bg-gray-300 mx-2" />
          <span className="text-white">bnai</span>
        </div> */}
      </div>

      {/* {!isMobile ? (
        <div className="relative w-1/3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-white" />
          <Input placeholder="Search data, notebooks, recents, and more..." className="pl-8 pr-4 " />
          <span className="absolute right-2 top-2 text-xs text-white">CTRL + P</span>
        </div>
      ) : (
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="h-5 w-5" />
        </Button>
      )} */}
  <GlobalSearch />
      <div className="flex items-center gap-2">
        {!isMobile &&    <Suspense fallback={<div className="w-40 h-9 bg-neutral-200 rounded-md animate-pulse"></div>}>
        <WorkspaceSwitcherHeader />
      </Suspense>}
       
        <UserButton />

        <MegaDropdownCategories categories={categories} />
      </div>
    </header>
  )
}
