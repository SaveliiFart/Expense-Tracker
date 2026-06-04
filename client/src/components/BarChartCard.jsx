import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const BarChartCard = ({ title, labels, values, color }) => {
    const data = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: color,
                borderRadius: 4,
                barThickness: 24,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#a1a1aa",
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
            },
            y: {
                ticks: {
                    color: "#a1a1aa",
                    callback: value => `${value}$`,
                },
                grid: {
                    color: "rgba(255,255,255,0.08)",
                },
                border: {
                    display: false,
                },
            },
        },
    }

    return (
        <div className="mx-5">
            <h3 className="text-gray-400 text-xl p-2">{title}</h3>

            <div className="h-62 bg-[#28282a] rounded-2xl p-3">
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default BarChartCard