"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GoServer } from "react-icons/go"

export default function SupplierManagement() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 p-6 border-b">
        <GoServer className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Supplier Management</h1>
      </div>

      <div className="flex-1 p-6 overflow-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">Total Suppliers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">124</p>
              <p className="text-xs text-gray-500 mt-1">Active suppliers in network</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">Supplier OTIF</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">85%</p>
              <p className="text-xs text-gray-500 mt-1">Target: 90%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">At-Risk Suppliers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-600">8</p>
              <p className="text-xs text-gray-500 mt-1">Require immediate attention</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Supplier Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Supplier A", otif: 95, status: "normal", lead: "3 days" },
                { name: "Supplier B", otif: 88, status: "warning", lead: "5 days" },
                { name: "Supplier C", otif: 72, status: "critical", lead: "8 days" },
                { name: "Supplier D", otif: 91, status: "normal", lead: "4 days" },
                { name: "Supplier E", otif: 78, status: "warning", lead: "6 days" },
              ].map((supplier, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        supplier.status === "critical"
                          ? "bg-red-500"
                          : supplier.status === "warning"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                      }`}
                    />
                    <span className="font-medium">{supplier.name}</span>
                  </div>
                  <div className="flex items-center gap-8 text-sm">
                    <div className="text-center">
                      <p className="text-gray-500">OTIF</p>
                      <p className="font-semibold">{supplier.otif}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Lead Time</p>
                      <p className="font-semibold">{supplier.lead}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
