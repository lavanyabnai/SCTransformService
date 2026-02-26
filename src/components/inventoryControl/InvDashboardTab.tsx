import CardLayout from '@/components/CardLayout'
import { kpiService_m } from '@/app/data/dashboard/inventoryData'

export default function InvDashboardTab() {
    return (
        <>
            <div className="m-4">
                <div className="w-100 my-2 flex  justify-between p-4 rounded-lg border bg-white">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
                        Inventory Dashboard
                    </h2>

                    <div className="flex items-center justify-end"></div>
                </div>

             

             
                    <main>
                        <CardLayout kpiData={kpiService_m} />
                    </main>
             
            </div>
        </>
    )
}
