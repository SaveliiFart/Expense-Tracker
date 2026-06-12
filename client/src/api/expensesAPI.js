const BASE_URL = "http://localhost:5175/api/expenses/"

export const getExpenses = async () => {
    const token = localStorage.getItem("token")
    const res = await fetch(BASE_URL, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.json()
}

export const createExpenses = async (expenses) => {
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