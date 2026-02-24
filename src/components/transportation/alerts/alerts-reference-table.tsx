"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

// Comprehensive alert types data from the logistics workflow
const alertsData = [
  {
    id: 1,
    alertType: "Unregistered vehicle",
    category: "Vehicle Registration",
    stage: "Parking-in",
    severity: "High",
    description: "Vehicle not registered in the system",
    escalationTime: "15 mins",
    responsibleTeam: "Security",
  },
  {
    id: 2,
    alertType: "Unregistered driver",
    category: "Driver Registration",
    stage: "Gate-in",
    severity: "High",
    description: "Driver not registered in the system",
    escalationTime: "10 mins",
    responsibleTeam: "Security",
  },
  {
    id: 3,
    alertType: "Driver with documents expired/expiring in 7 days",
    category: "Documentation",
    stage: "Gate-in",
    severity: "Medium",
    description: "Driver documentation issues",
    escalationTime: "20 mins",
    responsibleTeam: "Administration",
  },
  {
    id: 4,
    alertType: "Vehicle with changed driver",
    category: "Driver Assignment",
    stage: "Gate-in",
    severity: "Medium",
    description: "Driver change not updated in system",
    escalationTime: "15 mins",
    responsibleTeam: "Operations",
  },
  {
    id: 5,
    alertType: "Driver with safety training validity expired/expiring in 7 days",
    category: "Safety Compliance",
    stage: "Gate-in",
    severity: "High",
    description: "Safety training certification issues",
    escalationTime: "10 mins",
    responsibleTeam: "Safety",
  },
  {
    id: 6,
    alertType: "Palm reader failed",
    category: "Technical Failure",
    stage: "Gate-in",
    severity: "Medium",
    description: "Biometric authentication system failure",
    escalationTime: "30 mins",
    responsibleTeam: "IT Support",
  },
  {
    id: 7,
    alertType: "Vehicle inspection failed",
    category: "Vehicle Inspection",
    stage: "Gate-in",
    severity: "High",
    description: "Vehicle failed safety/quality inspection",
    escalationTime: "20 mins",
    responsibleTeam: "Quality Control",
  },
  {
    id: 8,
    alertType: "Allow ship generation failed",
    category: "System Error",
    stage: "Gate-in",
    severity: "High",
    description: "System unable to generate shipping documents",
    escalationTime: "15 mins",
    responsibleTeam: "IT Support",
  },
  {
    id: 9,
    alertType: "Vehicle with documents expired/expiring in 7 days",
    category: "Documentation",
    stage: "Gate-in",
    severity: "Medium",
    description: "Vehicle documentation issues",
    escalationTime: "20 mins",
    responsibleTeam: "Administration",
  },
  {
    id: 10,
    alertType: "Missed First weight",
    category: "Weighing Process",
    stage: "First weigh bridge",
    severity: "High",
    description: "Vehicle bypassed first weighing station",
    escalationTime: "10 mins",
    responsibleTeam: "Operations",
  },
  {
    id: 11,
    alertType: "Fixed weight mismatch (outside tolerance) for empty trucks",
    category: "Weight Verification",
    stage: "First weigh bridge",
    severity: "Medium",
    description: "Empty vehicle weight outside acceptable range",
    escalationTime: "25 mins",
    responsibleTeam: "Quality Control",
  },
  {
    id: 12,
    alertType: "IUT Weight mismatch at smelter (+/- 500kg)",
    category: "Weight Verification",
    stage: "First weigh bridge",
    severity: "High",
    description: "Significant weight discrepancy detected",
    escalationTime: "15 mins",
    responsibleTeam: "Quality Control",
  },
  {
    id: 13,
    alertType: "Tarpaulin tampered",
    category: "Security Breach",
    stage: "Loading",
    severity: "High",
    description: "Load covering has been tampered with",
    escalationTime: "10 mins",
    responsibleTeam: "Security",
  },
  {
    id: 14,
    alertType: "Digital seal / Non – digital Seals tampered or broken",
    category: "Security Breach",
    stage: "Sampling, tarpaulin, sealing, audit",
    severity: "High",
    description: "Security seals compromised",
    escalationTime: "10 mins",
    responsibleTeam: "Security",
  },
  {
    id: 15,
    alertType: "Wet material received",
    category: "Material Quality",
    stage: "Sampling, tarpaulin, sealing, audit",
    severity: "Medium",
    description: "Material moisture content exceeds limits",
    escalationTime: "30 mins",
    responsibleTeam: "Quality Control",
  },
  {
    id: 16,
    alertType: "Material not unloaded completely",
    category: "Loading Process",
    stage: "Second weigh bridge",
    severity: "Medium",
    description: "Incomplete material discharge detected",
    escalationTime: "20 mins",
    responsibleTeam: "Operations",
  },
  {
    id: 17,
    alertType: "Second weight mismatch",
    category: "Weight Verification",
    stage: "Second weigh bridge",
    severity: "High",
    description: "Loaded vehicle weight discrepancy",
    escalationTime: "15 mins",
    responsibleTeam: "Quality Control",
  },
  {
    id: 18,
    alertType: "E-way bill/invoice not generated",
    category: "Documentation",
    stage: "Gate-out",
    severity: "High",
    description: "Required shipping documents missing",
    escalationTime: "20 mins",
    responsibleTeam: "Administration",
  },
  {
    id: 19,
    alertType: "Route deviation",
    category: "Transportation",
    stage: "Transit",
    severity: "Medium",
    description: "Vehicle deviated from planned route",
    escalationTime: "45 mins",
    responsibleTeam: "Logistics",
  },
  {
    id: 20,
    alertType: "Authorized stoppage – over stay",
    category: "Transportation",
    stage: "Transit",
    severity: "Medium",
    description: "Vehicle exceeded authorized stop duration",
    escalationTime: "60 mins",
    responsibleTeam: "Logistics",
  },
  {
    id: 21,
    alertType: "Not authorized stoppage",
    category: "Transportation",
    stage: "Transit",
    severity: "High",
    description: "Unauthorized vehicle stop detected",
    escalationTime: "30 mins",
    responsibleTeam: "Security",
  },
  {
    id: 22,
    alertType: "Expected a delay in reaching the destination",
    category: "Transportation",
    stage: "Transit",
    severity: "Low",
    description: "Predicted delivery delay",
    escalationTime: "120 mins",
    responsibleTeam: "Logistics",
  },
  {
    id: 23,
    alertType: "Tampering/Pilferage",
    category: "Security Breach",
    stage: "Transit",
    severity: "Critical",
    description: "Load tampering or theft detected",
    escalationTime: "5 mins",
    responsibleTeam: "Security",
  },
  {
    id: 24,
    alertType: "ITMS/SAP is not working",
    category: "System Failure",
    stage: "All Stages",
    severity: "Critical",
    description: "Core management system failure",
    escalationTime: "5 mins",
    responsibleTeam: "IT Support",
  },
  {
    id: 25,
    alertType: "GPS is not working/blackout",
    category: "System Failure",
    stage: "Transit",
    severity: "High",
    description: "Vehicle tracking system failure",
    escalationTime: "15 mins",
    responsibleTeam: "IT Support",
  },
  {
    id: 26,
    alertType: "Network failure",
    category: "System Failure",
    stage: "All Stages",
    severity: "High",
    description: "Communication network disruption",
    escalationTime: "20 mins",
    responsibleTeam: "IT Support",
  },
  {
    id: 27,
    alertType: "ITMS hardware failure",
    category: "Hardware Failure",
    stage: "All Stages",
    severity: "High",
    description: "Physical hardware malfunction",
    escalationTime: "30 mins",
    responsibleTeam: "Maintenance",
  },
  {
    id: 28,
    alertType: "Power failure",
    category: "Infrastructure",
    stage: "All Stages",
    severity: "High",
    description: "Electrical power outage",
    escalationTime: "45 mins",
    responsibleTeam: "Maintenance",
  },
  {
    id: 29,
    alertType: "Hardware issues Broken/malfunctioning boom barrier, weight bridge, CCTV",
    category: "Hardware Failure",
    stage: "Gate-in/Gate-out",
    severity: "Medium",
    description: "Physical infrastructure equipment failure",
    escalationTime: "60 mins",
    responsibleTeam: "Maintenance",
  },
  {
    id: 30,
    alertType: "Vehicle breakdown",
    category: "Vehicle Issue",
    stage: "Transit",
    severity: "High",
    description: "Vehicle mechanical failure",
    escalationTime: "30 mins",
    responsibleTeam: "Logistics",
  },
  {
    id: 31,
    alertType: "Speed violation",
    category: "Safety Violation",
    stage: "Transit",
    severity: "Medium",
    description: "Vehicle exceeding speed limits",
    escalationTime: "20 mins",
    responsibleTeam: "Safety",
  },
]

export default function AlertsReferenceTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSeverity, setSelectedSeverity] = useState("all")
  const [selectedStage, setSelectedStage] = useState("all")

  // Get unique values for filters
  const categories = [...new Set(alertsData.map((alert) => alert.category))]
  const severities = [...new Set(alertsData.map((alert) => alert.severity))]
  const stages = [...new Set(alertsData.map((alert) => alert.stage))]

  // Filter alerts based on search and filters
  const filteredAlerts = alertsData.filter((alert) => {
    const matchesSearch =
      alert.alertType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || alert.category === selectedCategory
    const matchesSeverity = selectedSeverity === "all" || alert.severity === selectedSeverity
    const matchesStage = selectedStage === "all" || alert.stage === selectedStage

    return matchesSearch && matchesCategory && matchesSeverity && matchesStage
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-600 text-white"
      case "High":
        return "bg-red-500 text-white"
      case "Medium":
        return "bg-orange-500 text-white"
      case "Low":
        return "bg-yellow-500 text-black"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Vehicle Registration": "bg-blue-100 text-blue-800",
      "Driver Registration": "bg-purple-100 text-purple-800",
      Documentation: "bg-green-100 text-green-800",
      "Technical Failure": "bg-red-100 text-red-800",
      "System Error": "bg-red-100 text-red-800",
      "System Failure": "bg-red-100 text-red-800",
      "Hardware Failure": "bg-orange-100 text-orange-800",
      "Weighing Process": "bg-indigo-100 text-indigo-800",
      "Weight Verification": "bg-indigo-100 text-indigo-800",
      "Security Breach": "bg-red-100 text-red-800",
      "Material Quality": "bg-yellow-100 text-yellow-800",
      "Loading Process": "bg-cyan-100 text-cyan-800",
      Transportation: "bg-teal-100 text-teal-800",
      "Vehicle Issue": "bg-orange-100 text-orange-800",
      "Safety Violation": "bg-red-100 text-red-800",
      "Safety Compliance": "bg-red-100 text-red-800",
      Infrastructure: "bg-gray-100 text-gray-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Logistics Control Tower - Alert Types Reference</CardTitle>
          <p className="text-gray-600">
            Comprehensive list of all possible alerts and exceptions in the logistics workflow
          </p>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <Input
              placeholder="Search alerts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white"
            />

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                {severities.map((severity) => (
                  <SelectItem key={severity} value={severity}>
                    {severity}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                {stages.map((stage) => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="text-sm text-gray-600 flex items-center">
              Showing {filteredAlerts.length} of {alertsData.length} alerts
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-medium text-gray-700">ID</th>
                  <th className="text-left p-3 font-medium text-gray-700">Alert Type</th>
                  <th className="text-left p-3 font-medium text-gray-700">Category</th>
                  <th className="text-left p-3 font-medium text-gray-700">Stage</th>
                  <th className="text-left p-3 font-medium text-gray-700">Severity</th>
                  <th className="text-left p-3 font-medium text-gray-700">Description</th>
                  <th className="text-left p-3 font-medium text-gray-700">Escalation Time</th>
                  <th className="text-left p-3 font-medium text-gray-700">Responsible Team</th>
                </tr>
              </thead>
              <tbody>
                {filteredAlerts.map((alert) => (
                  <tr key={alert.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-3 text-sm font-medium">{alert.id}</td>
                    <td className="p-3 text-sm font-medium">{alert.alertType}</td>
                    <td className="p-3">
                      <Badge className={`text-xs ${getCategoryColor(alert.category)}`}>{alert.category}</Badge>
                    </td>
                    <td className="p-3 text-sm">{alert.stage}</td>
                    <td className="p-3">
                      <Badge className={`text-xs ${getSeverityColor(alert.severity)}`}>{alert.severity}</Badge>
                    </td>
                    <td className="p-3 text-sm text-gray-600 max-w-xs">{alert.description}</td>
                    <td className="p-3 text-sm font-medium text-blue-600">{alert.escalationTime}</td>
                    <td className="p-3 text-sm">{alert.responsibleTeam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredAlerts.length === 0 && (
            <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
              No alerts found matching your criteria
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">
              {alertsData.filter((a) => a.severity === "Critical").length}
            </div>
            <div className="text-sm text-gray-600">Critical Alerts</div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {alertsData.filter((a) => a.severity === "High").length}
            </div>
            <div className="text-sm text-gray-600">High Priority</div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {alertsData.filter((a) => a.severity === "Medium").length}
            </div>
            <div className="text-sm text-gray-600">Medium Priority</div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{categories.length}</div>
            <div className="text-sm text-gray-600">Alert Categories</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
