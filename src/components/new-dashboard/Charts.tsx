import { Bar, Doughnut } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    type ChartOptions,
} from "chart.js"


// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export default function DashboardCharts({data}) {

    const uniqueData = [
        data?.duplicateChart?.tp.unique,
        data?.duplicateChart?.tc.unique,
        data?.duplicateChart.trainer?.unique,
        data?.duplicateChart.candidate.unique,
    ];

    const duplicateData = [
        data?.duplicateChart.tp.duplicate,
        data?.duplicateChart.tc.duplicate,
        data?.duplicateChart.trainer.duplicate,
        data?.duplicateChart.candidate.duplicate,
    ];
    const batchIdData = {
        labels: ["with Batch ID", "without Batch ID"],
        datasets: [
            {
                label: "Candidates",
                data: [65, 33],
                backgroundColor: ["rgba(8, 145, 178, 1)", "rgba(245, 158, 11, 1)"],
                borderWidth: 1,
                borderRadius: 50,
            },
        ],
    }

    // Gender Ratio data
    const genderData = {
        labels: data?.genderChart?.map(item => item.vsGender),
        datasets: [
            {
                data: data?.genderChart?.map(item => item.count),
                backgroundColor: ["rgba(2, 132, 199, 1)", "rgba(244, 63, 94, 1)", "rgba(170, 170, 170, 1)"],
                hoverOffset: 4,
                rotation: 120,
                cutout: "70%",
                borderRadius: 15,
                borderColor: "white",
                borderWidth: 2,
            },
        ],
    }

    // Function to create doughnut chart data
    const createDoughnutData = (unique: number, recurring: number, colors: string[]) => ({
        labels: ["Unique", "Recurring"],
        datasets: [
            {
                data: [unique, recurring],
                backgroundColor: colors,
                hoverOffset: 4,
                rotation: 120,
                cutout: "70%",
                borderRadius: 15,
                borderColor: "white",
                borderWidth: 2,
            },
        ],
    })

    const uniqueRecurringConfigs = [
        {
            title: "Candidates",
            data: createDoughnutData(
                data?.duplicateChart.candidate.unique,
                data?.duplicateChart.candidate.unique_2 - data?.duplicateChart.candidate.unique,
                ["rgba(153, 102, 255, 1)", "rgba(153, 102, 255, 0.5)"]
            ),
        },
        {
            title: "Training Partners",
            data: createDoughnutData(
                data?.duplicateChart.tp.unique,
                data?.duplicateChart.tp.unique_2 - data?.duplicateChart.tp.unique,
                ["rgba(13, 148, 136, 1)", "rgba(13, 148, 136, 0.5)"]
            ),
        },
        {
            title: "Training Centers",
            data: createDoughnutData(
                data?.duplicateChart.tc.unique,
                data?.duplicateChart.tc.unique_2 - data?.duplicateChart.tc.unique,
                ["rgba(59, 130, 246, 1)", "rgba(59, 130, 246, 0.5)"]
            ),
        },
        {
            title: "Trainers",
            data: createDoughnutData(
                data?.duplicateChart.trainer.unique,
                data?.duplicateChart.trainer.unique_2 - data?.duplicateChart.trainer.unique,
                ["rgba(20, 184, 166, 1)", "rgba(20, 184, 166, 0.5)"]
            ),
        },
    ];

    // Chart options
    const doughnutOptions: ChartOptions<"doughnut"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 12,
                    },
                },
            },
        },
    }

    const barOptions: ChartOptions<"bar"> = {
        indexAxis: "y",
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
                    display: true,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    }

    // Calculate total candidates for the gender chart
    const totalCandidates = genderData?.datasets[0]?.data?.reduce((sum, value) => sum + value, 0)

    // Custom plugin to draw center text in doughnut chart
    const centerTextPlugin = {
        id: "centerText",
        beforeDraw: (chart: any) => {
            if (chart.config.type === "doughnut" && chart.config.data === genderData) {
                const width = chart.width
                const height = chart.height
                const ctx = chart.ctx

                ctx.restore()
                const fontSize = (height / 500).toFixed(2)
                ctx.font = fontSize + "em sans-serif"
                ctx.textBaseline = "middle"

                const text = "Total Candidates"
                const textX = Math.round((width - ctx.measureText(text).width) / 2)
                const textY = height / 2 - 15

                ctx.fillStyle = "#6b7280"
                ctx.fillText(text, textX, textY)

                ctx.fontWeight = "bold"

                const valueText = totalCandidates.toString()
                const valueTextX = Math.round((width - ctx.measureText(valueText).width) / 2)
                const valueTextY = height / 2 + 20

                ctx.fillStyle = "#000"
                ctx.fillText(valueText, valueTextX, valueTextY)

                ctx.save()
            }
        },
    }

    // Register the plugin
    ChartJS.register(centerTextPlugin)

    return (
        <div className="w-full">
            {/* Unique vs Recurring Section */ }
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">Unique vs Recurring entries</h3>
                </div>
                <div className="p-6 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        { uniqueRecurringConfigs.map((config, index) => (
                            <div key={ index } className="flex flex-col items-center">
                                <div className="h-40 w-full">
                                    <Doughnut data={ config.data } options={ doughnutOptions } />
                                </div>
                                <p className="text-sm text-gray-500 mt-1">- for { config.title }</p>
                            </div>
                        )) }
                    </div>
                </div>
            </div>

            {/* Bottom Charts Grid */ }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                {/* Batch ID Distribution Chart */ }
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">Batch ID Distribution for 2025</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="h-40">
                            <Bar data={ batchIdData } options={ barOptions } />
                        </div>
                    </div>
                </div>

                {/* Gender Ratio Chart */ }
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-900">Gender Ratio of candidates</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="h-40">
                            <Doughnut data={ genderData } options={ doughnutOptions } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}