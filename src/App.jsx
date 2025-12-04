import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetailsPage from "./components/EventDetailsPage";
import Layout from "./pages/Layout";
import ContactPage from "./pages/ContactUs";
import TeamPage from "./pages/TeamPage";
import AllSections from "./pages/Allsections";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <AllSections /> },
      { path: "events", element: <Events /> },
      { path: "events/:id", element: <EventDetailsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "team", element: <TeamPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
