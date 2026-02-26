"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import apple from "@/components/sme/apple.png";
import google from "@/components/sme/google.png";
import tesla from "@/components/sme/tesla.png";
import us from "@/components/sme/united-states.png";
import bitcoin from "@/components/sme/bitcoin.png";


import Link from "next/link";

const invoices = [
  {
    image: google,
    name: "Google 100",
    change: "+1.01%",
    percentChange: "(+1.50%)",
    link: "https://www.tradingview.com/chart/?symbol=NASDAQ%3AAAPL",
    
  },
  {
    image: tesla,
    name: "Tesla 100",
    change: "-1.01%",
    percentChange: "(-1.50%)",
    link: "https://www.tradingview.com/chart/?symbol=NASDAQ%3AAAPL",
  },
  {
    image: us,
    name: "United States",
    change: "+1.01%",
    percentChange: "(+1.50%)",
    link: "https://www.tradingview.com/chart/?symbol=NASDAQ%3AAAPL",
  },
  {
    image: bitcoin,
    name: "Bitcoin",
    change: "-1.01%",
    percentChange: "(-1.50%)",
    link: "https://www.tradingview.com/chart/?symbol=NASDAQ%3AAAPL",
  },
  {
    image: apple,
    name: "Apple",
    change: "+1.01%",
    percentChange: "(+1.50%)",
    link: "https://www.tradingview.com/chart/?symbol=NASDAQ%3AAAPL",
  },
];

export default function Moving() {
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
                    width={40}
                    height={30}
                    className="rounded-full "
                  />
                  <h1 className="text-xl font-bold">{invoice.name}</h1>
                  <h1 className="text-xl text-red-300">{invoice.change}</h1>
                  <h1 className="text-xl text-red-300">
                    {invoice.percentChange}
                  </h1>
                </Link>
              ))}
            </div>

            <div className="border-r-2 border-grey-600 p-5"></div>

            <div className="flex flex-row gap-10 ">
              {invoices.map((invoice) => (
                <Link href={invoice.link} className="flex flex-row gap-1">
                  <Image
                    src={invoice.image}
                    alt=""
                    width={40}
                    height={30}
                    className="rounded-full "
                  />
                  <h1 className="text-xl font-bold">{invoice.name}</h1>
                  <h1 className="text-xl text-red-300">{invoice.change}</h1>
                  <h1 className="text-xl text-red-300">
                    {invoice.percentChange}
                  </h1>
                </Link>
              ))}
            </div>
            <div className="border-r-2 border-grey-600 p-5"></div>

            <div className="flex flex-row gap-10">
              {invoices.map((invoice) => (
                <Link href={invoice.link} className="flex flex-row gap-1">
                  <Image
                    src={invoice.image}
                    alt=""
                    width={40}
                    height={30}
                    className="rounded-full "
                  />
                  <h1 className="text-xl font-bold">{invoice.name}</h1>
                  <h1 className="text-xl text-red-300">{invoice.change}</h1>
                  <h1 className="text-xl text-red-300">
                    {invoice.percentChange}
                  </h1>
                </Link>
              ))}
            </div>

            <div className="border-r-2 border-grey-600 p-5"></div>
            <div className="flex flex-row gap-10">
              {invoices.map((invoice) => (
                <Link href={invoice.link} className="flex flex-row gap-1">
                  <Image
                    src={invoice.image}
                    alt=""
                    width={40}
                    height={30}
                    className="rounded-full "
                  />
                  <h1 className="text-xl font-bold">{invoice.name}</h1>
                  <h1 className="text-xl text-red-300">{invoice.change}</h1>
                  <h1 className="text-xl text-red-300">
                    {invoice.percentChange}
                  </h1>
                </Link>
              ))}
            </div>

            <div className="flex flex-row gap-10">
              {invoices.map((invoice) => (
                <Link href={invoice.link} className="flex flex-row gap-1">
                  <Image
                    src={invoice.image}
                    alt=""
                    width={40}
                    height={30}
                    className="rounded-full "
                  />
                  <h1 className="text-xl font-bold">{invoice.name}</h1>
                  <h1 className="text-xl text-red-300">{invoice.change}</h1>
                  <h1 className="text-xl text-red-300">
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
