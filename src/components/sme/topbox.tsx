import type React from "react"
import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string
  subtitle: string
  trend?: "up" | "down" | "neutral"
  color: "red" | "green" | "blue" | "navy"
  secondaryMetric?: string
  icon?: React.ReactNode
}

const MetricCard = ({ title, value, subtitle, trend = "neutral", color, secondaryMetric, icon }: MetricCardProps) => {
  const getBgColor = () => {
    switch (color) {
      case "red":
        return "bg-red-200"
      case "green":
        return "bg-green-200"
      case "blue":
        return "bg-blue-200"
      case "navy":
        return "bg-yellow-200"
      default:
        return "bg-gray-200"
    }
  }

  const getTextColor = () => {
    return color === "navy" ? "text-gray-800" : "text-gray-800"
  }

  return (
    <Card className={`${getBgColor()} border-none shadow-md overflow-hidden`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className={`text-xs font-medium ${getTextColor()} opacity-80`}>{title}</div>
          <div className="flex items-center gap-1">
            {icon}
            <span className={`text-xs font-medium ${getTextColor()} opacity-80`}>{secondaryMetric}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <span className={`text-2xl font-bold ${getTextColor()}`}>{value}</span>
          {trend === "up" && <ArrowUp className={`h-4 w-4 ${getTextColor()}`} />}
          {trend === "down" && <ArrowDown className={`h-4 w-4 ${getTextColor()}`} />}
        </div>
        <div className={`text-xs font-medium mt-1 ${getTextColor()} opacity-80 uppercase`}>{subtitle}</div>
      </CardContent>
    </Card>
  )
}

export function MetricCardsDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
      <MetricCard
        title="13 days"
        value="94%"
        subtitle="days of supply comp"
        color="green"
        secondaryMetric="2.1%"
        icon={<ArrowUp className="h-3 w-3 text-white" />}
      />

      <MetricCard
        title="250"
        value="$37.3k"
        subtitle="pool expense costs"
        color="red"
        secondaryMetric="1.8%"
        icon={<ArrowDown className="h-3 w-3 text-white" />}
      />

      <MetricCard
        title="25"
        value="$830k"
        subtitle="landed costs"
        color="green"
        secondaryMetric="2.1%"
        icon={<ArrowUp className="h-3 w-3 text-white" />}
      />

      <MetricCard
        title="30"
        value="$630k"
        subtitle="freight costs"
        color="green"
        secondaryMetric="2.1%"
        icon={<ArrowUp className="h-3 w-3 text-white" />}
      />

      <MetricCard
        title="125"
        value="97.96%"
        subtitle="on time in full"
        color="red"
        secondaryMetric="1.6%"
        icon={<ArrowDown className="h-3 w-3 text-white" />}
        trend="down"
      />

      <MetricCard
        title="175"
        value="98.22%"
        subtitle="on time delivery"
        color="green"
        secondaryMetric="1.7%"
        icon={<ArrowUp className="h-3 w-3 text-white" />}
        trend="up"
      />

      <MetricCard
        title="NEO SAVINGS THIS WEEK"
        value="$42k"
        subtitle="22 invoices"
        color="navy"
        icon={<DollarSign className="h-3 w-3 text-white" />}
      />
    </div>
  )
}

// Page component to display the metrics
export default function TopBox() {
  return (
    <div className="py-6">
      <MetricCardsDemo />
    </div>
  )
}

