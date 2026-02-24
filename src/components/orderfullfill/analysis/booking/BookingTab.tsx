"use client"
import BookingBarLine from "@/components/orderfullfill/analysis/booking/BookingBarLine";
import BookProArea from "@/components/orderfullfill/analysis/booking/BookProArea";
import CancelProArea from "@/components/orderfullfill/analysis/booking/CancelProArea";
import TopCustomer from "@/components/orderfullfill/analysis/booking/TopCustomer";
import DiscountStack from "@/components/orderfullfill/analysis/booking/DiscountStack";
import CancelHeat from "@/components/orderfullfill/analysis/booking/CancelHeat";
const stats = [
    { name: "Bookings", stat: "$16.73M" },
    { name: "Open Orders", stat: "$11.64M" },
    { name: "Past Due", stat: "$466.2M" },
    { name: "Order Returns", stat: "7%" },
  ];
  
  
export default function BookingTab() {
  // Data matching the chart from Jan 2022 to Sep 2022
 

  return (
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
  <ul className="mx-4 my-4 grid grid-cols-3 gap-4">
    <BookingBarLine />
    <BookProArea />
    <CancelProArea />
    <TopCustomer />
    <DiscountStack />
    <CancelHeat />
  </ul>

  
  
    </div>
  )
}

