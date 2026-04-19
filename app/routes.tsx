import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "galeria", Component: Gallery },
      { path: "sobre", Component: About },
      { path: "contato", Component: Contact },
    ],
  },
]);
