import { ColumnDef } from '@tanstack/react-table'

// import { DataTableColumnHeader } from '@/components/datatable/data-table-column-header-inci'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { ButtonNormal } from '@/components/ui/button-normal'
import { statuses } from '@/features/trackTrace/components/data'
import { Task } from '@/features/trackTrace/components/schema'

import { useRouter } from 'next/navigation'
import { useWorkspaceId } from '@/features/workspaces/hooks/use-workspace-id';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActionCell = ({ row }: { row: any }) => {
  const workspaceId = useWorkspaceId();
  const router = useRouter();
  return (
    <ButtonNormal
      className="bg-yellow-50 border border-yellow-300 text-yellow-700 hover:bg-yellow-100"
      // onClick={() => router.push(`/workspaces/${row.original.workspaceId}/incidents/${row.original.id}/exp/${row.original.expId}`)}
      onClick={() => router.push(`/workspaces/${workspaceId}/warehouse/track/${row.original.orderId}`)}
    >
      Open Order
    </ButtonNormal>

  );
};
const formatDate = (dateString: string) => {

  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',

  }).format(date)
}

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
    accessorKey: 'orderId',
    header: 'Order ID',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Order ID" />
    // ),

  },
  {
    accessorKey: 'externalId',
    header: 'External Id',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="External Id" />
    // ),
  
  },
  {
    accessorKey: 'seller',
    header: 'Seller',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Seller" />
    // ),
  
  },
  {
    accessorKey: 'item',
    header: 'Item',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Item" />
    // ),
  
  },

  {
    accessorKey: 'quantity',
    header: 'Quantity',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Quantity" />
    // ),
   
  },
  {
    accessorKey: 'orderStatus',
    header: 'Order Status',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Order Status" />
    // ),
    cell: ({ row }) => {
      // console.log(row.getValue('status'))
      const status = statuses.find(
        (status) => status.value === row.getValue('orderStatus')
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
    accessorKey: 'actions',
    header: 'Options',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Options" />
    // ),
    cell: ({ row }) => {
      console.log(row.original)
      return (
        <ActionCell row={row} />
      )

    },
  },
  {
    accessorKey: 'dueDate',
    header: 'Due Date',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Due Date" />
    // ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Badge className='bg-sky-100 text-sky-600'>{formatDate(row.getValue('dueDate'))}</Badge>
        </div>
      )
    },
  },
  {
    accessorKey: 'promisedItem',
    header: 'Promised Item',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Promised Item" />
    // ),
   
  },
  {
    accessorKey: 'shipFrom',
    header: 'Ship From',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Ship From" />
    // ),
  },
  {
    accessorKey: 'promisedQty',
    header: 'Promised Qty',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Promised Qty" />
    // ),
  },
  {
    accessorKey: 'promisedDate',
    header: 'Promised Date',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Promised Date" />
    // ),
    cell: ({ row }) => {
      // Extract the date string from the row data
      const fullDate = row.getValue('dueDate') as string
      // Create a new Date object
      const dateObject = new Date(fullDate)
      // Format the date as MM-DD-YY
      const formattedDate = `${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}-${dateObject.getFullYear().toString().slice(-2)}`
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate">{formattedDate}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'dcLocation',
    header: 'DC Location',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="DC Location" />
    // ),
  },

  {
    accessorKey: 'trackingNumber',
    header: 'Tracking Number',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Tracking Number" />
    // ),
  },
  {
    accessorKey: 'receivedDate',
    header: 'Received Date',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Received Date" />
    // ),
    cell: ({ row }) => {
      // Extract the date string from the row data
      const fullDate = row.getValue('dueDate') as string
      // Create a new Date object
      const dateObject = new Date(fullDate)
      // Format the date as MM-DD-YY
      const formattedDate = `${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}-${dateObject.getFullYear().toString().slice(-2)}`
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate">{formattedDate}</span>
        </div>
      )
    },
  },

  {
    accessorKey: 'dcInventory',
    header: 'Dc Inventory',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Dc Inventory" />
    // ),
  },
  {
    accessorKey: 'storeInventory',
    header: 'Store Inventory',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Store Inventory" />
    // ),
  },
  {
    accessorKey: 'supplierInventory',
    header: 'Supplier Inventory',
    // ({ column }) => (
    //   <DataTableColumnHeader column={column} title="Supplier Inventory" />
    // ),
  },
]
