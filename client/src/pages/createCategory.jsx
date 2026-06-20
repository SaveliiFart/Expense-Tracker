import {
    Save,
    X,
} from "lucide-react"
import {availableCategoryIcons} from "../data/categoriesIcon.js"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { createCategory } from "../api/categoryAPI.js";


export default function CreateCategory() {
    const [form,setForm] = useState({
        name: "",
        icon: "UtensilsCrossed"
    })

    const selectedIconData = availableCategoryIcons.find(
        (item) => item.value === form.icon
    )

    const SelectedIcon = selectedIconData.icon

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSelected = (iconName) => {
        setForm({
            ...form,
            icon: iconName
        })
    }

        const handleCreate = async () => {
            try {
                if (
                    !form.name.trim() ||
                    !form.icon.trim()
                ) {
                    alert("Please fill in all fields")
                }
    
                const newCategory = await createCategory({
                    ...form
                })
    
                if (newCategory.message) {
                    alert(newCategory.message)
                }
    
                setForm({
                    name: "",
                    icon: "UtensilsCrossed",
                });
            } catch (err) {
                console.error(err)
            }
        }
    


    return (
        <main className="flex-1 min-h-screen bg-black text-white py-8 px-6">
            <div className="max-w-[1100px] mx-auto">

                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-10">
                    <h1 className="text-4xl font-bold">
                        Create Category
                    </h1>

                    <NavLink to="/overview">
                        <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-white/5 cursor-pointer">
                            <X size={22} />
                        </button>
                    </NavLink>
                </div>

                <div className="grid grid-cols-[1.2fr_0.8fr] gap-10">

                    <div className="bg-[#1b1b1b] border border-white/10 rounded-3xl p-8">
                        <div className="flex flex-col gap-6">

                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Category name"
                                className="bg-[#333] rounded-xl px-4 py-3 outline-none"
                            />

                            <div>
                                <h2 className="text-xl font-bold mb-4">
                                    Choose icon
                                </h2>

                                <div className="grid grid-cols-2 gap-4">

                                    {
                                        availableCategoryIcons.map((item) => {
                                            const Icon = item.icon
                                            const isActive = form.icon === item.value
                                            return (
                                                <button 
                                                    key={item.value}
                                                    onClick={() => handleSelected(item.value)}
                                                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl cursor-pointer ${
                                                        isActive ? "bg-cyan-400 text-black border border-cyan-400" : "bg-[#28282a] text-gray-300 border-white/10 hover:border-cyan-400"
                                                    }`}
                                                >
                                                    <Icon size={24} className={isActive ? "text-black" : "text-cyan-400"}/>
                                                    <span className="font-semibold">{item.name}</span>
                                                </button>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4">
                                <NavLink to="/overview">
                                    <button className="px-6 py-3 rounded-xl bg-white/5 text-gray-300 cursor-pointer">
                                        Cancel
                                    </button>
                                </NavLink>

                                <button onClick={handleCreate} className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold flex items-center gap-2 cursor-pointer">
                                    <Save size={18} />
                                    Save Category
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="bg-[#1b1b1b] border border-white/10 rounded-3xl p-8 h-fit">
                        <h2 className="text-2xl font-bold mb-8">
                            Preview
                        </h2>

                        <div className="flex items-center gap-5 bg-[#28282a] rounded-2xl p-5">
                            <div className="w-14 h-14 rounded-full bg-cyan-900/60 flex items-center justify-center">
                                <SelectedIcon size={28} className="text-cyan-400" />
                            </div>

                            <div>
                                <p className="text-xl font-bold">
                                    {form.name || "Category name"}
                                </p>

                                <p className="text-gray-400 text-sm">
                                    Icon: {form.icon}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}