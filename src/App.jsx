import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Layout from "./pages/Layout";
import ContactPage from "./pages/ContactUs";
import TeamPage from "./pages/TeamPage";
import EventDetailsPage from "./components/EventDetailsPage";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "events", element: <Events /> },
      { path: "events/:id", element: <EventDetailsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "team", element: <TeamPage /> },
    ],
  },
]);

export default browserRouter;
