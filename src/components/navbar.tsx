"use client";

import Image from "next/image";
import Link from "next/link";


import { UserButton } from "@/features/auth/components/user-button";
import { WorkspaceSwitcherHeader } from "./workspace-switcherHeader";
import { MobileSidebar } from "./mobile-sidebar";
import { GlobalSearch } from "./global-search";


export const Navbar = () => {


  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-6 flex items-center justify-between bg-blue-900">
      <div className="flex items-center gap-x-2">
        <MobileSidebar />
       <Link href="/" className="flex items-center gap-2">
       <Image className="block lg:hidden" src="/assets/logo.png" alt="logo" width={60} height={60} />
        <Image className="hidden lg:block" src="/assets/logo.png" alt="logo" width={40} height={40} />
        <Image className="hidden lg:block" src="/assets/white-logo.png" alt="logo" width={180} height={180} />
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
     
    
      <WorkspaceSwitcherHeader />
      <UserButton />
      </div>
    </nav>
  );
};
