const BASE_URL = "http://localhost:5175/api/categories/"

export const createCategory = async (category) => {
    const token = localStorage.getItem("token")
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category),
    })
    return res.json()
}

export const getCategory = async () => {
    const token = localStorage.getItem("token")
    const res = await fetch(BASE_URL, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.json()
}