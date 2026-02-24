import Customer from "./Customer";
import { OrderGrowth } from "./OrderGrowth";
import { Open } from "./Open";
import { Turnover } from "./Turnover";
import { Days } from "./Days";
import { Cash } from "./Cash";
import { Ontime } from "./Ontime";
import Return from "./Return";

export default function DashboardTab() {
  return (
    <>
   
    <div className="grid grid-cols-4 gap-4">
     
      <OrderGrowth />
      <Return />
      <Ontime />
      <Customer />
      <Cash />
      <Days />
      <Turnover />
      <Open />
      
     


    </div>
    </>
  );
}
