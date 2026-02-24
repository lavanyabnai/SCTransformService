import ProcureTable from "./procureTable";
import StatsStackCol from "./expenseCostCol";
import ExpenseReportCol from "./expenseReportCol";
import { Card, CardContent } from "@/components/ui/card";

export default function POGovernance() {
  return (
    <div className="m-4">
      <div className="w-100 my-2 flex  justify-between p-4 rounded-lg border bg-white">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
                        Procurement Governance
                    </h2>

                    <div className="flex items-center justify-end"></div>
                </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <Card>
          <CardContent className="mt-4 grid items-center gap-4">
            <StatsStackCol />
            <ExpenseReportCol />
          </CardContent>
        </Card>
        <Card className="">
          <CardContent className="p-0">
          <ProcureTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
