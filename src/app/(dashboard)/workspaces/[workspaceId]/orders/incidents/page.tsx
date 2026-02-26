'use client';

import { DataTable } from '@/components/data-table';
import taskData from '@/app/(dashboard)/workspaces/[workspaceId]/orders/incidents/task.json';

import { columns } from '@/app/(dashboard)/workspaces/[workspaceId]/orders/incidents/columns';

export default function IncidentPage() {

  return (
    <div className="max-w-screen-6xl mx-auto w-full h-screen">

      <div className="px-4">
        <DataTable
          filterKey="sku"
          columns={columns}
          data={taskData.map(task => ({
            ...task,
            expId: task.id
          }))}
          onDelete={() => { }}
        />
      </div>
    </div>
  );
}
