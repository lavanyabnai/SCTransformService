"use client"

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis, Cell, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"
export default function OnTimeScatter() {
  // Data points carefully positioned to match the image
  const data = [
    // StarBoard data (light blue squares and circles)
    { partner: "StarBoard", method: "Standard", avgCost: 17, onTimeShipment: 95, size: 100 },
    { partner: "StarBoard", method: "Standard", avgCost: 19, onTimeShipment: 92, size: 100 },
    { partner: "StarBoard", method: "Standard", avgCost: 22, onTimeShipment: 100, size: 100 },
    { partner: "StarBoard", method: "Expedite", avgCost: 24, onTimeShipment: 95, size: 100 },
    { partner: "StarBoard", method: "Expedite", avgCost: 26, onTimeShipment: 97, size: 100 },
    { partner: "StarBoard", method: "Expedite", avgCost: 29, onTimeShipment: 92, size: 100 },

    // Prestige data (orange squares and circles)
    { partner: "Prestige", method: "Standard", avgCost: 17, onTimeShipment: 79, size: 100 },
    { partner: "Prestige", method: "Standard", avgCost: 19, onTimeShipment: 82, size: 100 },
    { partner: "Prestige", method: "Standard", avgCost: 21, onTimeShipment: 90, size: 100 },
    { partner: "Prestige", method: "Expedite", avgCost: 30, onTimeShipment: 90, size: 100 },
    { partner: "Prestige", method: "Expedite", avgCost: 32, onTimeShipment: 65, size: 100 },
    { partner: "Prestige", method: "Expedite", avgCost: 35, onTimeShipment: 80, size: 100 },

    // Firebird data (teal/dark green squares and circles)
    { partner: "Firebird", method: "Standard", avgCost: 22, onTimeShipment: 82, size: 100 },
    { partner: "Firebird", method: "Expedite", avgCost: 29, onTimeShipment: 75, size: 100 },
    { partner: "Firebird", method: "Expedite", avgCost: 31, onTimeShipment: 90, size: 100 },
    { partner: "Firebird", method: "Standard", avgCost: 36, onTimeShipment: 55, size: 100 },
  ]

  // Custom colors to match the image exactly
  const partnerColors = {
    StarBoard: "#a8e1dc", // Light blue
    Prestige: "#f0b775", // Orange
    Firebird: "#6b9b96", // Teal/dark green
  }

  // Custom shape renderer to match the image exactly
  const renderShape = (props: any) => {
    const { cx, cy, fill, payload } = props

    if (payload.method === "Expedite") {
      return <circle cx={cx} cy={cy} r={10} fill={fill} stroke="#fff" strokeWidth={1} />
    } else {
      return <rect x={cx - 10} y={cy - 10} width={20} height={20} fill={fill} stroke="#fff" strokeWidth={1} />
    }
  }

  // Custom legend that matches the image
  const CustomLegend = () => {
    return (
        
      <div className="flex flex-col items-start mt-4 text-sm text-gray-500">
        <div className="mb-2">
          <span className="font-medium">Shipping Partner</span>
          <div className="flex gap-4 mt-1">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3" style={{ backgroundColor: partnerColors["Firebird"] }}></div>
              <span>Firebird</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3" style={{ backgroundColor: partnerColors["Prestige"] }}></div>
              <span>Prestige</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3" style={{ backgroundColor: partnerColors["StarBoard"] }}></div>
              <span>StarBoard</span>
            </div>
          </div>
        </div>
        <div>
          <span className="font-medium">Shipping Method</span>
          <div className="flex gap-4 mt-1">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <span>Expedite</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-400"></div>
              <span>Standard</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card>
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6">On-time Shipment vs Avg Shipment Cost</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="avgCost"
              type="number"
              domain={[16, 40]}
              label={{ value: "Avg Cost", position: "bottom", offset: 0 }}
              tickFormatter={(value) => `$${value}`}
              stroke="#888"
            />
            <YAxis
              dataKey="onTimeShipment"
              type="number"
              domain={[50, 110]}
              label={{ value: "On-Time Shipment", angle: -90, position: "left", offset: -10 }}
              tickFormatter={(value) => `${value}%`}
              stroke="#888"
            />
            <ZAxis dataKey="size" range={[100, 100]} />
            <Tooltip
              formatter={(value, name) => {
                if (name === "avgCost") return [`$${value}`, "Avg Cost"]
                if (name === "onTimeShipment") return [`${value}%`, "On-Time Shipment"]
                return [value, name]
              }}
              cursor={{ strokeDasharray: "3 3" }}
            />

            {/* Render each partner's data separately to control colors */}
            {Object.keys(partnerColors).map((partner) => (
              <Scatter
                key={partner}
                name={partner}
                data={data.filter((item) => item.partner === partner)}
                shape={renderShape}
              >
                {data
                  .filter((item) => item.partner === partner)
                  .map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={partnerColors[entry.partner as keyof typeof partnerColors]} />
                  ))}
              </Scatter>
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Custom legend that matches the image */}
      <CustomLegend />
    </div>
    </Card>
  )
}

