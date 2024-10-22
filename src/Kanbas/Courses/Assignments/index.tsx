import React from 'react';
import { useParams, Link } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { assignments } from "../../Database";

export default function Assignments() {
  const { cid } = useParams();

  return (
    <div id="wd-assignments">
      <input 
        id="wd-search-assignment"
        placeholder="Search for Assignments" 
      />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title" className="p-3 ps-2 bg-secondary">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link 
                className="wd-assignment-link"
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </Link>
              <p>
                Multiple Modules | Not available yet | No due date
              </p>
              <LessonControlButtons />
            </li>
          ))}
      </ul>
    </div>
  );
}
