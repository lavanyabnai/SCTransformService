import { Card, CardContent, CardTitle } from "../ui/card";
import { CardHeader } from "../ui/card";
import { HistoryChart } from "./HistoryChart";

const stats = [
  { name: "Supplier A 97% OTIF", stat: "3 Days", sub: "Avg Lead Time" },
  { name: "Supplier B 97% OTIF", stat: "6 Days", sub: "Avg Lead Time" },
];

export default function HistoryAnalysis() {
  return (
    <div>
      <CardTitle className="px-2 py-6 text-xl text-blue-900">
        History Analysis
      </CardTitle>

      <div className="grid grid-cols-3 gap-x-4">
        <div className="rounded-lg border p-2 shadow">
        <h1 className="text-base font-semibold">Oriental tile Diglas - SP9943-1</h1>
          <HistoryChart />
        </div>

        <div className="col-span-2 rounded-lg border p-2 shadow">
          <h1 className="text-base font-semibold">Supplier Score Card</h1>
          <dl className="grid grid-cols-2 gap-x-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border p-4"
              >
                <dt className="flex justify-center text-sm text-center font-medium text-gray-500">
                  {item.name}
                </dt>
                <dd className="flex justify-center mt-1 text-3xl font-semibold text-blue-900">
                  {item.stat}
                </dd>

                <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                  {item.sub}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
