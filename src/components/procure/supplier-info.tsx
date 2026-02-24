import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock, Factory, MapPin, Phone, ThumbsDown, User } from "lucide-react"

export default function SupplierInfo() {
  return (
    <Card className="text-blue-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Factory className="mr-2 h-5 w-5" />
          Supplier Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Oriental Manufacturing Co.</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Dallas, TX</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Phone className="h-4 w-4 mr-1" />
                <span>+1 (214) 555-7890</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <User className="h-4 w-4 mr-1" />
                <span>Contact: Sarah Johnson</span>
              </div>
            </div>
            <Badge variant="destructive" className="flex items-center">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Capacity Issue
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="border rounded-md p-3">
              <div className="text-sm text-gray-500">On-Time Delivery</div>
              <div className="flex items-center mt-1">
                <div className="text-xl font-semibold">76%</div>
                <Badge variant="destructive" className="ml-2 text-xs">
                  <ThumbsDown className="h-3 w-3 mr-1" />
                  -12%
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: "76%" }}></div>
              </div>
            </div>

            <div className="border rounded-md p-3">
              <div className="text-sm text-gray-500">Quality Rating</div>
              <div className="flex items-center mt-1">
                <div className="text-xl font-semibold">82%</div>
                <Badge variant="destructive" className="ml-2 text-xs">
                  <ThumbsDown className="h-3 w-3 mr-1" />
                  -5%
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "82%" }}></div>
              </div>
            </div>

            <div className="border rounded-md p-3">
              <div className="text-sm text-gray-500">Lead Time</div>
              <div className="flex items-center mt-1">
                <div className="text-xl font-semibold">14 days</div>
                <Badge variant="destructive" className="ml-2 text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  +3 days
                </Badge>
              </div>
            </div>

            <div className="border rounded-md p-3">
              <div className="text-sm text-gray-500">Capacity Utilization</div>
              <div className="flex items-center mt-1">
                <div className="text-xl font-semibold">95%</div>
                <Badge variant="destructive" className="ml-2 text-xs">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Critical
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>

          <div className="border rounded-md p-3 mt-4">
            <div className="text-sm font-medium">Capacity Issue Details</div>
            <p className="text-sm text-gray-600 mt-1">
              Supplier has reported equipment failure affecting 40% of production capacity. Estimated recovery time is
              14-21 days. Currently operating at reduced capacity and prioritizing existing orders.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
