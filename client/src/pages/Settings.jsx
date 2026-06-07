export default function Settings() {
    return (
        <main className="flex-1 bg-black text-white my-12">
            <div className="max-w-3xl mx-auto py-12">

                <h1 className="text-4xl font-bold mb-8">
                    Settings
                </h1>

                <div className="flex flex-col gap-6">

                    <div className="bg-[#1b1b1b] border border-white/10 rounded-3xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Profile
                        </h2>

                        <div className="flex flex-col gap-3">
                            <p>Username: User1</p>
                            <p>Email: user@email.com</p>
                        </div>
                    </div>

                    <div className="bg-[#1b1b1b] border border-white/10 rounded-3xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Currency
                        </h2>

                        <select className="bg-[#28282a] border border-white/10 rounded-xl px-4 py-2">
                            <option>USD ($)</option>
                            <option>EUR (€)</option>
                            <option>UAH (₴)</option>
                        </select>
                    </div>

                    <div className="bg-[#1b1b1b] border border-white/10 rounded-3xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Security
                        </h2>

                        <div className="flex gap-4">
                            <button className="px-4 py-2 rounded-xl bg-cyan-500 text-black cursor-pointer">
                                Change User
                            </button>

                            <button className="px-4 py-2 rounded-xl bg-yellow-500 text-black cursor-pointer">
                                Change Password
                            </button>

                            <button className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 cursor-pointer">
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* ABOUT */}
                    <div className="bg-[#1b1b1b] border border-white/10 rounded-3xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            About
                        </h2>

                        <p className="text-gray-400">
                            Expense Tracker v1.0.0
                        </p>
                    </div>

                </div>
            </div>
        </main>
    )
}