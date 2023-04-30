import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';

const data = [];

function Card1({ airQualityData }) {
    const [averageAQ, setAverageAQ] = useState(0);

    useEffect(() => {
        if (airQualityData) {
            const airQualityLevel = Number(parseFloat(airQualityData.airQualityLevel).toFixed(1));
            data.push(airQualityLevel);
        }
    }, [airQualityData]);

    setInterval(() => {
        let averageValue = 0;
        for(let i = 0; i < data.length; i++) {
            averageValue += data[i];
        }
        averageValue = averageValue/data.length;
        setAverageAQ(averageValue);
    }, 15000)

    return (
        <Card className='card card-1'>
            <CardContent>
                <div className='card-title'>Averages</div>
                <div className='card-1-item item-one'>
                    <div>Air Quality</div>
                    <div>{averageAQ} ppm</div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Card1;