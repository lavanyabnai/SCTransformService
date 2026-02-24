import { Ordertrend } from "@/components/ordertocash/analysis/orderfullfillment/ordertrent";
import { OnTimeShipment } from "@/components/ordertocash/analysis/orderfullfillment/ontimeshipment";
import { Cancellation } from "@/components/ordertocash/analysis/orderfullfillment/cancellation";
import BacklogTrendChart from "@/components/ordertocash/analysis/orderfullfillment/backtrend";


export default function OrderFulfillTab() {
    return (
        <div className="grid grid-cols-2 gap-4">
       
                <Ordertrend />
                <Cancellation />
               
               
                <OnTimeShipment />
             
                <BacklogTrendChart />
             
        </div>
    );
}
