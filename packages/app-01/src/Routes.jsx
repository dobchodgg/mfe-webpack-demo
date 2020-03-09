import { Route, Switch } from "react-router-dom";

import DialogPage from "./pages/dialog-page";
import IndexPage from "./pages/index-page";
import React, { lazy, Suspense } from "react";
import RoutingPage from "./pages/routing-page";
import UiLibraryPage from "./pages/ui-library-page";
import Test from './pages/test'
import config from './config.json';

/**
 * Create component
 * @param {*[]} components
 */
const createComponents = (components) => {
  const role = window.localStorage.getItem('Role');
  const res = [];

  components.forEach((component, index) => {
    if (component.Role === role) {
      const path = `${component.Package}/${component.Name}`;
      console.log('path: ', path);
      const Imp = lazy(() => import(path));
      const comp = () => (
        <Suspense
        fallback={`Loading component ${component.Name} from ${component.Package}`}>
          <Imp {...component.Props} />
        </Suspense>)
      res.push(comp);
    }
  });

  return res;
}

/**
 * Create routes from JSON file
 * @param {*[]} routeConfig
 */
const createRoutes = (routeConfig) => {
  const res = []
  routeConfig.forEach((config, index) => {
    const components = createComponents(config.Components);
    if (components.length) {
      res.push({
        route: config.Route,
        component: () => components
      });
    }
  });

  return res;
}

export default function Routes() {
  const routes = createRoutes(config);
  console.log('routes: ', routes);
  return (
    <Switch>
      <Route path="/" exact={true}>
        <IndexPage />
      </Route>
      {/* <Route path="/dialog" component={DialogPage} />
    <Route path="/ui-library" component={UiLibraryPage} />
    <Route path="/routing" component={RoutingPage} />
    <Route path="/test" component={Test} /> */}
      {routes.map((item, index) => {
        return (<Route path={item.route} key={index} component={item.component} />);
      })}
    </Switch>
  );
}
