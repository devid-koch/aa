import { Grid, Paper, Typography } from '@mui/material';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MetricsCharts = ({ metrics }: any) => {
    const labels = metrics.map((metric: any) => metric.label);
    const dataValues = metrics.map((metric: any) => metric.value);

    const pieData = {
        labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FFC107'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FFC107'],
            },
        ],
    };

    const barData = {
        labels,
        datasets: [
            {
                label: 'Metrics',
                data: dataValues,
                backgroundColor: '#36A2EB',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => {
                        if (tooltipItem.datasetIndex === 0) {
                            const total = tooltipItem.dataset.data.reduce((acc: any) => acc + tooltipItem.raw, 0);
                            const percentage = ((tooltipItem.raw / total) * 100).toFixed(2);
                            return `${tooltipItem.label}: ${percentage}%`;
                        }
                        return tooltipItem.raw;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 20,
                    max: Math.max(...dataValues) + 20,
                },
            },
        },
    };


    return (
        <Grid container spacing={ 3 }>
            {/* Pie Chart */ }
            <Grid item xs={ 12 } md={ 6 }>
                <Paper
                    sx={ {
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                    } }
                >
                    <Typography variant="h6" gutterBottom>
                        Pie Chart (Click a segment to remove)
                    </Typography>
                    <Pie data={ pieData } options={ options } />
                </Paper>
            </Grid>

            {/* Bar Chart */ }
            <Grid item xs={ 12 } md={ 6 }>
                <Paper
                    sx={ {
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                    } }
                >
                    <Typography variant="h6" gutterBottom>
                        Bar Chart
                    </Typography>
                    <Bar data={ barData } options={ options } />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default MetricsCharts;
