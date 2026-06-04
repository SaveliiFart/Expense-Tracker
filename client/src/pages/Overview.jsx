import {
    Clock3,
    Plane,
    Wallet,
    ShoppingCart,
    BadgeDollarSign,
    Hamburger,
    ShoppingBasket,
    BadgeDollarSignIcon,
    Shirt,
    Hospital,
    CreditCard,
    LayoutGrid,
    FileSpreadsheet
} from "lucide-react"
import BarChartCard from "../components/BarChartCard"
import { incomeChart, outcomeChart } from "../data/chartData"

const Overview = () => {
    return (
        <main className="flex-1 py-4 px-2">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5 bg-black text-white">
                <div className="grid grid-cols-2">
                    <div className="border border-white/10 rounded-2xl bg-[#1b1b1b] mt-4 mx-10">
                        <h2 className=" text-xl font-bold text-white p-2 border-b border-white/10">Pending Tasks</h2>
                        <div className="flex flex-col gap-3 px-3 py-6">
                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">
                                    <Clock3
                                        size={32}
                                        className="text-purple-500"
                                    />

                                    <p className="text-lg text-gray-400">
                                        Pending Approvals
                                    </p>
                                </div>

                                <span className="text-lg font-bold text-white">
                                    5
                                </span>
                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">
                                    <Plane
                                        size={32}
                                        className="text-purple-500"
                                    />

                                    <p className="text-lg text-gray-400">
                                        New Trips Registered
                                    </p>
                                </div>

                                <span className="text-lg font-bold text-white">
                                    1
                                </span>
                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">
                                    <Wallet
                                        size={32}
                                        className="text-purple-500"
                                    />

                                    <p className="text-lg text-gray-400">
                                        Unreported Expenses
                                    </p>
                                </div>

                                <span className="text-lg font-bold text-white">
                                    4
                                </span>
                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">
                                    <ShoppingCart
                                        size={32}
                                        className="text-purple-500"
                                    />

                                    <p className="text-lg text-gray-400">
                                        Upcoming Expenses
                                    </p>
                                </div>

                                <span className="text-lg font-bold text-white">
                                    0
                                </span>
                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">
                                    <BadgeDollarSign
                                        size={32}
                                        className="text-purple-500"
                                    />

                                    <p className="text-lg text-gray-400">
                                        Unreported Advances
                                    </p>
                                </div>

                                <span className="text-lg font-bold text-white">
                                    €0.00
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-white/10 rounded-2xl bg-[#1b1b1b] overflow-hidden my-2 mx-10">
                        <h2 className=" text-xl font-bold text-white p-2 border-b border-white/10">Recent Expenses</h2>

                        <div className="p-3">
                            <table className="w-full border-separate border-spacing-y-3">
                                <thead>
                                    <tr className="text-gray-400 text-left">
                                        <th className="w-14"></th>
                                        <th>
                                            Subject
                                        </th>
                                        <th className="text-right">
                                            Amount
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-white">
                                    <tr>
                                        <td className=" text-cyan-400">
                                            <Hamburger size={24} />
                                        </td>
                                        <td>
                                            Mcdonald's
                                        </td>
                                        <td className="text-right font-semibold">
                                            100$
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=" text-cyan-400">
                                            <ShoppingBasket size={24} />
                                        </td>
                                        <td>
                                            Products
                                        </td>
                                        <td className="text-right font-semibold">
                                            200$
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=" text-cyan-400">
                                            <BadgeDollarSignIcon size={24} />
                                        </td>
                                        <td>
                                            Salary
                                        </td>
                                        <td className="text-right font-semibold">
                                            10000$
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=" text-cyan-400">
                                            <Shirt size={24} />
                                        </td>
                                        <td>
                                            Clothes
                                        </td>
                                        <td className="text-right font-semibold">
                                            500$
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=" text-cyan-400">
                                            <Hospital size={24} />
                                        </td>
                                        <td>
                                            Buy medicine
                                        </td>
                                        <td className="text-right font-semibold">
                                            600$
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="border-white/10 bg-[#1b1b1b] mx-10 rounded-2xl">
                    <h1 className="text-xl font-bold text-white p-2 border-b border-white/10">
                        Quick Access
                    </h1>
                    <div className="flex justify-around border-white/10 bg-[#1b1b1b] py-2">
                        <button className="flex px-2 py-4 bg-[#28282a] rounded-xl items-center cursor-pointer">
                            <div className="p-2 rounded-full bg-fuchsia-500">
                                <CreditCard size={16} />
                            </div>
                            <span className="p-2 text-xs">
                                Add expences
                            </span>
                        </button>
                        <button className="flex px-2 py-4 bg-[#28282a] rounded-xl items-center cursor-pointer">
                            <div className="p-2 rounded-full bg-emerald-500">
                                <BadgeDollarSignIcon size={16} />
                            </div>
                            <span className="p-2 text-xs">
                                Add Income
                            </span>
                        </button>
                        <button className="flex px-2 py-4 bg-[#28282a] rounded-xl items-center cursor-pointer">
                            <div className="p-2 rounded-full bg-indigo-500">
                                <LayoutGrid size={16} />
                            </div>
                            <span className="p-2 text-xs">
                                Create Categories
                            </span>
                        </button>
                        <button className="flex px-2 py-4 bg-[#28282a] rounded-xl items-center cursor-pointer">
                            <div className="p-2 rounded-full bg-sky-500">
                                <FileSpreadsheet size={16} />
                            </div>
                            <span className="p-2 text-xs">
                                Export report
                            </span>
                        </button>
                    </div>
                </div>

                <div className="border border-white/10 rounded-2xl bg-[#1b1b1b] overflow-hidden mx-10 mb-4">
                    <h2 className=" text-xl font-bold text-white p-2 border-b border-white/10">Mounthly report</h2>
                    <div className="grid grid-cols-2">
                        <div className="border-r border-white/10 ">
                            <BarChartCard {...incomeChart} />
                        </div>
                        <div>
                            <BarChartCard {...outcomeChart} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Overview