import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// const { Configuration, OpenAIApi } = require("openai");

function Card2() {
    const [gasName, setGasName] = useState('aq');
    // const [loading, setLoading] = useState(false);
    // const [apiResponse, setApiResponse] = useState("");

    const handleChange = (event) => {
        setGasName(event.target.value);
    };
    // const configuration = new Configuration({
    //     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    // });

    // const openai = new OpenAIApi(configuration);

    // setInterval(async (e) => {
    //     // e.preventDefault();
    //     setLoading(true);
    //     try {
    //         const result = await openai.createCompletion({
    //             model: "text-davinci-003",
    //             prompt: 'High Air quality level',
    //             temperature: 0.5,
    //             max_tokens: 4000,
    //         });
    //         //console.log("response", result.data.choices[0].text);
    //         setApiResponse(result.data.choices[0].text);
    //     } catch (e) {
    //         //console.log(e);
    //         setApiResponse("Something is going wrong, Please try again.");
    //     }
    //     setLoading(false);
    // }, 15000);

    return (
        <Card className='card card-2'>
            <CardContent>
                <div className='card-title'>Info on
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={gasName}
                            onChange={handleChange}
                        >
                            <MenuItem value='aq'>Air Quality</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='card-content'>
                    {/* {loading ? 'Loading...' : apiResponse} */}
                    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>0-50 ppm</div><div style={{color: '#038903'}}>Good</div></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '3px'}}><div>51-100 ppm</div><div style={{color: '#ffff39'}}>Moderate</div></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '3px'}}><div>101-150 ppm</div><div style={{color: '#ff7e00', width: '200px', textAlign: 'right'}}>Unhealthy for Sensitive Groups</div></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '3px'}}><div>151-200 ppm</div><div style={{color: '#ff0000'}}>Unhealthy</div></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '3px'}}><div>201-300 ppm</div><div style={{color: '#8f3f97'}}>Very Unhealthy</div></div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '3px'}}><div>301 and higher ppm</div><div style={{color: '#7e0023'}}>Hazardous</div></div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Card2;