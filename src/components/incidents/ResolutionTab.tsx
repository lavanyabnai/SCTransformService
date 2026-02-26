'use client'
import { useState } from "react"

import { RadioGroup } from '@headlessui/react'



import Link from "next/link";
import { HiOutlineWrench } from "react-icons/hi2";

const plans = [
    {
        name: 'Price drop',
        priceMonthly: 2,
        priceYearly: 290,
        limit: 'Initiate Price drop',
        measure: 'Consensus Forecast',
    },
    {
        name: 'Rebate',
        priceMonthly: 1,
        priceYearly: 990,
        limit: 'Introduce Mail In Rebate',
        measure: 'Consensus Forecast',
    },
    {
        name: 'Tv ad',
        priceMonthly: 1,
        priceYearly: 2490,
        limit: 'Introduce Promotion',
        measure: 'Consensus Forecast',
    },
]

const cardData = [
    {
        Name: 'Forecast Accuracy',
        Value: '320%',
        TargetAch: 85,
        status: 'Above Target',
        container: 'Maricpoa Country Customers purchased more',
        Analyze: '/demo/dashboard/salesExp',
    },
    {
        Name: 'Forecast Bias',
        Value: '5%',
        TargetAch: 5,
        status: 'Above Target',
        container: 'Forecast Bias',
        Analyze: '/demo/dashboard/salesExp',
    },
    {
        Name: 'Forecast Error',
        Value: '5%',
        TargetAch: 5,
        status: 'Above Target',
        container: 'Forecast Error',
        Analyze: '/demo/dashboard/salesExp',
    },
    {
        Name: 'Forecast Value',
        Value: '5%',
        TargetAch: 5,
        status: 'Below Target',
        container: 'Forecast Value',
        Analyze: '/demo/dashboard/salesExp',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}



export default function ResolutionTab() {
    const [selected, setSelected] = useState(plans[0])

    return (
        <>
            <div className="flex items-center justify-center rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                    <div className="p-2"> Resolution Options</div>
                </div>
            </div><div className="py-2 grid grid-cols-2 gap-2">
                <div className="mt-2">
                    <span className="text-md block font-medium leading-6 text-gray-900">
                        Option
                    </span>
                    <div className="mt-2">
                        <RadioGroup value={selected} onChange={setSelected}>
                            <div className="relative -space-y-px rounded-md bg-white">
                                {plans.map((plan, planIdx) => (
                                    <RadioGroup.Option
                                        key={plan.name}
                                        value={plan}
                                        className={({ checked }) =>
                                            classNames(
                                                planIdx === 0
                                                    ? 'rounded-tl-md rounded-tr-md'
                                                    : '',
                                                planIdx === plans.length - 1
                                                    ? 'rounded-bl-md rounded-br-md'
                                                    : '',
                                                checked
                                                    ? 'z-10 border-sky-500 bg-sky-50'
                                                    : 'border-gray-200',
                                                'relative flex cursor-pointer flex-col border p-4 focus:outline-none md:grid md:grid-cols-4 md:pl-4 md:pr-6'
                                            )
                                        }
                                    >
                                        {({ active, checked }) => (
                                            <>
                                                <span className="flex items-center text-sm">
                                                    <span
                                                        className={classNames(
                                                            checked
                                                                ? 'bg-sky-500 border-transparent'
                                                                : 'bg-white border-gray-300',
                                                            active
                                                                ? 'ring-2 ring-offset-2 ring-sky-500'
                                                                : '',
                                                            'h-4 w-4 rounded-full border flex items-center justify-center'
                                                        )}
                                                        aria-hidden="true"
                                                    >
                                                        <span className="rounded-full bg-white w-1.5 h-1.5" />
                                                    </span>
                                                    <RadioGroup.Label
                                                        as="span"
                                                        className={classNames(
                                                            checked
                                                                ? 'text-indigo-900'
                                                                : 'text-gray-900',
                                                            'ml-3 font-medium'
                                                        )}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                </span>
                                                <RadioGroup.Description
                                                    as="span"
                                                    className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                                                >
                                                    <span
                                                        className={classNames(
                                                            checked
                                                                ? 'text-indigo-900'
                                                                : 'text-gray-900',
                                                            'font-medium'
                                                        )}
                                                    >
                                                        {plan.priceMonthly}
                                                    </span>{' '}
                                                </RadioGroup.Description>
                                                <RadioGroup.Description
                                                    as="span"
                                                    className={classNames(
                                                        checked
                                                            ? 'text-indigo-700'
                                                            : 'text-gray-500',
                                                        'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                                                    )}
                                                >
                                                    {plan.limit}
                                                </RadioGroup.Description>
                                                <RadioGroup.Description
                                                    as="span"
                                                    className={classNames(
                                                        checked
                                                            ? 'text-indigo-700'
                                                            : 'text-gray-500',
                                                        'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                                                    )}
                                                >
                                                    {plan.measure}
                                                </RadioGroup.Description>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="">
                        <div className=" py-2">
                            <label
                                htmlFor="value"
                                className="text-md block font-medium leading-6 text-gray-900"
                            >
                                Value
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="value-name"
                                    id="value-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />
                            </div>
                        </div>
                        <div className="py-2">
                            <label
                                htmlFor="description"
                                className="text-md block font-medium leading-6 text-gray-900"
                            >
                                Notes
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                                    defaultValue={''} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {' '}
                    <ul className="mx-4 my-4 grid grid-cols-2 gap-6">
                        {cardData.map((kpi) => (
                            <li
                                key={kpi.Name}
                                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 border"
                            >
                                <div className="relative flex flex-1 flex-col py-2 pl-3">
                                    <span
                                        className={`absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === 'Above Target'
                                            ? `bg-green-500`
                                            : kpi.status === 'Below Target'
                                                ? `bg-red-500`
                                                : ''}`}
                                    ></span>
                                    <div className="my-2 flex items-baseline gap-2">
                                        <div>
                                            <h3 className="text-base font-medium text-gray-900">
                                                {kpi.Name}
                                            </h3>
                                            <h1 className="text-4xl font-bold text-black">
                                                {kpi.Value}
                                            </h1>
                                        </div>

                                    </div>
                                    <div className="text-base py-2">{kpi.container}</div>
                                </div>
                                <div>
                                    <div className="-mt-px flex divide-x divide-gray-200 bg-gray-50 h-10 ">
                                        <div className="flex w-0 flex-1  ">
                                            <Link
                                                href={kpi.Analyze}
                                                className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                                            >

                                                <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                                                    <HiOutlineWrench
                                                        className="h-5 w-5"
                                                        aria-hidden="true" />

                                                    Analyze
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div><div className="flex flex-shrink-0 justify-end px-4 py-4">
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
                    Resolve Exception
                </button>
            </div></>
    )
}
