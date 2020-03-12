import React, { Suspense, lazy, createElement } from "react";
import { Grid, CssBaseline, InputLabel, MenuItem, Select } from '@material-ui/core'
import Page from "../Page";

const Test1 = lazy(() => import("app_02/TestApp2"));
const Test2 = lazy(() => import("app_03/TestApp3"));

const testFunction = (env) => {
    console.log('Logging from App 1: ', env.target);
}

/**
 * Create component
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.fallback
 * @param {React.LazyExoticComponent<React.ComponentType<any>>} props.container
 * @param {{[key: string]: any}} props.containerProps
 */
export default function BasicContainer(props) {
    const { title, fallback, container, containerProps } = props;
    return (
        <Page title={title}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Suspense fallback={fallback}>
                        {createElement(container, containerProps, null)}
                    </Suspense>
                </Grid>
            </Grid>
        </Page>
    );
}
