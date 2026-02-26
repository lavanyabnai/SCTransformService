import { TotalHour } from "./TotalHour";
import { Bottom } from "./Bottom";
import Metrics from "./Card";
import Map from "./Map";

export default function OrderTab() {
  return (
   
    <div className="grid grid-cols-2 gap-4">
    <TotalHour />
    <Bottom />
    <Metrics /> 
  
    <Map />
    </div>
 
  );
}
