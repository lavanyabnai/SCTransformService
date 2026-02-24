"use client"

import StatsLine from '@/components/warehouse/picking/StatsLine';
import StatsColumn from '@/components/warehouse/picking/StatsColumn';
import StatsArea from '@/components/warehouse/picking/StatsArea';


const stats = [
    { name: "Unit Cost", stat: "$9.37k" },
    { name: "On-Hand Amount", stat: "$11.64M" },
    { name: "On-Hand Qty", stat: "$93.66M" },
    { name: "On Time Shipment %", stat: "$30.56M" },
];


export default function RecivingAnalysisRoute() {

    return (
        <>
            <div className="flex flex-col">
                <div>
                    <dl className="mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4">
                        {stats.map((item) => (
                            <div
                                key={item.name}
                                className="items-center overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-5 shadow sm:p-6"
                            >
                                <dt className="truncate text-center text-lg font-medium text-gray-500">
                                    {item.name}
                                </dt>
                                <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
                                    {item.stat}
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <div className="relative">
                        <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                        >
                            <div className="mx-4 w-full border-t border-gray-200" />
                        </div>
                    </div>
                </div>

                {/* charts */}

                <ul className="mx-4 my-4 grid grid-cols-2 gap-4">
                   
                    <StatsLine />

                    <StatsColumn />
                    <StatsArea />
                  
                       
                
                </ul>

            </div>
        </>
    );
}
