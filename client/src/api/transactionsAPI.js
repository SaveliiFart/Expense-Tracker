const BASE_URL = "http://localhost:5175/api/transactions/"

export const getTransactions = async (page) => {
    const token = localStorage.getItem("token")
    const res = await fetch(`${BASE_URL}?page=${page}&limit=7`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.json()
}

export const createTransactions = async (expenses) => {
    const token = localStorage.getItem("token")
    console.log(expenses)
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(expenses),
    })
    return res.json()
}

export const getFilteredTransactions = async () => {
    const token = localStorage.getItem("token")
    const res = await fetch(`${BASE_URL}filtered`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.json()
}

export const getChartData= async () => {
    const token = localStorage.getItem("token")
    const res = await fetch(`${BASE_URL}chartData`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.json()
}

export const getOverviewTransactions = async () => {
    const token = localStorage.getItem("token")
    const res = await fetch(`${BASE_URL}overview`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.json()
}