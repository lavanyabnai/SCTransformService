import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdReportProblem } from "react-icons/md";
// import { LiaBoxOpenSolid } from "react-icons/lia";
// import { GoTriangleDown } from "react-icons/go";
// import { GoTriangleUp } from "react-icons/go";
// import { BiSolidFactory } from "react-icons/bi";
// import { CiFileOn } from "react-icons/ci";
// import { FaTruck } from "react-icons/fa";

export default function EventsCard() {
  return (
    <div className="h-full p-4 shadow-lg text-blue-900 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-2 ">
        <div className="flex items-center gap-2 text-2xl p-2">
          <MdReportProblem className="text-4xl" />
          <h2 className="text-2xl font-bold">Control Tower Predictions</h2>
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
      <div className="border-b " />

      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Projected STOCKOUT */}
        <Card className="bg-sky-100 border-none">
          <CardHeader>
            <CardTitle className="text-lg text-center text-blue-900 font-bold">
              STOCKOUT
              {/* <GoTriangleDown className="text-gray-500/35 text-6xl"/> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Badge className="rounded-full bg-sky-900 text-white text-center text-3xl ">
              {" "}
              8
            </Badge>
          </CardContent>
        </Card>
      

        {/* Projected MIN INV VIOLATION */}
        <Card className="bg-sky-100 border-none ">
          <CardHeader>
            <CardTitle className="text-lg text-center text-blue-900 font-bold">
              MIN INV VIOLATION
              {/* <GoTriangleDown className="text-gray-500/35 text-6xl"/> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Badge className="rounded-full bg-sky-900 text-white text-center text-3xl ">
              {" "}
              7
            </Badge>
          </CardContent>
        </Card>

        {/* Projected MAX INV VIOLATION */}
        <Card className="bg-sky-100 border-none">
          <CardHeader>
            <CardTitle className="text-lg text-center text-blue-900 font-bold">
              MAX INV VIOLATION
              {/* <GoTriangleUp className="text-gray-500/35 text-6xl"/> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Badge className="rounded-full bg-sky-900 text-white text-center text-3xl ">
              {" "}
              5
            </Badge>
          </CardContent>
        </Card>

        {/* Projected CAPACITY SHORTAGE */}
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle className="text-lg text-center text-gray-900 font-bold">
              CAPACITY SHORTAGE
              {/* <BiSolidFactory className="text-gray-500/35 text-6xl"/> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Badge className="rounded-full bg-gray-900 text-white text-center text-3xl ">
              {" "}
              5
            </Badge>
          </CardContent>
        </Card>

        {/* Upcoming CONTRACT EXPIRATION */}
        <Card className="bg-amber-100 border-none">
          <CardHeader>
            <CardTitle className="text-lg text-center text-amber-900 font-bold">
              CARRIER NOT FOUND
              {/* <CiFileOn className="text-gray-500/35 text-6xl"/> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Badge className="rounded-full bg-amber-900 text-white text-center text-3xl ">
              {" "}
              2
            </Badge>
          </CardContent>
        </Card>

        {/* Projected LATE DELIVERY */}
        <Card className="bg-amber-100 border-none">
          <CardHeader>
            <CardTitle className="text-lg text-center text-amber-900 font-bold">
              LATE DELIVERY
              {/* <FaTruck  className="text-gray-500/35 text-6xl"/> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Badge className="rounded-full bg-amber-900 text-white text-center text-3xl ">
              {" "}
              5
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-pink-100 border-none">
          <CardHeader>
            <CardTitle className="text-lg text-center text-pink-900 font-bold">
             PROMISED LATE
              {/* <BiSolidFactory className="text-gray-500/35 text-6xl"/> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Badge className="rounded-full bg-pink-900 text-white text-center text-3xl ">
              {" "}
              3
            </Badge>
          </CardContent>
        </Card>

        {/* Upcoming CONTRACT EXPIRATION */}
        <Card className="bg-pink-100 border-none">
          <CardHeader>
            <CardTitle className="text-lg text-center text-pink-900 font-bold">
              SHIPPED SHORT
              {/* <CiFileOn className="text-gray-500/35 text-6xl"/> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Badge className="rounded-full bg-pink-900 text-white text-center text-3xl ">
              {" "}
              6
            </Badge>
          </CardContent>
        </Card>

        {/* Projected LATE DELIVERY */}
        <Card className="bg-pink-100 border-none">
          <CardHeader>
            <CardTitle className="text-lg text-center text-pink-900 font-bold">
              SHIPPED LATE 
              {/* <FaTruck  className="text-gray-500/35 text-6xl"/> */}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Badge className="rounded-full bg-pink-900 text-white text-center text-3xl ">
              {" "}
              2
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
