import { TopCustomer } from "./TopCustomer";
import { PredicatedDays } from "./PredicatedDays";
import { OpenInvoice } from "./OpenInvoice";  
import { ShippingTable } from "../../../orderfullfill/analysis/shipper/table";
const stats = [
    { name: "Total Due", stat: "$12.65M" },
    { name: "# of Overdue Invoices", stat: "743" },
    { name: "Overdue", stat: "$3.8M" },
    { name: "Avg Days Overdue", stat: "88" },
    { name: "Avg Predictive Delay Days", stat: "105" },

   
]

export default function TopRiskTab() {
  return (
    <>
    <dl className="mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-5">
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
    <div className="grid grid-cols-2 gap-4">
     <TopCustomer />
     <PredicatedDays />
</div>
   
     <OpenInvoice />
     <ShippingTable />

    </>
  );
}
