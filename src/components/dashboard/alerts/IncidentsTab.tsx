'use client';


import { DataTable } from '@/components/data-table';
import taskData from '@/components/dashboard/alerts/tasks.json';
import { DataFilters } from "./data-filters";
import { columns } from '@/components/dashboard/alerts/columns';





export default function AlertsTab() {


    return (
        <div className="max-w-screen-6xl mx-auto w-full">
            <div className="px-4">
                <DataFilters />
                <DataTable

                    filterKey="warehouseId"
                    columns={columns}
                    data={taskData}
                    onDelete={() => { }}
                />
            </div>
        </div>
    );
}
