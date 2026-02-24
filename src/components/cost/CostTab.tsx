'use client';

import StatsColumnCost from '@/components/cost/StatsColumnCost';
import StatsColumnSpace from '@/components/cost/StatsColumnSpace';
import StatsLineLc from '@/components/cost/StatsLineLc';
import StatsLineRc from '@/components/cost/StatsLineRc';
import StatsLineReve from '@/components/cost/StatsLineReve';
import StatsLinespend from '@/components/cost/StatsLinespend';
import StatsColumnSpaceAva from '@/components/cost/StatsColumnSpaceAva';
import StatsStackCol from '@/components/cost/StatsStackCol';
export default function ReceivingTab() {
    return (
        <div>

            <div className="mt-2 w-100 flex justify-between p-4 rounded-lg border bg-white">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
                    Cost Management Metrics
                </h2>

                <div className="flex items-center justify-end">

                </div>
            </div>

            <div className="py-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <StatsColumnCost />
                <StatsColumnSpace />
                <StatsLineLc />
                <StatsLineRc />
                <StatsLineReve />
                <StatsLinespend />
                <StatsColumnSpaceAva />
                <StatsStackCol />

            </div>



        </div>
    );
}