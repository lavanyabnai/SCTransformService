"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import tiles from "@/components/sme/flowerTile.jpg"
import truck from "@/components/sme/truckyellow.jpg"
import Link from "next/link";
const invoices = [
  {
    image: tiles,
    name: "Marble Mosaic",
    change: "Denver DC",
    percentChange: "Stockout",
    link: "#",

  },
  {
    image: truck,
    name: "Carrier 1",
    change: "SHP-ID-9876",
    percentChange: "Late Delivery",
    link: "#",
  },
  {
    image: truck,
    name: "Supplier 1",
    change: "Porcelain Stone",
    percentChange: "Out of Capacity",
    link: "#",
  },
  {
    image: truck,
    name: "Customer 123",
    change: "ORD-5498",
    percentChange: "Shipped Late",
    link: "#",
  },  {
    image: tiles,
    name: "Marble Mosaic",
    change: "Denver DC",
    percentChange: "Stockout",
    link: "#",

  },
  {
    image: truck,
    name: "Carrier 1",
    change: "SHP-ID-9876",
    percentChange: "Late Delivery",
    link: "#",
  },
  {
    image: truck,
    name: "Supplier 1",
    change: "Porcelain Stone",
    percentChange: "Out of Capacity",
    link: "#",
  },
  {
    image: truck,
    name: "Customer 123",
    change: "ORD-5498",
    percentChange: "Shipped Late",
    link: "#",
  },
];

export default function Ticker() {
  return (
    <div>
      <div className="grid grid-flow-row">
        <Marquee className="animate-marquee whitespace-nowrap" pauseOnHover>
          <div className="flex justify-evenly gap-10">
            <div className="border-r-2 border-grey-600 p-5"></div>
            <div className="flex flex-row gap-10">
              {invoices.map((invoice) => (
                <Link href={invoice.link} className="flex flex-row gap-1">
                  <Image
                    src={invoice.image}
                    alt=""
                    width={50}
                    height={20}
                    className="rounded-full h-8 w-8"
                  />
                  <h1 className="text-xl font-bold">{invoice.name}</h1>
                  <h1 className="text-lg">{invoice.change}</h1>
                  <h1 className="text-xl text-red-600">
                    {invoice.percentChange}
                  </h1>
                </Link>
              ))}
            </div>


          </div>
        </Marquee>
      </div>
    </div>
  );
}
