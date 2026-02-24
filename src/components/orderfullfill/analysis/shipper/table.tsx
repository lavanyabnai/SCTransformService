import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const shipmentData = [
  {
    partner: "Firebird",
    location: "Austin",
    expediteCost: "$32",
    expediteOnTime: "90%",
    standardCost: "$22",
    standardOnTime: "82%",

  },
  {
    partner: "Firebird",
    location: "Seattle",
    expediteCost: "$30",
    expediteOnTime: "75%",
    standardCost: "$38",
    standardOnTime: "55%",

  },
  {
    partner: "Prestige",
    location: "Atlanta",
    expediteCost: "$32",
    expediteOnTime: "65%",
    standardCost: "$21",
    standardOnTime: "91%",
  },
  {
    partner: "Prestige",
    location: "New York",
    expediteCost: "$35",
    expediteOnTime: "80%",
    standardCost: "$18",
    standardOnTime: "79%",
  },
  {
    partner: "Prestige",
    location: "San Fran",
    expediteCost: "$30",
    expediteOnTime: "91%",
    standardCost: "$20",
    standardOnTime: "82%",
  },
  {
    partner: "StarBoard",
    location: "Austin",
    expediteCost: "$25",
    expediteOnTime: "95%",
    standardCost: "$18",
    standardOnTime: "95%",
  },
  {
    partner: "StarBoard",
    location: "Nashville",
    expediteCost: "$27",
    expediteOnTime: "97%",
    standardCost: "$22",
    standardOnTime: "99%",
  },
  {
    partner: "StarBoard",
    location: "San Diego",
    expediteCost: "$29",
    expediteOnTime: "93%",
    standardCost: "$20",
    standardOnTime: "92%",
  },
]

export function ShippingTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption className="caption-top text-lg font-semibold mb-2 text-foreground">
          Shipments Details - Current Quarter
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2} className="border">
              Shipping Partner
            </TableHead>
            <TableHead rowSpan={2} className="border">
              Location
            </TableHead>
            <TableHead colSpan={2} className="text-center border bg-muted/50">
              Expedite
            </TableHead>
            <TableHead colSpan={2} className="text-center border bg-muted/50">
              Standard
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="text-center border bg-muted/100">Avg Cost</TableHead>
            <TableHead className="text-center border bg-muted/100">On-Time Shipment</TableHead>
            <TableHead className="text-center border bg-muted/100">Avg Cost</TableHead>
            <TableHead className="text-center border bg-muted/100">On-Time Shipment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shipmentData.map((row, index) => (
            <TableRow
              key={`${row.partner}-${row.location}`}
              className={index % 2 === 0 ? "bg-amber-100/30" : "bg-amber-200/40"}
            >
              <TableCell className="border font-medium">{row.partner}</TableCell>
              <TableCell className="border">{row.location}</TableCell>
              <TableCell className="border text-center">{row.expediteCost}</TableCell>
              <TableCell className="border text-center">{row.expediteOnTime}</TableCell>
              <TableCell className="border text-center">{row.standardCost}</TableCell>
              <TableCell className="border text-center">{row.standardOnTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

