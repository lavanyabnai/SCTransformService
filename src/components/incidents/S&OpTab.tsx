'use client'
import { columns } from '@/components/incidents/columns-link'
import { DataTable } from '@/components/data-table'



const linkData = [
    {
        "dateDue": "9/5/2024",
        "description": "Critical Supply Shortage",
        "assignedTo": "John Doe",
        "status": "Open",
        "comment": "",
        "dateCreated": "2/10/2024",
        "meeting": "Supply Review Mtg"
    },
    {
        "dateDue": "12/17/2008",
        "description": "Check capacity increase",
        "assignedTo": "Jane Doe",
        "status": "Open",
        "comment": "",
        "dateCreated": "2/10/2024",
        "meeting": "Supply Review Mtg"
    },
    {
        "dateDue": "1/19/2024",
        "description": "MOM Change",
        "assignedTo": "John Doe",
        "status": "Open",
        "comment": "Review month over month change",
        "dateCreated": "1/14/2024",
        "meeting": "Demand Review Mtg"
    }
]



export default function SnopTab() {
    return (
        <div>
            <div className="flex items-center justify-center rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">

                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                    <div className="p-2">S&OP Meeting Agenda</div>
                </div>
            </div>

            <div className="py-2 ">

                <DataTable data={linkData} columns={columns} filterKey={''} onDelete={function (): void {
                    throw new Error('Function not implemented.');
                }} />

            </div>

            <div className="flex flex-shrink-0 justify-end px-4 py-4">
                <button
                    type="button"
                    className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-600"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="ml-4 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-600"
                >
                    Link to Exception
                </button>
            </div>
        </div>
    )
}
