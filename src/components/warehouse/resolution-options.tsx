import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, CheckCircle2, Clock, Truck } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function ResolutionOptions() {
  return (
    <div>
      <div className="flex items-center mb-4">
        <Lightbulb className="h-5 w-5 text-blue-900 mr-2" />
        <h2 className="text-xl font-semibold text-blue-900">Resolution Options</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border rounded-lg shadow">
          <div className="p-4 border-b bg-gray-50">
            <h3 className="font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2 text-yellow-500" />
              Option 1: Temporary Staffing
            </h3>
          </div>
          <CardContent className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                <span>Hire 25 temporary workers for 2 weeks</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                <span>Expedite equipment repairs with overtime</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                <span>Recovery time: 48-72 hours</span>
              </li>
            </ul>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Cost:</span>
                <Badge variant="outline" className="text-red-500">
                  $42,500
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Recovery Speed:</span>
                <Badge className="bg-yellow-500">Medium</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Customer Impact:</span>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  Moderate
                </Badge>
              </div>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full mt-4" variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Select Option
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Implement Temporary Staffing Solution?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will authorize hiring 25 temporary workers at premium rates and expedite equipment repairs with
                    overtime. Total cost: $42,500. Recovery time: 48-72 hours.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        <Card className="border rounded-lg shadow">
          <div className="p-4 border-b bg-blue-50">
            <h3 className="font-medium flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-blue-500" />
              Option 2: Comprehensive Recovery
            </h3>
            <Badge className="mt-2 bg-blue-500">Recommended</Badge>
          </div>
          <CardContent className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                <span>Hire 25 temporary workers + authorize overtime</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                <span>Rent 10 additional equipment units</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                <span>Recovery time: 24-36 hours</span>
              </li>
            </ul>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Cost:</span>
                <Badge variant="outline" className="text-red-500">
                  $68,750
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Recovery Speed:</span>
                <Badge className="bg-green-500">Fast</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Customer Impact:</span>
                <Badge className="bg-green-500">Minimal</Badge>
              </div>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full mt-4">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Select Option
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Implement Comprehensive Recovery Plan?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will authorize hiring 25 temporary workers with overtime and renting 10 additional equipment
                    units. Total cost: $68,750. Recovery time: 24-36 hours.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        <Card className="border rounded-lg shadow">
          <div className="p-4 border-b bg-gray-50">
            <h3 className="font-medium flex items-center">
              <Truck className="h-4 w-4 mr-2 text-purple-500" />
              Option 3: 3PL Outsourcing
            </h3>
          </div>
          <CardContent className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                <span>Temporarily outsource fulfillment to 3PL partner</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                <span>Focus internal resources on equipment repair</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                <span>Recovery time: 12-24 hours for critical orders</span>
              </li>
            </ul>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Cost:</span>
                <Badge variant="outline" className="text-red-500">
                  $95,000
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Recovery Speed:</span>
                <Badge className="bg-green-500">Very Fast</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Quality Control:</span>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  Reduced
                </Badge>
              </div>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full mt-4" variant="outline">
                  <Truck className="h-4 w-4 mr-2" />
                  Select Option
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Implement 3PL Outsourcing Solution?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will temporarily outsource fulfillment operations to our 3PL partner. Total cost: $95,000.
                    Recovery time: 12-24 hours for critical orders, but with potential quality control issues.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
