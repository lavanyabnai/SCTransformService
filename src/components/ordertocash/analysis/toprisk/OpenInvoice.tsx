"use client"

import { Card, CardTitle, CardHeader } from "@/components/ui/card"


export const OpenInvoice = () => {
  // Data extracted from the invoice risk analysis table in the image
  const invoiceData = [
    {
        TransactionDueDate:"06/18/2022",
        PredictionDate:"02/19/2023",
        PredictedDelayDays:183,
        TransactionNumber: "1323070",
        TransactionTypeName:"Invoice",
        CustomerPurchaseOrderNumber:"95666",
        BusinessUnitName:"US1 Business Unit",
        FulfillmentStatus:"Awaiting Shipping",
        CustomerName:"Tidemark",
        PaymentTermName:"Immediate",
        DefaultScore:0.96,
        ScheduleRiskPercentile:16,
        OverDueAmount:746.0,
        AtRiskUnpaidAmount:716.16,
        ScheduleRiskDecile:2,
    },
    {
        TransactionDueDate:"06/18/2022",
        PredictionDate:"02/19/2023",
        PredictedDelayDays:183,
        TransactionNumber: "1323203",
        TransactionTypeName:"Invoice",
        CustomerPurchaseOrderNumber:"95460",
        BusinessUnitName:"US1 Business Unit",
        FulfillmentStatus:"Awaiting Shipping",
        CustomerName:"LAF Enterprises",
        PaymentTermName:"Immediate",
        DefaultScore:0.96,
        ScheduleRiskPercentile:52,
        OverDueAmount:8917.73,
        AtRiskUnpaidAmount:8561.02,
        ScheduleRiskDecile:6,
    },
    {
        TransactionDueDate:"06/18/2022",
        PredictionDate:"02/19/2023",
        PredictedDelayDays:183,
        TransactionNumber: "1323229",
        TransactionTypeName:"Invoice",
        CustomerPurchaseOrderNumber:"95613",
        BusinessUnitName:"US1 Business Unit",
        FulfillmentStatus:"Awaiting Shipping",
        CustomerName:"Tidemark",
        PaymentTermName:"Immediate",
        DefaultScore:0.96,
        ScheduleRiskPercentile:25,
        OverDueAmount:1592.87,
        AtRiskUnpaidAmount:1529.16,
        ScheduleRiskDecile:3,
    },
  ]

  return (
    <Card className="space-y-8">
        <CardHeader>
            <CardTitle>Open Invoices Details - Predictive Risk Analysis</CardTitle>
        </CardHeader>


      {/* Data table for reference */}
      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="h-10 px-4 text-left font-medium">Transaction Due Date</th>
                <th className="h-10 px-4 text-left font-medium">Prediction Date</th>
                <th className="h-10 px-4 text-left font-medium">Predicted Delay Days</th>
                <th className="h-10 px-4 text-left font-medium">Transaction Number</th>
                <th className="h-10 px-4 text-left font-medium">Transaction Type</th>
                <th className="h-10 px-4 text-left font-medium">Customer Purchase Order Number</th>
                <th className="h-10 px-4 text-left font-medium">Business Unit</th>
                <th className="h-10 px-4 text-left font-medium">Fulfillment Status</th>
                <th className="h-10 px-4 text-left font-medium">Customer</th>
                <th className="h-10 px-4 text-left font-medium">Payment Term</th>
                <th className="h-10 px-4 text-left font-medium">Default Score</th>
                <th className="h-10 px-4 text-right font-medium">Overdue Amount</th>
                <th className="h-10 px-4 text-right font-medium">At-Risk Amount</th>
                <th className="h-10 px-4 text-center font-medium">Schedule Risk Percentile</th>
                <th className="h-10 px-4 text-center font-medium">Schedule Risk Decile</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((invoice, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{invoice.TransactionDueDate}</td>
                  <td className="p-4">{invoice.PredictionDate}</td>
                  <td className="p-4">{invoice.PredictedDelayDays}</td>
                  <td className="p-4">{invoice.TransactionNumber}</td>
                  <td className="p-4">{invoice.TransactionTypeName}</td>
                  <td className="p-4">{invoice.CustomerPurchaseOrderNumber}</td>
                  <td className="p-4">{invoice.BusinessUnitName}</td>
                  <td className="p-4">{invoice.FulfillmentStatus}</td>
                  <td className="p-4">{invoice.CustomerName}</td>
                  <td className="p-4">{invoice.PaymentTermName}</td>
                  <td className="p-4">{invoice.DefaultScore}</td>
                  <td className="p-4 text-right">${invoice.OverDueAmount.toLocaleString()}</td>
                  <td className="p-4 text-right">${invoice.AtRiskUnpaidAmount.toLocaleString()}</td>
                  <td className="p-4 text-center">{invoice.ScheduleRiskPercentile}</td>
                  <td className="p-4 text-center">{invoice.ScheduleRiskDecile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}

