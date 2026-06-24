import { useEffect, useState } from "react"
import {
    Wallet,
    CreditCard,
    TrendingUp,
    ReceiptText,
    EllipsisVertical
} from "lucide-react"
import { getFilteredExpenses } from "../api/expensesAPI.js"
import { iconMap } from "../data/categoriesIcon"

const QuickStats = () => {
    const [filteredExpenses, setFilteredExpenses] = useState({
        totalIncome: 0,
        totalExpenses: 0,
        balance: 0,
        transaction: 0,
        topCategory: {
            icon: null,
            name: "",
            total: 0
        }
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFilteredExpenses()
            .then((data) => {
                setFilteredExpenses(data)
                console.log(data)
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const Icon = iconMap[filteredExpenses?.topCategory?.icon] || EllipsisVertical

    if (loading) {
        return (
            <main className="flex-1 bg-black text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">Loading...</h1>
            </main>
        )
    }

    return (
        <div className="border border-white/10 rounded-2xl bg-[#1b1b1b] mt-4 mx-10">
            <h2 className=" text-xl font-bold text-white p-2 border-b border-white/10">Quick Stasts</h2>
            <div className="flex flex-col gap-3 px-3 py-6">
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <Wallet
                            size={32}
                            className="text-purple-500"
                        />

                        <p className="text-lg text-gray-400">
                            Total Income
                        </p>
                    </div>

                    <span className="text-lg font-bold text-white">
                        {filteredExpenses.totalIncome}
                    </span>
                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <CreditCard
                            size={32}
                            className="text-purple-500"
                        />

                        <p className="text-lg text-gray-400">
                            Total Expenses
                        </p>
                    </div>

                    <span className="text-lg font-bold text-white">
                        {filteredExpenses.totalExpenses}
                    </span>
                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <TrendingUp
                            size={32}
                            className="text-purple-500"
                        />

                        <p className="text-lg text-gray-400">
                            Balance
                        </p>
                    </div>

                    <span className="text-lg font-bold text-white">
                        {filteredExpenses.balance}
                    </span>
                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <ReceiptText
                            size={32}
                            className="text-purple-500"
                        />

                        <p className="text-lg text-gray-400">
                            Transactions
                        </p>
                    </div>

                    <span className="text-lg font-bold text-white">
                        {filteredExpenses.transaction}
                    </span>
                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <Icon
                            size={32}
                            className="text-purple-500"
                        />

                        <p className="text-lg text-gray-400">
                            Top Categories
                        </p>
                    </div>

                    <span className="text-lg font-bold text-white">
                        {filteredExpenses.topCategory && (
                            <span>{filteredExpenses.topCategory.total}</span>
                        )}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default QuickStats