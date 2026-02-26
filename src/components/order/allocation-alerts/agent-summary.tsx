"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, CheckCircle, Clock, AlertTriangle } from "lucide-react"

export default function AgentSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-purple-600" />
          AI Agent Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
            <Bot className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-sm text-gray-600">Alerts Analyzed</p>
              <p className="text-xl font-bold">156</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Auto-Resolved</p>
              <p className="text-xl font-bold">89</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
            <Clock className="h-8 w-8 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-600">Pending Review</p>
              <p className="text-xl font-bold">42</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <div>
              <p className="text-sm text-gray-600">Escalated</p>
              <p className="text-xl font-bold">25</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
