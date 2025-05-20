import { createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFoundPage";
import About from "@/pages/about/About";
import What from "@/pages/what-we-do/What";
import LatestWork from "@/pages/latest-work/Work";
import Contact from "@/pages/contact/Contact";
import ProjectList from "@/components/custom/ProjectList";
import ProjectDetail from "@/components/custom/ProjectDetail";

export const AppRoutes = () => {
  return createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/what-we-do" element={<What />} />
      <Route path="/latest-work" element={<LatestWork />}>
        <Route index element={<ProjectList />} />
      </Route>
      <Route path="/latest-work/:name" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </>,
  );
};
