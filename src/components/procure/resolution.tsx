import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2, Clock, Lightbulb } from "lucide-react"
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

export default function Resolution() {
  return (
    <div>
      <div className="flex items-center mb-4">
        <Lightbulb className="h-5 w-5 text-blue-900 mr-2" />
        <h2 className="text-xl font-semibold text-blue-900">Resolution Options</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg shadow">
          <div className="p-4 border-b bg-gray-50">
            <h3 className="font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2 text-yellow-500" />
              Option 1: Wait for Recovery
            </h3>
          </div>
          <div className="flex flex-col justify-between h-[calc(100%-56px)]">
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                  <span>Wait for supplier to recover capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                  <span>Estimated recovery: 14-21 days</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                  <span>Production delay risk: High</span>
                </li>
              </ul>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cost:</span>
                  <Badge variant="outline" className="text-red-500">
                    $0
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Production Impact:</span>
                  <Badge variant="destructive">High</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Customer Impact:</span>
                  <Badge variant="destructive">High</Badge>
                </div>
              </div>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="m-4" variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Select Option
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Wait for Supplier Recovery?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This option will result in production delays and potential customer impact. Are you sure you want to
                    proceed?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="border rounded-lg shadow">
          <div className="p-4 border-b bg-blue-50">
            <h3 className="font-medium flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-blue-500" />
              Option 2: Split Order with Alternate Supplier
            </h3>
            <Badge className="mt-2 bg-blue-500">Recommended</Badge>
          </div>
          <div className="flex flex-col justify-between h-[calc(100%-56px)]">
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                  <span>Keep 120 units from Oriental Manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                  <span>Order 80 units from Acme Tiles (expedited)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>Minimal production impact</span>
                </li>
              </ul>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cost:</span>
                  <Badge variant="outline" className="text-red-500">
                    $5,150
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Production Impact:</span>
                  <Badge className="bg-green-500">Low</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Customer Impact:</span>
                  <Badge className="bg-green-500">None</Badge>
                </div>
              </div>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="m-4">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Select Option
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Split Order with Alternate Supplier?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will create a purchase order for 80 units from Acme Tiles with expedited shipping at a cost of
                    $5,150. Do you want to proceed?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="border rounded-lg shadow">
          <div className="p-4 border-b bg-gray-50">
            <h3 className="font-medium flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
              Option 3: Full Order from Alternate Supplier
            </h3>
          </div>
          <div className="flex flex-col justify-between h-[calc(100%-56px)]">
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                  <span>Cancel order with Oriental Manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-1.5 mr-2"></span>
                  <span>Order full 200 units from Acme Tiles</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                  <span>Potential supplier relationship impact</span>
                </li>
              </ul>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cost:</span>
                  <Badge variant="outline" className="text-red-500">
                    $8,350
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Production Impact:</span>
                  <Badge className="bg-green-500">None</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Supplier Relationship:</span>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    At Risk
                  </Badge>
                </div>
              </div>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="m-4" variant="outline">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Select Option
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Switch to Alternate Supplier?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will cancel your current order with Oriental Manufacturing and create a new purchase order with
                    Acme Tiles at a cost of $8,350. This may impact your relationship with Oriental Manufacturing. Do
                    you want to proceed?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  )
}
