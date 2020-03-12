import React, { Suspense, lazy } from "react";
import { Grid, CssBaseline, InputLabel, MenuItem, Select } from '@material-ui/core'
import Page from "../Page";

const Test1 = lazy(() => import("app_02/TestApp2"));
const Test2 = lazy(() => import("app_03/TestApp3"));

const testFunction = (env) => {
    console.log('Logging from App 1: ', env.target);
}

const Test = () => (
    <Page title="Test page">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">Age App 1:</InputLabel>
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
            </Grid>
            <Grid item xs={12}>
                <Suspense fallback="Test component from App 2...">
                    <Test1 func={testFunction} />
                </Suspense>
            </Grid>
            <Grid item xs={12}>
                <Suspense fallback="Test component from App 3...">
                    <Test2 />
                </Suspense>
            </Grid>
        </Grid>
    </Page>
);

export default Test;
