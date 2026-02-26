import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InventoryData {
  partNumber: string
  inventoryCost: number
  avgDemandValue: number
  noOfShorts: number
  noOfLong: number
  weeks: number[]
}

const inventoryData: InventoryData[] = [
  {
    partNumber: "PN123",
    inventoryCost: 26.551,
    avgDemandValue: 330,
    noOfShorts: 0,
    noOfLong: 0,
    weeks: [108, 104, 28, 27, 33, 39, 33, 39, 28, 29, 28, 28],
  },
  {
    partNumber: "PN124",
    inventoryCost: 26.569,
    avgDemandValue: 510,
    noOfShorts: 0,
    noOfLong: 12,
    weeks: [2588, 2524, 2524, 2524, 3083, 3077, 3077, 3077, 3064, 3064, 3064, 3064],
  },
  {
    partNumber: "PN125",
    inventoryCost: 20.307,
    avgDemandValue: 302,
    noOfShorts: 0,
    noOfLong: 12,
    weeks: [67, 126, 126, 126, 166, 171, 169, 157, 132, 132, 132, 132],
  },
  {
    partNumber: "PN126",
    inventoryCost: 10.434,
    avgDemandValue: 511,
    noOfShorts: 0,
    noOfLong: 12,
    weeks: [922, 919, 917, 915, 912, 910, 908, 905, 847, 845, 1094, 1092],
  },
  {
    partNumber: "PN127",
    inventoryCost: 10.261,
    avgDemandValue: 110,
    noOfShorts: 0,
    noOfLong: 12,
    weeks: [174, 165, 178, 176, 174, 149, 149, 130, 157, 143, 130, 130],
  },
  {
    partNumber: "PN128",
    inventoryCost: 10.255,
    avgDemandValue: 124,
    noOfShorts: 0,
    noOfLong: 12,
    weeks: [83, 87, 87, 90, 168, 139, 124, 121, 121, 121, 121, 121],
  },
  {
    partNumber: "PN129",
    inventoryCost: 8.259,
    avgDemandValue: 395,
    noOfShorts: 0,
    noOfLong: 7,
    weeks: [87, 57, 44, 27, 35, 33, 25, 7, 14, 13, 12, 12],
  },
  {
    partNumber: "PN130",
    inventoryCost: 13.132,
    avgDemandValue: 985,
    noOfShorts: 1,
    noOfLong: 6,
    weeks: [1, 1, 30, 30, 30, 30, 75, 17, 8, 8, 3, 3],
  },
  {
    partNumber: "PN131",
    inventoryCost: 54.198,
    avgDemandValue: 1851,
    noOfShorts: 2,
    noOfLong: 9,
    weeks: [26, 40, 48, 36, 29, 33, 29, 22, 15, 12, 17, 17],
  },
  {
    partNumber: "PN132",
    inventoryCost: 30.502,
    avgDemandValue: 876,
    noOfShorts: 4,
    noOfLong: 7,
    weeks: [3, 33, 25, 21, 33, 24, 21, 19, 1, 4, 15, 15],
  },
  {
    partNumber: "PN133",
    inventoryCost: 8.384,
    avgDemandValue: 476,
    noOfShorts: 8,
    noOfLong: 4,
    weeks: [15, 14, 1, 1, 21, 17, 3, 1, 14, 17, 22, 22],
  },
  {
    partNumber: "PN134",
    inventoryCost: 51.516,
    avgDemandValue: 5523,
    noOfShorts: 11,
    noOfLong: 0,
    weeks: [17, 8, 8, 8, 1, 1, 8, 8, 30, 25, 20, 20],
  },
  {
    partNumber: "PN135",
    inventoryCost: 22.794,
    avgDemandValue: 5455,
    noOfShorts: 11,
    noOfLong: 0,
    weeks: [1, 1, 3, 12, 7, 6, 31, 38, 43, 47, 51, 51],
  },
  {
    partNumber: "PN136",
    inventoryCost: 9.347,
    avgDemandValue: 114,
    noOfShorts: 11,
    noOfLong: 1,
    weeks: [82, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  },
  {
    partNumber: "PN137",
    inventoryCost: 27.634,
    avgDemandValue: 3013,
    noOfShorts: 12,
    noOfLong: 0,
    weeks: [1, 1, 13, 21, 19, 20, 26, 24, 47, 45, 50, 50],
  },
]

function getCellColor(value: number): string {
  if (value < 0) {
    return "bg-red-500 text-white" // Red for negative values
  } else if (value >= 1 && value <= 20) {
    return "bg-green-300 text-black" // Light green for very small positive values
  } else if (value > 20 && value <= 50) {
    return "bg-cyan-400 text-black" // Cyan for small positive values
  } else if (value > 50 && value <= 200) {
    return "bg-green-500 text-white" // Green for medium positive values
  } else if (value > 200) {
    return "bg-blue-500 text-white" // Blue for large positive values
  }
  return "bg-gray-100" // Default
}

export default function InventoryTable() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Inventory Management Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Product Id</TableHead>
                <TableHead className="font-semibold">Inventory Cost ($)</TableHead>
                <TableHead className="font-semibold">Average Demand Value ($)</TableHead>
                <TableHead className="font-semibold">No. of Shorts</TableHead>
                <TableHead className="font-semibold">No. of Long</TableHead>
                <TableHead className="font-semibold">Week 1</TableHead>
                <TableHead className="font-semibold">Week 2</TableHead>
                <TableHead className="font-semibold">Week 3</TableHead>
                <TableHead className="font-semibold">Week 4</TableHead>
                <TableHead className="font-semibold">Week 5</TableHead>
                <TableHead className="font-semibold">Week 6</TableHead>
                <TableHead className="font-semibold">Week 7</TableHead>
                <TableHead className="font-semibold">Week 8</TableHead>
                <TableHead className="font-semibold">Week 9</TableHead>
                <TableHead className="font-semibold">Week 10</TableHead>
                <TableHead className="font-semibold">Week 11</TableHead>
                <TableHead className="font-semibold">Week 12</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.partNumber}</TableCell>
                  <TableCell>${item.inventoryCost.toFixed(3)}</TableCell>
                  <TableCell>${item.avgDemandValue}</TableCell>
                  <TableCell>{item.noOfShorts}</TableCell>
                  <TableCell>{item.noOfLong}</TableCell>
                  {item.weeks.map((week, weekIndex) => (
                    <TableCell
                      key={weekIndex}
                      className={`text-center font-medium ${getCellColor(week)}`}
                      style={{ width: "60px" }}
                    >
                      {week}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
