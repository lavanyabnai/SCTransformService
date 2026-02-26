"use client";

// import { GiFactory } from "react-icons/gi";              // Workflow Builder
// import { MdOutlineInventory2 } from "react-icons/md";    // Inventory Optimization
// import { TbChartHistogram } from "react-icons/tb";       // Supply Chain Simulation
// import { RiGlobalLine, RiBuilding2Line, RiBuilding4Line } from "react-icons/ri"; // Remix icons
// import { FaWarehouse } from "react-icons/fa";            // Inventory Policy Simulation


// const data = [
//   {
//     label: "KPI Management",
//     href: "/controlKpi/kpiManagement",
//     icon: GiFactory,
//     activeIcon: GiFactory,
//   },
//   {
//     label: "Inventory Control",
//     href: "/advance/invSim",
//     icon: MdOutlineInventory2,
//     activeIcon: MdOutlineInventory2,
//   },
//   {
//     label: "Supply Chain Simulation",
//     href: "/advance/supplyChain",
//     icon: TbChartHistogram,
//     activeIcon: TbChartHistogram,
//   },
//   {
//     label: "International Distribution",
//     href: "/advance/interDistr",
//     icon: RiGlobalLine,
//     activeIcon: RiGlobalLine,
//   },
//   {
//     label: "Inventory Policy Simulation",
//     href: "/advance/invPolicy",
//     icon: FaWarehouse,
//     activeIcon: FaWarehouse,
//   },
//   {
//     label: "Distribution Center Simulation",
//     href: "/advance/dcSim",
//     icon: RiBuilding2Line,
//     activeIcon: RiBuilding2Line,
//   },
//   {
//     label: "Fullfillment Center Simulation",
//     href: "/advance/fullfillSim",
//     icon: RiBuilding4Line,
//     activeIcon: RiBuilding4Line,
//   },

// ];

// const data2 = [
  // {
  //   label: "Task Manager",
  //   href: "/advance/taskmange",
  //   icon: GoHome,
  //   activeIcon: GoHomeFill,
  // },
  // {
  //   label: "My Tasks",
  //   href: "/advance/tasks",
  //   icon: GoCheckCircle,
  //   activeIcon: GoCheckCircleFill,
  // },
  // {
  //   label: "Alert Config",
  //   href: "/advance/createEvent",
  //   icon: GoCheckCircle,
  //   activeIcon: GoCheckCircleFill,
  // },
  // {
  //   label: "Settings",
  //   href: "/advance/settings",
  //   icon: SettingsIcon,
  //   activeIcon: SettingsIcon,
  // },
  // {
  //   label: "Members",
  //   href: "/advance/members",
  //   icon: UsersIcon,
  //   activeIcon: UsersIcon,
  // },
// ];

interface InventoryLayoutProps {
  children: React.ReactNode;
}

export default function ProcureLayout({ children }: InventoryLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="mt-20 w-full h-full">



            <main className="py-2 px-6 ">{children}</main>

        </div>
      </div>

  );
}
