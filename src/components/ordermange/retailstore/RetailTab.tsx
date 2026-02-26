'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import StorefillBar from "./StorefillBar";
import OnshelfBar from "./OnshelfBar";
import DaysBar from "./DaysBar";
import StockoutBar from "./StockoutBar";


export default function RetailTab() {
    return (
        <div>
            <Tabs defaultValue="daily">
                <div className="flex justify-between my-2 p-4 rounded-lg border bg-white">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display ">
                    Retail Store Performance Overview

                    </h2>
                    <div className="flex items-center justify-end">
                            <TabsList className="w-full">
                                <TabsTrigger value="Week">Week</TabsTrigger>
                                <TabsTrigger value="Month">Month</TabsTrigger>
                                <TabsTrigger value="Quarter">Quarter</TabsTrigger>

                            </TabsList>
                        </div>
                </div>
                <TabsContent value="daily">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        <div className="grid col-span-1 gap-3">
                        <StorefillBar />
                        </div>
                        <div className="grid col-span-1 gap-3">
                        <OnshelfBar />
                        </div>
                        <div className="grid col-span-1">
                        <DaysBar />
                        </div>
                        <div className="grid col-span-1">
                        <StockoutBar />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}