import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdReportProblem } from "react-icons/md";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { BiSolidFactory } from "react-icons/bi";
import { CiFileOn } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";

const problemsCards = [
  {
    title: "Projected STOCKOUT",
    icon: <LiaBoxOpenSolid className="text-gray-500/35 text-6xl"/>,
    value: 8,
    subValue: [
      {
        value: 3,
        color: "red",
      },
      {
        value: 3,
        color: "orange",
      },
      {
        value: 2,
        color: "yellow",
      },
    ],
  },
  {
    title: "Projected MIN INV VIOLATION",
    icon: <GoTriangleDown className="text-gray-500/35 text-6xl"/>,
    value: 7,
    subValue: [
      {
        value: 3,
        color: "red",
      },
      {
        value: 4,
        color: "red",
      },
    ],
  },
  {
    title: "Projected CAPACITY SHORTAGE",
    icon: <BiSolidFactory className="text-gray-500/35 text-6xl"/>,
    value: 15,
    subValue: [
      {
        value: 2,
        color: "yellow",
      },
    ],
  },
];







export default function Problem() {
  return (
    <div className="shadow-lg text-blue-900 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-4 ">
        <div className="flex items-center gap-2 text-2xl p-4">
          <MdReportProblem />
          <h2 className="text-2xl font-bold">Problems</h2>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="bg-sky-500 text-white font-medium w-24 text-center"
          >
            Total 52
          </Badge>
          <Badge
            variant="outline"
            className="bg-red-500 border-red-200  text-white font-medium"
          >
            14
          </Badge>
          <Badge
            variant="outline"
            className="bg-orange-500 border-orange-200  text-white font-medium"
          >
            23
          </Badge>
          <Badge
            variant="outline"
            className="bg-yellow-500 border-yellow-200  text-white font-medium"
          >
            9
          </Badge>
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          <button className="p-1.5 rounded-md hover:bg-gray-100">
            <Filter className="h-4 w-4 text-sky-500" />
          </button>
        </div>
      </div>
      <div className=" ml-6 mr-6 border-b " />

      <div className="grid grid-cols-3 gap-4 p-4">
        {/* Projected STOCKOUT */}

        {problemsCards.map((problem) => (
          <Card className="border shadow-sm w-48">
            <CardHeader className="flex">
              <CardTitle className="text-sm font-medium text-gray-500 flex flex-row">
                {problem.title}
                {problem.icon}
                <div className="flex gap-1">
                  {problem.subValue.map((subValue) => (
                    <span className={`h-6 w-6 rounded-full items-center justify-center bg-${subValue.color}-500 text-white text-center`}>
                      {subValue.value}
                    </span>
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}

        <Card className="border shadow-sm w-48">
          <CardHeader className="flex">

            <CardTitle className="text-sm font-medium text-gray-500 flex flex-row">
              Projected STOCKOUT   
              <LiaBoxOpenSolid  className="text-gray-500/35 text-6xl"/>
            </CardTitle>
           
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <span className="text-5xl text-sky-500 font-bold">8</span>

              <div className="flex gap-1">
                <span className="h-6 w-6 rounded-full bg-red-500 text-white text-center">
                  3
                </span>
                <span className="h-6 w-6 rounded-full bg-orange-500 text-white text-center">
                  3
                </span>
                <span className="h-6 w-6 rounded-full bg-yellow-500 text-white text-center">
                  2
                </span>
                
              </div>
            </div>
            <span className="">Items</span>
          </CardContent>
        </Card>

        {/* Projected MIN INV VIOLATION */}
        <Card className="border shadow-sm w-48">
          <CardHeader className="">
            <CardTitle className="text-xs font-medium text-gray-500 flex flex-row">
              Projected MIN INV VIOLATION
              <GoTriangleDown className="text-gray-500/35 text-6xl"/>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <span className="text-5xl text-sky-500 font-bold">7</span>

              <div className="flex gap-1">
                <span className="h-6 w-6 rounded-full bg-red-500 text-white text-center">
                  3
                </span>
                <span className="h-6 w-6 rounded-full bg-red-500 text-white text-center">
                  4
                </span>
              </div>
            </div>
            <div className="">Items</div>
          </CardContent>
        </Card>

        {/* Projected MAX INV VIOLATION */}
        <Card className="border shadow-sm w-48">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex flex-row">
              Projected
              MAX INV VIOLATION
              <GoTriangleUp className="text-gray-500/35 text-6xl"/>
            </CardTitle>
           
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <span className="text-5xl text-sky-500 font-bold">13</span>
              <div className="ml-2 flex gap-1">
                <span className="h-6 w-6 rounded-full bg-red-500 text-white text-center">
                  8
                </span>
                <span className="h-6 w-6 rounded-full bg-yellow-500 text-white text-center">
                  3
                </span>
                <span className="h-6 w-6 rounded-full bg-orange-500 text-white text-center">
                  2
                </span>
              </div>
            </div>
            <div className="">Items</div>
          </CardContent>
        </Card>

        {/* Projected CAPACITY SHORTAGE */}
        <Card className="border shadow-sm w-48">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex flex-row">
              Projected CAPACITY SHORTAGE
              <BiSolidFactory className="text-gray-500/35 text-6xl"/>
            </CardTitle>
            
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <span className="text-5xl text-sky-500 font-bold">15</span>
              <div className="flex gap-1">
                <span className="h-6 w-6 rounded-full bg-yellow-500 text-white text-center">
                  2
                </span>
                <span className="h-6 w-6 rounded-full bg-orange-500 text-white text-center">
                  10
                </span>
                <span className="h-6 w-6 rounded-full bg-orange-500 text-white text-center">
                  3
                </span>
              </div>
            </div>
            <div className="">Sites</div>
          </CardContent>
        </Card>

        {/* Upcoming CONTRACT EXPIRATION */}
        <Card className="border shadow-sm w-48">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex flex-row">
              Upcoming CONTRACT EXPIRATION
              <CiFileOn className="text-gray-500/35 text-6xl"/>
            </CardTitle>
            
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <span className="text-5xl text-sky-500 font-bold">4</span>
              <div className="flex gap-1">
                <span className="h-6 w-6 rounded-full bg-yellow-500 text-white text-center">
                  2
                </span>
                <span className="h-6 w-6 rounded-full bg-orange-500 text-white text-center">
                  2
                </span>
              </div>
            </div>
            <div className="">Contracts</div>
          </CardContent>
        </Card>

        {/* Projected LATE DELIVERY */}
        <Card className="border shadow-sm w-48">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex flex-row">
              Projected LATE DELIVERY
              <FaTruck  className="text-gray-500/35 text-6xl"/>
            </CardTitle>
            
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <span className="text-5xl text-sky-500 font-bold">5</span>
              <div className="flex gap-1">
                <span className="h-6 w-6 rounded-full bg-red-500 text-white text-center">
                  3
                </span>
              </div>
            </div>
            <div className="">Documents</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
