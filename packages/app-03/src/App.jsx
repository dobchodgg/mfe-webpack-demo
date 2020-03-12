import Button from "./Button";
import Test from "./TestApp3";
import React from "react";

const Page = React.lazy(() => import("app_01/Page"));

function App() {
  return (
    <React.Suspense fallback={null}>
      <Page title="Styled Components App">
        <Button>&#128133; Test Button</Button>
        <Test />
      </Page>
    </React.Suspense>
  );
}

export default App;
