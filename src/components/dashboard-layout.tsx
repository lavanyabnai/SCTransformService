import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Clock, DollarSign, Package, Truck, TrendingUp, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <h1 className="text-xl font-bold">Problem Solving Engine</h1>
          <nav className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-primary">
              Overview
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Analytics
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Reports
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Settings
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 p-6 container">
        <div className="grid gap-6">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard Navigation</h2>
          <p className="text-muted-foreground">
            Select a dashboard view to explore different aspects of the logistics system.
          </p>

          {/* Overview Tabs */}
          <Tabs defaultValue="executive" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="executive">Executive Overview</TabsTrigger>
              <TabsTrigger value="operational">Operational Overview</TabsTrigger>
            </TabsList>

            <TabsContent value="executive" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <DashboardCard
                  title="Freight-To-Sales Analysis"
                  description="Comprehensive analysis of freight costs relative to sales performance"
                  icon={DollarSign}
                  color="bg-blue-50 dark:bg-blue-950"
                  borderColor="border-blue-200 dark:border-blue-800"
                  iconColor="text-blue-500"
                  link="/freight-analysis"
                >
                  <p className="text-sm text-muted-foreground">
                    Track the relationship between freight expenses and sales revenue. Identify trends and opportunities
                    for optimization across different time periods and business units.
                  </p>
                </DashboardCard>

                <DashboardCard
                  title="Delivery Performance"
                  description="Detailed view of on-time delivery metrics and performance"
                  icon={Clock}
                  color="bg-green-50 dark:bg-green-950"
                  borderColor="border-green-200 dark:border-green-800"
                  iconColor="text-green-500"
                  link="/delivery-performance"
                >
                  <p className="text-sm text-muted-foreground">
                    Monitor delivery performance across regions and carriers. Analyze factors affecting delivery times
                    and identify areas for improvement in the logistics network.
                  </p>
                </DashboardCard>

                <DashboardCard
                  title="Damage Assessment"
                  description="Analysis of product damage rates and prevention strategies"
                  icon={Package}
                  color="bg-amber-50 dark:bg-amber-950"
                  borderColor="border-amber-200 dark:border-amber-800"
                  iconColor="text-amber-500"
                  link="/damage-assessment"
                >
                  <p className="text-sm text-muted-foreground">
                    Evaluate product damage patterns by carrier, route, and product type. Access detailed reports on
                    damage causes and implement preventive measures to reduce losses.
                  </p>
                </DashboardCard>

                <DashboardCard
                  title="Transportation Mode Analysis"
                  description="Breakdown of transportation modes and optimization opportunities"
                  icon={Truck}
                  color="bg-purple-50 dark:bg-purple-950"
                  borderColor="border-purple-200 dark:border-purple-800"
                  iconColor="text-purple-500"
                  link="/mode-analysis"
                >
                  <p className="text-sm text-muted-foreground">
                    Analyze the distribution of transportation modes (LTL, TL, Intermodal) and their impact on cost and
                    service. Identify opportunities to optimize the mode mix for better efficiency.
                  </p>
                </DashboardCard>
              </div>
            </TabsContent>

            <TabsContent value="operational" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DashboardCard
                  title="Transportation Cost Analysis"
                  description="Detailed breakdown of transportation costs and trends"
                  icon={DollarSign}
                  color="bg-rose-50 dark:bg-rose-950"
                  borderColor="border-rose-200 dark:border-rose-800"
                  iconColor="text-rose-500"
                  link="/transportation-cost"
                >
                  <p className="text-sm text-muted-foreground">
                    Analyze transportation costs by lane, carrier, and mode. Identify cost-saving opportunities and
                    track the effectiveness of cost reduction initiatives.
                  </p>
                </DashboardCard>

                <DashboardCard
                  title="Routing Compliance"
                  description="Analysis of routing guide adherence and exceptions"
                  icon={TrendingUp}
                  color="bg-cyan-50 dark:bg-cyan-950"
                  borderColor="border-cyan-200 dark:border-cyan-800"
                  iconColor="text-cyan-500"
                  link="/routing-compliance"
                >
                  <p className="text-sm text-muted-foreground">
                    Monitor compliance with established routing guides. Track exceptions, understand their causes, and
                    implement strategies to improve adherence to preferred carriers.
                  </p>
                </DashboardCard>

                <DashboardCard
                  title="Loading Efficiency"
                  description="Insights into loading operations and optimization"
                  icon={BarChart3}
                  color="bg-indigo-50 dark:bg-indigo-950"
                  borderColor="border-indigo-200 dark:border-indigo-800"
                  iconColor="text-indigo-500"
                  link="/loading-efficiency"
                >
                  <p className="text-sm text-muted-foreground">
                    Evaluate loading efficiency metrics including cube utilization, loading times, and dock
                    productivity. Identify bottlenecks and implement best practices to improve operations.
                  </p>
                </DashboardCard>
              </div>
            </TabsContent>
          </Tabs>

          {/* Main Dashboard Grid */}
          <h2 className="text-3xl font-bold tracking-tight mt-8">Key Analysis Areas</h2>
          <p className="text-muted-foreground">Explore detailed analytics for specific logistics performance areas.</p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              title="Carrier Performance"
              description="Comprehensive carrier evaluation and benchmarking"
              icon={Truck}
              color="bg-emerald-50 dark:bg-emerald-950"
              borderColor="border-emerald-200 dark:border-emerald-800"
              iconColor="text-emerald-500"
              link="/carrier-performance"
            >
              <p className="text-sm text-muted-foreground">
                Access detailed scorecards for your top carriers. Compare performance across key metrics including cost,
                service, and compliance. Identify top and underperforming carriers.
              </p>
            </DashboardCard>

            <DashboardCard
              title="Tender Acceptance Analysis"
              description="Detailed view of tender acceptance patterns and strategies"
              icon={TrendingUp}
              color="bg-orange-50 dark:bg-orange-950"
              borderColor="border-orange-200 dark:border-orange-800"
              iconColor="text-orange-500"
              link="/tender-acceptance"
            >
              <p className="text-sm text-muted-foreground">
                Analyze tender acceptance rates by carrier, lane, and time period. Identify rejection patterns and
                develop strategies to improve primary carrier acceptance.
              </p>
            </DashboardCard>

            <DashboardCard
              title="Utilization Metrics"
              description="Analysis of asset and capacity utilization"
              icon={BarChart3}
              color="bg-sky-50 dark:bg-sky-950"
              borderColor="border-sky-200 dark:border-sky-800"
              iconColor="text-sky-500"
              link="/utilization-metrics"
            >
              <p className="text-sm text-muted-foreground">
                Track utilization of transportation assets including weight and volume metrics. Identify opportunities
                to improve load planning and reduce empty miles.
              </p>
            </DashboardCard>

            <DashboardCard
              title="Damage Analysis"
              description="Detailed breakdown of damage incidents and prevention"
              icon={Package}
              color="bg-red-50 dark:bg-red-950"
              borderColor="border-red-200 dark:border-red-800"
              iconColor="text-red-500"
              link="/damage-analysis"
            >
              <p className="text-sm text-muted-foreground">
                Analyze damage patterns by location, carrier, and product type. Access root cause analysis and implement
                targeted prevention strategies to reduce product damage.
              </p>
            </DashboardCard>

            <DashboardCard
              title="Delivery Performance"
              description="Comprehensive analysis of on-time delivery metrics"
              icon={Clock}
              color="bg-teal-50 dark:bg-teal-950"
              borderColor="border-teal-200 dark:border-teal-800"
              iconColor="text-teal-500"
              link="/delivery-analysis"
            >
              <p className="text-sm text-muted-foreground">
                Track on-time performance by carrier, lane, and customer. Identify delivery exceptions and their causes
                to implement targeted improvement initiatives.
              </p>
            </DashboardCard>

            <DashboardCard
              title="Cost Analysis"
              description="Detailed breakdown of transportation and logistics costs"
              icon={DollarSign}
              color="bg-violet-50 dark:bg-violet-950"
              borderColor="border-violet-200 dark:border-violet-800"
              iconColor="text-violet-500"
              link="/cost-analysis"
            >
              <p className="text-sm text-muted-foreground">
                Analyze transportation costs across modes, lanes, and carriers. Identify cost drivers and opportunities
                for optimization in your logistics network.
              </p>
            </DashboardCard>
          </div>
        </div>
      </main>
    </div>
  )
}

function DashboardCard({
  title,
  description,
  icon: Icon,
  color,
  borderColor,
  iconColor,
  link,
  children,
}: {
  title: string
  description: string
  icon: React.ElementType
  color: string
  borderColor: string
  iconColor: string
  link: string
  children: React.ReactNode
}) {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md ${color} ${borderColor} border-2`}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className={`rounded-full p-2 ${iconColor} bg-white/80 dark:bg-black/20`}>
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-between" asChild>
          <Link href={link}>
            View Dashboard
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

