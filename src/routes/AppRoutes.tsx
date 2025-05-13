import { createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFoundPage";
import About from "@/pages/about/About";
import What from "@/pages/what/What";
import LatestWork from "@/pages/work/Work";
import Contact from "@/pages/contact/Contact";

export const AppRoutes = () => {
  return createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/what-we-do" element={<What />} />
      <Route path="/latest-work" element={<LatestWork />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </>,
  );
};
