import { Aging } from "./aging";
import { OverdueRisk } from "./OverdueRisk";
import { Payment } from "./payment";
import { ChartExample } from "./overdueUnit";

const stats = [
    { name: "Total Due", stat: "$21.6M" },
    { name: "Overdue", stat: "$7.3M" },
    { name: "Overdue % of Outs", stat: "33.8%" },
    { name: "# of Overdue Invoices", stat: "2,487" },
    { name: "Avg Days Overdue", stat: "65" },
]

export default function ReceivablesTab() {
  return (
    <>
    <dl className="mx-4 grid gap-4 grid-cols-5">
      {stats.map((item) => (
        <div
          key={item.name}
          className="items-center overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-5 shadow"
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
      <Aging />

      <OverdueRisk />
   
     
      <Payment />

      <ChartExample />
    </div>
    </>
  );
}
