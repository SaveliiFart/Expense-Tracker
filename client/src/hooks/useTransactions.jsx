import { getTransactions } from "../api/transactionsAPI.js"
import { useEffect, useState } from "react"

export const useTransactions = (page) => {
    const [transaction, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 7,
        total: 0,
        totalPages: 1
    });

    useEffect(() => {
        getTransactions(page)
            .then((data) => {
                setTransactions(data.data)
                setPagination(data.pagination)
            })
            .finally(() => setLoading(false))
    }, [page])

    return {transaction, pagination, loading}
}