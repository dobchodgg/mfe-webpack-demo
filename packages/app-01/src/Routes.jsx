import { Route, Switch } from "react-router-dom";
import DialogPage from "./pages/dialog-page";
import IndexPage from "./pages/index-page";
import React, { lazy, Suspense, createElement, Fragment } from "react";
import RoutingPage from "./pages/routing-page";
import UiLibraryPage from "./pages/ui-library-page";
import Test from './pages/test'
import config from '../config.json';
import Page from "./Page";
import { Grid, CssBaseline, InputLabel, MenuItem, Select } from '@material-ui/core'
import loadable from '@loadable/component';

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

/**
 * Create component
 * @param {*[]} components
 */
const createComponents = (components) => {
  const role = window.localStorage.getItem('Role');
  const result = [];

  components.forEach(component => {
    if (component.Role === role) {
      const { Name, Package, Props, Url } = component;
      console.log('Url: ', Url);
      const fallback = `Loading component ${Name} from ${Package}`;
      // const res = lazy(() => import(`${Package}/${Name}`));
      const res = lazy(() => import('app_02/TestApp2'));
      result.push(res);
    }
  });

  return result;
}

/**
 * Create routes from JSON file
 * @param {*[]} routeConfig
 */
const createRoutes = (routeConfig) => {
  const res = []
  for (const config of routeConfig) {
    const components = createComponents(config.Components);
    if (components.length) {
      console.log('components: ', components);
      res.push({
        route: config.Route,
        components: components
      })
    };

    return res;
  }
}

  export default function Routes() {
    const routes = createRoutes(config);
    return (
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route path="/" exact={true}>
            <IndexPage />
          </Route>
          <Route path="/dialog" component={DialogPage} />
          <Route path="/ui-library" component={UiLibraryPage} />
          <Route path="/routing" component={RoutingPage} />
          <Route path="/test" component={Test} />
          {/* {routes.map((item, index) => {
            const { components, route } = item;
            return (
              <Route path={route} key={index}>
                {components.map((Comment, index) => <Fragment key={index}><Comment /></Fragment>)}
              </Route>
            );
          })} */}
        </Switch>
      </Suspense>
    );
  }
