import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Save, X, ArrowLeftRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import { createTransactions } from "../api/transactionsAPI";
import { useAddTransactions } from "../hooks/useAddTransactions";

export default function AddTransaction() {
    const { state } = useLocation()
    const [type, setType] = useState(state?.type || "expense")
    const [form, setForm] = useState({
        date: "",
        title: "",
        merchant: "",
        amount: 0,
        categoryId: 1,
        type: ""
    });
    const {category, loading} = useAddTransactions()

    if (loading) {
        return (
            <main className="flex-1 bg-black text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">Loading...</h1>
            </main>
        )
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.name === "categoryId" ? Number(e.target.value) : e.target.value,
        });
    };

    const handleCreate = async () => {
        try {
            if (
                !form.date.trim() ||
                !form.title.trim() ||
                !form.merchant.trim() ||
                form.amount === "" ||
                !form.categoryId === ""
            ) {
                alert("Please fill in all fields")
            }

            const newTransaction = await createTransactions({
                ...form,
                type,
                amount: Number(form.amount),
                categoryId: Number(form.categoryId),
            })

            if (newTransaction.message) {
                alert(newTransaction.message)
            }

            setForm({
                date: "",
                title: "",
                merchant: "",
                amount: 0,
                categoryId: 0,
            });
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <main className="flex-1 max-h-screen bg-black text-white py-8 px-6 my-25 mx-10">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <h1 className="text-4xl font-bold">New Transaction</h1>

                    <NavLink to={"/expenses"}>
                        <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-white/5 cursor-pointer">
                            <X size={22} />
                        </button>
                    </NavLink>
                </div>

                <div className="grid grid-cols-[1.2fr_0.8fr] gap-10">
                    <div className="bg-[#1b1b1b] border border-white/10 rounded-3xl p-8">
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => { setType("expense") }}
                                className={`px-6 py-3 rounded-xl font-semibold cursor-pointer ${type === "expense" ? "bg-cyan-400 text-black" : "bg-[#333] text-gray-400"
                                    }`}
                            >
                                Expense
                            </button>

                            <button
                                onClick={() => { setType("income") }}
                                className={`px-6 py-3 rounded-xl font-semibold cursor-pointer ${type === "income" ? "bg-cyan-400 text-black" : "bg-[#333] text-gray-400"
                                    }`}
                            >
                                Income
                            </button>
                        </div>

                        <div className="flex flex-col gap-5">
                            <input
                                name="title"
                                value={form.title}
                                placeholder="Title"
                                className="bg-[#333] rounded-xl px-4 py-3 outline-none"
                                onChange={handleChange}
                            />

                            <input
                                name="merchant"
                                value={form.merchant}
                                placeholder="Merchant / Source"
                                className="bg-[#333] rounded-xl px-4 py-3 outline-none"
                                onChange={handleChange}
                            />

                            <input
                                name="date"
                                value={form.date}
                                type="date"
                                className="bg-[#333] rounded-xl px-4 py-3 outline-none"
                                onChange={handleChange}
                            />

                            <input
                                name="amount"
                                value={form.amount}
                                type="number"
                                placeholder="Amount"
                                className="bg-[#333] rounded-xl px-4 py-3 outline-none"
                                onChange={handleChange}
                            />

                            <select
                                name="categoryId"
                                value={form.categoryId}
                                className="bg-[#333] rounded-xl px-4 py-3 outline-none"
                                onChange={handleChange}
                            >

                                {
                                    category.map((category) => {
                                        return (
                                            <option value={category.id}>{category.name}</option>
                                        )
                                    })
                                }
                            </select>

                            <div className="flex justify-end gap-4 pt-4">
                                <NavLink to={"/expenses"}>
                                    <button className="px-6 py-3 rounded-xl bg-white/5 text-gray-300 cursor-pointer">
                                        Cancel
                                    </button>
                                </NavLink>

                                <NavLink to={"/expenses"}>
                                    <button className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold flex items-center gap-2 cursor-pointer" onClick={handleCreate}>
                                        <Save size={18} />
                                        Save Transaction
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1b1b1b] border border-white/10 rounded-3xl p-8 h-fit">
                        <div className="flex items-center gap-3 mb-8">
                            <ArrowLeftRight className="text-cyan-400" />
                            <h2 className="text-2xl font-bold">Preview</h2>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="text-gray-500 text-sm">Type</p>
                                <p className="text-xl font-bold capitalize">{type}</p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">Title</p>
                                <p className="text-xl font-bold">
                                    {form.title || "Transaction title"}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">Merchant / Source</p>
                                <p className="text-lg text-gray-300">
                                    {form.merchant || "Not selected"}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">Amount</p>
                                <p className={`text-3xl font-bold ${type === "income" ? "text-green-400" : "text-red-400"
                                    }`}>
                                    {type === "income" ? "+" : "-"}${form.amount || "0.00"}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">Category</p>
                                <p className="text-lg text-gray-300">
                                    {form.categoryId}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">Date</p>
                                <p className="text-lg text-gray-300">
                                    {form.date || "No date"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}