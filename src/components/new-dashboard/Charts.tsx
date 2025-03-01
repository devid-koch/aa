//@ts-nocheck
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Charts = ({ data }) => {

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
    const barData = {
        labels: ["Training Partners", "Training Centers", "Trainers", "Candidates"],
        datasets: [
            {
                label: "Unique",
                data: uniqueData,
                backgroundColor: "rgba(2, 132, 199, 0.8)",
                borderRadius: 10,
            },
            {
                label: "Duplicate",
                data: duplicateData,
                backgroundColor: "rgba(244, 63, 94, 0.8)",
                borderRadius: 10,
            },
        ],
    };

    const pieData = {
        labels: data?.genderChart?.map(item => item.vsGender),
        datasets: [
            {
                data: data?.genderChart?.map(item => item.count),
                backgroundColor: [
                    "rgba(244, 63, 94,1)",
                    "rgba(2, 132, 199,1)",
                    "rgba(170, 170, 170,1)"
                ],
                hoverOffset: 4,
                rotation: 120,
                cutout: "70%",
                borderRadius: 15,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                min: 0,  // Starting at 0
                max: 200000,  // Adjust this based on your expected data range
                ticks: {
                    stepSize: 20000,  // Define step size for tick marks
                    autoSkip: true,  // Ensure labels do not overlap
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: false
            },
            legend: {
                align: 'center',
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 30,
                    boxHeight: 9
                }
            },
            tooltip: {
                enabled: true,
            }
        }
    }

    return (
        <div className="grid grid-cols-3 gap-4 h-full">
            <div className="col-span-2 shadow-md sm:rounded-lg bg-white rounded-md p-6 flex flex-col">
                <p className="font-semibold mb-6">Unique Submissions vs Duplicate Entries <span id="forYear">for 2025</span></p>
                <div className="flex-grow">
                    <Bar data={ barData } options={ options } />
                </div>
            </div>
            <div className="shadow-md sm:rounded-lg bg-white rounded-md p-6 flex flex-col">
                <p className="font-semibold mb-6">Gender Ratio</p>
                <div className="flex-grow relative">
                    <Pie data={ pieData } options={ {
                        responsive: true,
                        maintainAspectRatio: false,
                    } } />
                </div>
            </div>
        </div>
    );
};

export default Charts;