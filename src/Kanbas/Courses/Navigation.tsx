import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div className="rounded-0 list-group wd" id="wd-courses-navigation">
      <Link
        className="bg-white text-black border-0 active list-group-item"
        to="/Kanbas/Courses/1234/Home"
      >
        Home
      </Link><br />
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Modules"
      >
        Modules
      </Link><br />
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Piazza"
      >
        Piazza
      </Link><br />
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Zoom"
      >
        Zoom
      </Link><br />
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Assignments"
      >
        Assignments
      </Link><br />
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Quizzes"
      >
        Quizzes
      </Link><br />
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Grades"
      >
        Grades
      </Link><br />
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/People"
      >
        People
      </Link>
    </div>
  );
}
