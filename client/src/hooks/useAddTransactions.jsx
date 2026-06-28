import { useEffect, useState } from "react"
import { getCategory } from "../api/categoryAPI";

export const useAddTransactions = () => {
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCategory()
            .then((data) => {
                setCategory(data)
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    })

    return{category, loading}
}