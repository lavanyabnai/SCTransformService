'use client'
import React from 'react'

import { columns } from '@/features/trackTrace/components/columns-inci'
import { DataTable } from '@/components/data-table'
import taskData from '@/features/trackTrace/components/tasks.json'

export default function TrackTrace() {
  return (
        <div className="bg-white rounded-lg h-screen max-w-[1900px] mx-auto">
          <DataTable data={taskData} columns={columns} filterKey={''} onDelete={() => { }} />
        </div>
  )
}