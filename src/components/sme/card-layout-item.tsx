
import Link from "next/link";
import { Badge } from "../ui/badge";

export function InventoryCard({ data }: { data: any }) {
  return (
    <div className="overflow-y-auto h-full space-y-2">
      {data.map((inventory: any) => (
        <Link
          key={inventory.id}
          href={inventory.href}
          className="bg-sky-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center">
            <div>
              <h3 className="font-medium text-lg text-blue-900">{inventory.name}</h3>
           
            </div>
          </div>
          <div className="text-right">
            <Badge
              className="text-lg font-medium bg-sky-900 text-white rounded-full "
            >
            {inventory.amount}
            </Badge>
           
          </div>
        </Link>
      ))}
    </div>
  );
}
export function LogisticsCard({ data }: { data: any }) {
  return (
    <div className="overflow-y-auto h-full space-y-2">
      {data.map((logistics: any) => (
        <Link
          key={logistics.id}
          href={logistics.href}
          className="bg-amber-100 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center">
            <div>
              <h3 className="font-medium text-lg text-amber-900">{logistics.name}</h3>
           
            </div>
          </div>
          <div className="text-right">
            <Badge
              className="text-lg font-medium bg-amber-900 text-white rounded-full"
            >
            {logistics.amount}
            </Badge>
           
          </div>
        </Link>
      ))}
    </div>
  );
}
export function CapacityCard({ data }: { data: any }) {
  return (
    <div className="overflow-y-auto h-full space-y-2">
      {data.map((capacity: any) => (
        <Link
          key={capacity.id}
          href={capacity.href}
          className="bg-gray-100 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center">
            <div>
              <h3 className="font-medium text-lg text-gray-900">{capacity.name}</h3>
            </div>
          </div>
          <div className="text-right">
            <Badge
              className="text-lg font-medium bg-gray-900 text-white rounded-full"
            >
              {capacity.amount}
            </Badge>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function OrdersCard({ data }: { data: any }) {
  return (
    <div className="overflow-y-auto h-full space-y-2">
      {data.map((orders: any) => (
        <Link
          key={orders.id}
          href={orders.href}
          className="bg-pink-100 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center">
            <div>
              <h3 className="font-medium text-lg text-pink-900">{orders.name}</h3>
            </div>
          </div>
          <div className="text-center">
            <Badge
              className="text-lg font-medium border border-pink-900 bg-pink-900 text-white rounded-full"
            >
              {orders.amount}
            </Badge>
          </div>
        </Link>
      ))}
    </div>
  );
}
