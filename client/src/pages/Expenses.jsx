import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import {
    Funnel,
    ListFilter,
    Ellipsis,
    Check,
    Hamburger,
    ShoppingBasket,
    Hospital,
    Car,
    BadgeDollarSign,
    CircleDollarSign
} from "lucide-react"

import { getExpenses } from "../api/expensesAPI.js"

const iconMap = {
    Food: Hamburger,
    Shopping: ShoppingBasket,
    Health: Hospital,
    Transport: Car,
    Salary: BadgeDollarSign,
    Other: CircleDollarSign,
}

const Expenses = () => {
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getExpenses()
            .then((data) => {
                setExpenses(data)
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
            <div className="max-w-[1400px] mx-auto flex flex-col bg-black text-white m-10">

                <div className="flex justify-between p-4 mx-10">
                    <h2 className="text-4xl font-bold">Expenses</h2>

                    <div className="flex flex-row text-center gap-2">
                        <NavLink to={"/transaction"}>
                            <button className="py-2 px-4 text-black bg-teal-500 rounded-sm text-sm font-bold cursor-pointer">
                                New Expense
                            </button>
                        </NavLink>

                        <button className="py-1 px-2 text-teal-500 border border-white/20 bg-[#1b1b1b] cursor-pointer">
                            <Funnel size={20} />
                        </button>

                        <button className="py-1 px-2 text-teal-500 border border-white/20 bg-[#1b1b1b] cursor-pointer">
                            <ListFilter size={20} />
                        </button>

                        <button className="py-1 px-2 text-teal-500 border border-white/20 bg-[#1b1b1b] cursor-pointer">
                            <Ellipsis size={20} />
                        </button>
                    </div>
                </div>

                <div className="p-4 mx-10">
                    <table className="w-full border-collapse">

                        <thead>
                            <tr className="border-t border-white/20 bg-black">
                                <th className="py-4 px-4 text-left">
                                    <button className="w-6 h-6 rounded-md bg-gray-500 flex items-center justify-center">
                                        <Check size={18} className="text-cyan-400" />
                                    </button>
                                </th>

                                <th className="py-4 px-4 text-left text-gray-400 font-bold uppercase">
                                    Details
                                </th>

                                <th className="py-4 px-4 text-left text-gray-400 font-bold uppercase">
                                    Merchant
                                </th>

                                <th className="py-4 px-4 text-left text-gray-400 font-bold uppercase">
                                    Amount
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {expenses.map((expense) => {

                                const Icon =
                                    iconMap[expense.category] || CircleDollarSign

                                return (
                                    <tr
                                        key={expense.id}
                                        className={
                                            expense.id % 2 === 0
                                                ? "bg-[#242426]"
                                                : "bg-[#1b1b1b]"
                                        }
                                    >
                                        <td className="py-4 px-4">
                                            <button className="w-6 h-6 rounded-md bg-gray-500 flex items-center justify-center">
                                                <Check
                                                    size={18}
                                                    className="text-cyan-400"
                                                />
                                            </button>
                                        </td>

                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-5">

                                                <div className="w-12 h-12 rounded-full bg-cyan-900/60 flex items-center justify-center">
                                                    <Icon
                                                        size={26}
                                                        className="text-cyan-400"
                                                    />
                                                </div>

                                                <div className="flex flex-col">
                                                    <span className="text-gray-400 text-xs font-bold">
                                                        {expense.date}
                                                    </span>

                                                    <span className="text-white text-sm font-bold">
                                                        {expense.title}
                                                    </span>
                                                </div>

                                            </div>
                                        </td>

                                        <td className="py-4 px-4 text-gray-300 font-bold text-sm">
                                            {expense.merchant}
                                        </td>

                                        <td
                                            className={`py-4 px-4 font-bold text-sm ${
                                                expense.type === "income"
                                                    ? "text-green-400"
                                                    : "text-red-400"
                                            }`}
                                        >
                                            {expense.type === "income"
                                                ? "+"
                                                : "-"}
                                            ${Number(expense.amount).toFixed(2)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </main>
    )
}

export default Expenses