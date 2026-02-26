"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";

import InvTrunBar from "./InvTrunBar";
import SlowMovingHeat from "./SlowMovingHeat";
import ShrinkBar from "./ShrinkBar";
import MarkdownLine from "./MarkdownLine";

export default function InvHealthTab() {
  return (
    <div>
      <Tabs defaultValue="daily">
        <div className="my-4 p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display ">
            Inventory Health Analysis
          </h2>
        </div>
        <TabsContent value="daily">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <InvTrunBar />
            <SlowMovingHeat />
            <ShrinkBar />
            <MarkdownLine/>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
