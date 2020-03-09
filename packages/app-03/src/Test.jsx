import React from "react";
import { Select, InputLabel, MenuItem, CssBaseline } from '@material-ui/core'

const handleChange = (env) => {
    if (env.target.value === 10) {
        throw 'Error from App 3';
    } else {
        console.log('Logging from App 3:', env.target);
    }
}

const Test = () => (
    <>
        <CssBaseline />
        <InputLabel id="demo-simple-select-label">Age App 3:</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={''}
            onChange={handleChange}
            name='ageApp3'
            style={{ width: '50%' }}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </>
);

export default Test;
