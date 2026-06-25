import { useState, useEffect } from "react"
import { iconMap } from "../data/categoriesIcon"
import { getTransactions } from "../api/transactionsAPI"

const RecentExpenses = () => {
    const [transaction, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTransactions()
            .then((data) => {
                setTransactions(data)
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
        <div className="border border-white/10 rounded-2xl bg-[#1b1b1b] overflow-hidden my-2 mx-10">
            <h2 className=" text-xl font-bold text-white p-2 border-b border-white/10">Recent Transactions</h2>

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
                        {
                            transaction.map((e) => {
                                const Icon = iconMap[e.icon]
                                return (
                                    <tr key={e.id}>
                                        <td className=" text-cyan-400">
                                            <Icon size={24} />
                                        </td>
                                        <td>
                                            {e.merchant}
                                        </td>
                                        <td className="text-right font-semibold">
                                            {e.amount}$
                                        </td>
                                    </tr>
                                )
                            }).slice(0,5)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentExpenses