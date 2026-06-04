import { Funnel, ListFilter, Ellipsis, Check } from "lucide-react"
import { expensesData } from "../data/expencesData"

const Expenses = () => {
    return (
        <main className="flex-1 py-4 px-2">
            <div className="max-w-[1400px] mx-auto flex flex-col bg-black text-white m-10">
                <div className="flex justify-between p-4 mx-10">
                    <h2 className="text-4xl font-bold">Expences</h2>
                    <div className="flex flex-row text-center gap-2">
                        <button className="py-2 px-4 text-black bg-teal-500 rounded-sm text-sm font-bold cursor-pointer">New Expences</button>
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
                    <table className="w-full order-collapse">
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
                                <th className="py-4 px-4 text-left text-gray-400 font-bold uppercase">
                                    Report
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                expensesData.map((expences) => {
                                    const Icon = expences.icon

                                    return (
                                        <tr key={expences.id} className={`${expences.id % 2 === 0 ? "bg-[#242426]" : "bg-[#1b1b1b]" }`}>
                                            <td className="py-4 px-4">
                                                <button className="w-6 h-6 rounded-md bg-gray-500 flex items-center justify-center">
                                                    {expences.checked && <Check size={18} className="text-cyan-400" />}
                                                </button>
                                            </td>

                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-12 h-12 rounded-full bg-cyan-900/60 flex items-center justify-center">
                                                        <Icon size={26} className="text-cyan-400" />
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <span className="text-gray-400 text-xs font-bold">
                                                            {expences.date}
                                                        </span>

                                                        <span className="text-white text-sm font-bold">
                                                            {expences.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="py-4 px-4 text-gray-300 font-bold text-sm">
                                                {expences.merchant}
                                            </td>

                                            <td className="py-4 px-4 text-gray-300 font-bold text-sm">
                                                ${expences.amount.toFixed(2)}
                                            </td>

                                            <td className="py-4 px-4 text-gray-300 font-bold text-sm">
                                                {expences.report}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default Expenses