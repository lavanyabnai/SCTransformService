import { FaUserCircle } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Info } from "lucide-react";

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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Resolution() {
  return (
    <div>
      <CardTitle className="px-2 py-6 text-xl text-blue-900">
        Resolution
      </CardTitle>

      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <div className="flex items-center justify-center px-2 py-4 h-40 border border-gray-300 rounded-md">
            No Action Required
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="border bg-rose-500 rounded-md p-2 text-white m-2 w-full">
                <div className="flex items-center  justify-center gap-2">
                  <FaUserCircle className="w-4 h-4" />
                  Resolve
                </div>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="">
          <div className="px-2 py-4 h-40 border border-gray-300 rounded-md">
            <p className="text-center py-2">Shipment 3411-3</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              Cost:{" "}
              <span className="font-bold px-2 text-white bg-red-500 rounded-lg text-center">
                $5,150
              </span>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2">
              Gain:{" "}
              <span className="font-bold px-2 text-white bg-green-500 rounded-lg text-center">
                $3,650
              </span>
            </div>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="border bg-rose-500 rounded-md p-2 text-white m-2 w-full">
                <div className="flex items-center  justify-center gap-2">
                  <FaUserCircle className="w-4 h-4" />
                  Resolve
                </div>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="">
          <div className="px-2 py-4 h-40 border border-gray-300 rounded-md">
            <p className="text-center py-2">Site 3422, + 1 Day</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              Cost:{" "}
              <span className="font-bold px-2 text-white bg-red-500 rounded-lg text-center">
                $8,350
              </span>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2">
              Gain:{" "}
              <span className="font-bold px-2 text-white bg-green-500 rounded-lg text-center">
                $1,800
              </span>
            </div>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="border bg-rose-500 rounded-md p-2 text-white m-2 w-full">
                <div className="flex items-center  justify-center gap-2">
                  <FaUserCircle className="w-4 h-4" />
                  Resolve
                </div>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
