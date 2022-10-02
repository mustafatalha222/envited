import { lazy } from "react";
import App from "./App";

const LandingPage = lazy(() => import("./LandingPage"));
const EventDetail = lazy(() => import("./EventDetail"));
const EventList = lazy(() => import("./EventList"));

export { EventList, LandingPage, EventDetail, App };
