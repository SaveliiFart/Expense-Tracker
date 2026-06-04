import {
    User,
    Home,
    CreditCard,
    Settings,
    ArrowLeftRight,
} from "lucide-react"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const navClass = ({ isActive }) => `w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition duration-300 ${ isActive ? "bg-white/5 border border-white/5 text-cyan-400" : "text-gray-300 hover:bg-white/5"}`

    return (
        <div className="w-72 h-screen flex flex-col bg-[#1b1b1b] text-gray-300 p-4 border-r border-white/5">

            <div className="flex flex-col items-center px-4 py-6 gap-5">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.08)]">
                    <User size={42} className="text-gray-300" />
                </div>

                <p className="text-xl font-semibold">Users1</p>
            </div>

            <nav className="flex flex-col gap-4 text-lg mt-6">

                <NavLink to={"/overview"} className={navClass}>
                    <Home size={26} />
                    <span className="text-2xl font-semibold">Home</span>
                </NavLink>

                <NavLink to={"/expenses"} className={navClass}>
                    <CreditCard size={26} />
                    <span className="text-2xl font-semibold">Expenses</span>
                </NavLink>

                <NavLink to={"/settings"} className={navClass}>
                    <Settings size={26} />
                    <span className="text-2xl font-semibold">Settings</span>
                </NavLink>
            </nav>

            <div className="flex flex-col items-center pb-6 mt-auto">
                <ArrowLeftRight
                    size={46}
                    strokeWidth={3}
                    className="text-cyan-400 mb-3"
                />

                <h1 className="text-4xl font-bold tracking-wider">
                    <span className="text-cyan-100">exp</span>
                    <span className="text-cyan-400">ensio</span>
                </h1>
            </div>
        </div>
    )
}

export default Sidebar