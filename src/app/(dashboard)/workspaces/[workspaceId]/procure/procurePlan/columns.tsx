"use client";

import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/data-table-column-header-inci'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { ButtonNormal } from '@/components/ui/button-normal'
import { labels, statuses } from '@/app/data/columndata/data'
import { Task } from '@/app/data/columndata/schema'
import { useRouter } from 'next/navigation';

import { useWorkspaceId } from '@/features/workspaces/hooks/use-workspace-id';
import { useCreateTaskModal } from "@/features/tasks/hooks/use-create-task-modal";
const ActionCell = ({ row }: { row: any }) => {
  const workspaceId = useWorkspaceId();
  const router = useRouter();
  return (
    // <Link href={`/workspaces/${workspaceId}/controlTower/${row.original.id}`}>
    <ButtonNormal
      className="bg-yellow-50 border border-yellow-300 text-yellow-700 hover:bg-yellow-100"
    onClick={() => router.push(`/workspaces/${workspaceId}/procure/procurePlan/${row.original.id}`)}
    >
      Open Event
    </ButtonNormal>
    // </Link>
  );
};
const TaskActionCell = () => {
  const { open } = useCreateTaskModal();

  return (
    <ButtonNormal className="bg-blue-500 h-8 w-8 hover:bg-blue-100" onClick={open}>
      <span className="text-center text-xl font-bold text-white">+</span>
    </ButtonNormal>
  );
};

export const columns: ColumnDef<Task>[] = [

  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'label',
    // header: ({ column }) => (
    //   // <DataTableColumnHeader column={column} title="Function" />
    // ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2 w-[130px]  ">
          {label ? (
            <Badge
              className={`rounded-md  ${label.color} ${label.textClr}`}
              variant="outline"
            >
              {label.label}
            </Badge>
          ) : null}
        </div>
      )
    },
  },
  {
    accessorKey: 'sku',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SKU" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 h-10">
          <span className="max-w-[500px] text-base font-medium ">
            {row.getValue('sku')}
          </span>
        </div>
      )
    },
  },
  // {
  //   accessorKey: 'id',
  //   header: 'expId'
  // },
  {
    accessorKey: 'dc',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DC" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] text-base  ">{row.getValue('dc')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'store',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Store" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] text-base  ">
            {row.getValue('store')}
          </span>
        </div>
      )
    },
  },

  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      // console.log(row.getValue('status'))
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      )
      if (!status) {
        return null
      }

      return (
        <div className={`flex w-[150px] items-center ${status.textClr}`}>
          {status.icon ? (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          ) : null}
          <span className="text-base font-semibold">{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] text-base  ">
            {row.getValue('title')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'risk',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Risk" />
    ),
    cell: ({ row }) => {
      return <div className="flex space-x-2">{row.getValue('risk')}</div>
    },
  },
  {
    accessorKey: 'resolution',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Resolution" />
    ),
    cell: ({ row }) => {
      return <div className="flex space-x-2">{row.getValue('resolution')}</div>
    },
  },
  // {
  //   accessorKey: 'severity',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Severity" />
  //   ),
  //   cell: ({ row }) => {
  //     const status = dot.find(
  //       (status) => status.value === row.getValue('severity')
  //     )

  //     if (!status) {
  //       return null
  //     }

  //     return (
  //       <div className="flex w-[80px] items-center">
  //         {status && (
  //           <svg
  //             className={`${status.fill} mr-2 h-2 w-2`}
  //             viewBox="0 0 6 6"
  //             aria-hidden="true"
  //           >
  //             <circle cx={3} cy={3} r={3} />
  //           </svg>
  //         )}
  //         {status && status.label ? <span>{status.label}</span> : null}
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },
  {
    accessorKey: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Options" />
    ),
    cell: ({ row }) => <ActionCell row={row} />,
  },
  {
    accessorKey: 'taskActions',
    header: 'Tasks',
    cell: () => {
      return (
        <TaskActionCell />
      )
    },
  },
  // {
  //   accessorKey: 'action',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Action" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[500px] truncate  ">
  //           {row.getValue('action')}
  //         </span>
  //       </div>
  //     )
  //   },
  // },
  // {
  //   accessorKey: 'owner',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Owner" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[500px] truncate  ">
  //           {row.getValue('owner')}
  //         </span>
  //       </div>
  //     )
  //   },
  // },
  // {
  //   accessorKey: 'sop',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="S&OP" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[500px] truncate  ">
  //           {row.getValue('sop')}
  //         </span>
  //       </div>
  //     )
  //   },
  // },
]
