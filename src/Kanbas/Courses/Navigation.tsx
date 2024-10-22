import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { courses } from "../Database";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="rounded-0 list-group wd" id="wd-courses-navigation">
      {links.map((link) => {
        const isActive = pathname.includes(link.toLowerCase());
        return (
          <React.Fragment key={link}>
            <Link
              to={`/Kanbas/Courses/${course._id}/${link}`}
              className={`border-0 list-group-item ${
                isActive ? "bg-white text-black active" : "text-danger"
              }`}
            >
              {link}
            </Link>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
}
