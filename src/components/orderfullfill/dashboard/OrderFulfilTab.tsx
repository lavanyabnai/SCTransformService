import BookingStack from "@/components/orderfullfill/dashboard/BookingStack";
import OntimeArea from "@/components/orderfullfill/dashboard/OntimeArea";
import BacklogStack from "@/components/orderfullfill/dashboard/BacklogStack";
import CsatPie from "@/components/orderfullfill/dashboard/CsatPie";
import CancellationBar from "@/components/orderfullfill/dashboard/CancellationBar";
import BackorderCol from "@/components/orderfullfill/dashboard/BackorderCol";
import TopReturnMap from "@/components/orderfullfill/dashboard/TopReturnMap";
import PerfectOrderBar from "@/components/orderfullfill/dashboard/PerfectOrderBar";
export default function OrderFulfilTab() {
  return (
    <div>
      <div className="flex justify-between my-2 p-4 rounded-lg border bg-white">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display ">
          Order Fulfillment Dashboard
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <BookingStack />
        <OntimeArea />
        <BacklogStack />
        <CsatPie />
        <CancellationBar />
        <BackorderCol />
        <TopReturnMap />
        <PerfectOrderBar />
      </div>
    </div>
  );
}
