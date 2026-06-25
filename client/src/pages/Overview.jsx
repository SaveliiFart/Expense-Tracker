import {
    BadgeDollarSignIcon,
    CreditCard,
    LayoutGrid,
    FileSpreadsheet
} from "lucide-react"
import BarChartCard from "../components/BarChartCard"
import { builtChartData } from "../data/chartDataHelper"
import QuickStats from "../components/quickStats"
import RecentTransactions from "../components/recentTransactions"
import { NavLink } from "react-router-dom"
import { getChartData } from "../api/transactionsAPI"
import { useState, useEffect } from "react"

const Overview = () => {
    const [incomeChart, setIncomeChart] = useState(null)
    const [expenseChart, setExpenseChart] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getChartData()
            .then((data) => {
                setIncomeChart(
                    builtChartData(data.chartIncome, "Income", "#14d8c9")
                )

                setExpenseChart(
                    builtChartData(data.chartExpenses, "Outcome", "#ef4444")
                )
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <main className="flex-1 bg-black text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">Loading...</h1>
            </main>
        )
    }


    return (
        <main className="flex-1 py-4 px-2">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5 bg-black text-white">
                <div className="grid grid-cols-2">
                    <QuickStats />
                    <RecentTransactions/>
                </div>

                <div className="border-white/10 bg-[#1b1b1b] mx-10 rounded-2xl">
                    <h1 className="text-xl font-bold text-white p-2 border-b border-white/10">
                        Quick Access
                    </h1>
                    <div className="flex justify-around border-white/10 bg-[#1b1b1b] py-2">
                        <NavLink to={"/transaction"} className="flex px-2 py-4 bg-[#28282a] rounded-xl items-center cursor-pointer">
                            <div className="p-2 rounded-full bg-fuchsia-500">
                                <CreditCard size={16} />
                            </div>
                            <span className="p-2 text-xs">
                                Add expences
                            </span>
                        </NavLink>
                        <NavLink to={"/transaction"} className="flex px-2 py-4 bg-[#28282a] rounded-xl items-center cursor-pointer">
                            <div className="p-2 rounded-full bg-emerald-500">
                                <BadgeDollarSignIcon size={16} />
                            </div>
                            <span  className="p-2 text-xs">
                                Add Income
                            </span>
                        </NavLink>
                        <NavLink to={"/category"} className="flex px-2 py-4 bg-[#28282a] rounded-xl items-center cursor-pointer">
                            <div className="p-2 rounded-full bg-indigo-500">
                                <LayoutGrid size={16} />
                            </div>
                            <span  className="p-2 text-xs">
                                Create Categories
                            </span>
                        </NavLink>
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
                            <BarChartCard {...incomeChart}/>
                        </div>
                        <div>
                            <BarChartCard {...expenseChart}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Overview