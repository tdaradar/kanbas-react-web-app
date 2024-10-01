import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
          <Routes>
  <Route path="Home" element={<Home />} />
  <Route path="Modules" element={<Modules />} />
    <Route path="Assignments" element={<Assignments />} />
    <Route path="Assignments/:aid" element={<AssignmentEditor />} />
</Routes>

          </td>
        </tr>
      </table>
    </div>

);}

