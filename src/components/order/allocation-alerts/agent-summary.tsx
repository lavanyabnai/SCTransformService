"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AgentSummary() {
  return (
    <Card className="bg-purple-50 border-purple-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-purple-700 flex items-center">
          <span className="mr-2">🤖</span>
          Agent Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-purple-600">The agent summary of the alert and the proposed solution.</p>
      </CardContent>
    </Card>
  )
}
