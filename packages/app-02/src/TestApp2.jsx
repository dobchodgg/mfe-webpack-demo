import React from "react";
import { InputLabel, Select, MenuItem, CssBaseline } from '@material-ui/core'

export default function TestApp2(props) {
    return (
        <div>
            <CssBaseline />
            <InputLabel id="demo-simple-select-label">Age App 2:</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={''}
                name='ageApp2'
                style={{ width: '50%' }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {console.table(props)}
        </div>
    );
}
