import { useEffect, useState } from "react"
import { getChartData } from "../api/transactionsAPI"
import { builtChartData } from "../data/chartDataHelper"

export const useOverview = () => {
    const [incomeChart, setIncomeChart] = useState(null)
    const [expenseChart, setExpenseChart] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getChartData()
            .then((data) => {
                setIncomeChart(
                    builtChartData(data.chartIncome, "Income", "#14d8c9")
                )

                setExpenseChart(
                    builtChartData(data.chartExpenses, "Outcome", "#ef4444")
                )
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return {incomeChart, expenseChart, loading}
}