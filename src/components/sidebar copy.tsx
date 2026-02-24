import Image from "next/image";
import Link from "next/link";

import { Projects } from "./projects";
import { Navigation } from "./navigation";
import { Navigation2 } from "./navigation2";
import { DottedSeparator } from "./dotted-separator";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { GlobalSearch } from "./global-search";
export const Sidebar = () => {
  return (
    <aside className=" h-full bg-neutral-100 p-4 w-full">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
        <h1 className="font-sans text-2xl font-bold text-[#05022d]">BlueNorth AI</h1>
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <GlobalSearch />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <Navigation2 />
      <DottedSeparator className="my-4" />
      <Projects />
    </aside>
  );
};
