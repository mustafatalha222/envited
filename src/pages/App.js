import { LandingPage, EventDetail, EventList } from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { CONSTANTS } from "../utils";

function App() {
  const routes = [
    { path: CONSTANTS.ROUTES.HOME, exact: true, element: <LandingPage /> },
    { path: CONSTANTS.ROUTES.EVENT_ID, exact: false, element: <EventDetail /> },
    { path: CONSTANTS.ROUTES.EVENTS, exact: false, element: <EventList /> },
  ];

  return (
    <BrowserRouter>
      <Suspense fallback={<div> Loading ...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
