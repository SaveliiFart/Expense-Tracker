const DropAndDown = ({filters, setFilters, setFiltersOpen}) => {
    return (
        <div className="absolute right-10 mt-2 w-72 bg-[#1b1b1b] border border-white/10 rounded-2xl shadow-lg p-4 z-50">

            <div className="mb-4">
                <p className="text-xs text-gray-400 mb-2">Type</p>

                <select
                    value={filters.type}
                    onChange={(e) =>
                        setFilters(prev => ({
                            ...prev,
                            type: e.target.value
                        }))
                    }
                    className="w-full bg-[#242426] border border-white/10 rounded-xl px-3 py-2 text-sm outline-none text-white"
                >
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>

            <div className="mb-4">
                <p className="text-xs text-gray-400 mb-2">Category</p>

                <select
                    value={filters.category}
                    onChange={(e) =>
                        setFilters(prev => ({
                            ...prev,
                            category: e.target.value
                        }))
                    }
                    className="w-full bg-[#242426] border border-white/10 rounded-xl px-3 py-2 text-sm outline-none text-white"
                >
                    <option value="all">All Categories</option>
                    <option value="food">Food</option>
                    <option value="salary">Salary</option>
                    <option value="shopping">Shopping</option>
                </select>
            </div>

            <div className="mb-4">
                <p className="text-xs text-gray-400 mb-2">Sort</p>

                <select
                    value={filters.sort}
                    onChange={(e) =>
                        setFilters(prev => ({
                            ...prev,
                            sort: e.target.value
                        }))
                    }
                    className="w-full bg-[#242426] border border-white/10 rounded-xl px-3 py-2 text-sm outline-none text-white"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="highest">Highest Amount</option>
                    <option value="lowest">Lowest Amount</option>
                </select>
            </div>

            <button
                onClick={() => {setFilters({type: "all", category: "all", sort: "newest",}), setFiltersOpen(false)}}
                className="w-full mt-2 py-2 rounded-xl bg-cyan-400 text-black font-semibold cursor-pointer"
            >
                Reset
            </button>
        </div>
    )
}

export default DropAndDown