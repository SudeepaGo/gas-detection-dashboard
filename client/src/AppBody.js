import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card1 from './Card1';
import Card2 from './Card2';
import ChartCard1 from './ChartCard1';
// import ChartCard2 from './ChartCard2';

function AppBody({ airQualityData }) {

    return (
        <Box className='app-body'>
            <Grid container className='app-main-grid'>
                <Grid item xs={8} className='summary-grid'>
                    <ChartCard1 airQualityData={airQualityData} />
                </Grid>
                <Grid item xs={4} className='summary-grid'>
                    <Card1 airQualityData={airQualityData} />
                    {/* <Card2 /> */}
                </Grid>

                {/* <Grid item xs={6} className='summary-grid'>
                    <ChartCard2 />
                </Grid> */}
            </Grid>
        </Box>
    )
}

export default AppBody;