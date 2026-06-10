import { ArrowLeftRight } from "lucide-react"
import { useState } from "react";
import { login } from "../api/authAPI.js";
import { useNavigate, Navigate, Link } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' })
    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    if (token) {
        return <Navigate to="/overview" />;
    }

    const handleSubmit = async () => {
        const data = await login(form);

        if (data.token) {
            localStorage.setItem("token", data.token);
            navigate("/overview");
        } else {
            alert(data.message);
        }
    };



    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
            <div className="mt-36 flex flex-col items-center">
                <ArrowLeftRight size={46} strokeWidth={3} className="text-cyan-400 mb-5" />

                <h1 className="text-6xl font-bold tracking-wider mb-36">
                    <span className="text-cyan-100">exp</span>
                    <span className="text-cyan-400">ensio</span>
                </h1>

                <div className="w-155">

                    <label className="block text-gray-400 font-semibold mb-3 ">
                        Enter Login
                    </label>

                    <input
                        type="text"
                        placeholder="Enter login"
                        className="w-full h-13 bg-neutral-700/80 border border-neutral-600 rounded-lg px-4 text-white outline-none mb-3"
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                    />

                    <label className="block text-gray-400 font-semibold mb-3">
                        Enter password
                    </label>

                    <input
                        type="password"
                        placeholder="********************"
                        className="w-full h-13 bg-neutral-700/80 border border-neutral-600 rounded-lg px-4 text-white outline-none"

                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />

                    <p className="block text-gray-400 font-semibold mt-3">
                        Don't have an account?
                        <Link to="/register">
                            Register
                        </Link>
                    </p>

                    <button
                        className="mt-12 w-full h-16 bg-cyan-400 hover:bg-cyan-300 rounded-lg text-black text-xl cursor-pointer"
                        onClick={handleSubmit}
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login