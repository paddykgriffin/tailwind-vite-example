import { createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFoundPage";
import About from "@/pages/about/About";

export const AppRoutes = () => {
  return createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </>,
  );
};
