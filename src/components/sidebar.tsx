import { Projects } from "./projects";
import { Navigation } from "./navigation";
import { Navigation2 } from "./navigation2";
import { DottedSeparator } from "./dotted-separator";

export const Sidebar = () => {
  return (
    
    <aside className="p-4 h-full bg-neutral-100 w-full">
      <Navigation />
      <DottedSeparator className="my-4" />
      <Navigation2 />
      <DottedSeparator className="my-4" />
      <Projects />
    </aside>
  );
};
