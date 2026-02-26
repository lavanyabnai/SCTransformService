import OrderCycleLine from "@/components/ordermange/orderFulfill/OrderCycleLine";
import PerfectOrderGauge from "@/components/ordermange/orderFulfill/PerfectOrderGauge";
import OrderFillRateBar from "@/components/ordermange/orderFulfill/OrderFillRateBar";
import AverageOrderBar from "@/components/ordermange/orderFulfill/AverageOrderBar";
import SplitShipmentLine from "@/components/ordermange/orderFulfill/SplitShipmentLine";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import SamedayBar from "./SamedayBar";
import BopisLine from "./BopisLine";
import ReturnsBars from "./ReturnsBars";
import SpecialorderBar from "./SpecialorderBar";
import LastmileLine from "./LastmileLine";
import OrderstatusFunnel from "./OrderstatusFunnel";
import LargebuljScartter from "./LargebulkScartter";
import InstallerBar from "./InstallerBar";
import OrderPareto from "./OrderPareto";

export default function OrderFulfillTab() {
  return (
    <div>
      <div className="flex justify-between my-2 p-4 rounded-lg border bg-white">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display ">
          Order Fulfillment Dashboard
        </h2>
        <div className="flex items-center justify-end">
          <TabsList className="w-full">
            <TabsTrigger value="Week">Week</TabsTrigger>
            <TabsTrigger value="Month">Month</TabsTrigger>
            <TabsTrigger value="Quarter">Quarter</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <OrderCycleLine />
        <PerfectOrderGauge />
        <OrderFillRateBar />
        <AverageOrderBar />
        <SplitShipmentLine />
        <SamedayBar />
        <BopisLine />
        <ReturnsBars />
        <SpecialorderBar />
        <LastmileLine />
        <OrderstatusFunnel />
        <LargebuljScartter />
        <InstallerBar />
        <OrderPareto />
      </div>
    </div>
  );
}
