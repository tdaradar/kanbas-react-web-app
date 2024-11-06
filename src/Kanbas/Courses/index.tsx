import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}  &gt; {pathname.split("/")[4]}
      </h2>
      <div className="d-flex">
        <div>
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:aid"
              element={<h2>Assignment Editor</h2>}
            />
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}