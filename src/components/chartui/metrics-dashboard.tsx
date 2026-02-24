import { Activity, CreditCard, DollarSign, Users } from "lucide-react"
import { MetricCard } from "./metric-card"

export default function MetricsDashboard() {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard title="Total Revenue" value="$45,231.89" change="+20.1% from last month" icon={<DollarSign className="h-4 w-4 text-gray-500" />} />
                <MetricCard title="Subscriptions" value="+2350" change="+180.1% from last month" icon={<Users className="h-4 w-4 text-gray-500" />} />
                <MetricCard title="Sales" value="+12,234" change="+19% since last month" icon={<CreditCard className="h-4 w-4 text-gray-500" />} />
                <MetricCard title="Active Now" value="+573" change="+201 since last hour" icon={<Activity className="h-4 w-4 text-gray-500" />} />
            </div>
        </div>
    )
}

