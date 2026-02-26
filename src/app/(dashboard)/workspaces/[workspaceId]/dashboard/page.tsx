"use client";

import Carrying from "@/components/sme/carrier";
import Supplier from "@/components/sme/supplier";

import EventsCard from "@/components/sme/EventsCard";

import ControlTowerSum from "@/components/sme/ControlTowerSum";
import { DataTableDemo } from "@/components/sme/table";
import TopBox from "@/components/sme/topbox";
import  TickerTape from "./ticker-tape";

export default function Dashboard() {
  return (
    <div>
      <TickerTape />

      <TopBox />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 mt-2">
        <div className="col-span-3">
          <ControlTowerSum />
        </div>
        <div className="col-span-2" >
          <EventsCard />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <Carrying />
            <Supplier />
          </div>
        </div>
        <div className="col-span-2">
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
}
