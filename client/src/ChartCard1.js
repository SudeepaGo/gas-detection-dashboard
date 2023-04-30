import { useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const today = new Date();

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
        },
    },
};

const data = {
    labels: [],
    datasets: [
        {
            label: "Air Quality (in ppm)",
            borderColor: "#FF5733",
            data: [],
            fill: false,
            pointStyle: 'circle',
            backgroundColor: '#3498DB',
            pointRadius: 5,
            pointHoverRadius: 7,
            lineTension: 0,
        }
    ],
}

function ChartCard1({ airQualityData }) {
    const chartReference = useRef();

    useEffect(() => {
        const chart = chartReference.current;
        if (airQualityData) {
            if (chart.data.labels.length !== 15) { // If we have less than 15 data points in the graph
                chart.data.labels.push(airQualityData.time);  // Add time in x-asis
                chart.data.datasets.forEach((dataset) => {
                    dataset.data.push(airQualityData.airQualityLevel); // Add airQualityLevel in y-axis
                });
            }
            else { //If there are already 15 data points in the graph.
                chart.data.labels.shift(); // Remove first time data
                chart.data.labels.push(airQualityData.time); // Insert latest time data
                chart.data.datasets.forEach((dataset) => {
                    dataset.data.shift(); // Remove first airQualityLevel data
                    dataset.data.push(airQualityData.airQualityLevel); // Insert latest airQualityLevel data
                });
            }
            chart.update();
        }
    }, [airQualityData]);

    return (
        <Card className='chart-card card-1'>
            <CardContent>
                <div className='card-title'>Air Quality Level</div>
                <Line ref={chartReference} options={options} data={data} />
            </CardContent>
        </Card>
    )
}

export default ChartCard1;