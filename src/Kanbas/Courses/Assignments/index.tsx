import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title" className="p-3 ps-2 bg-secondary">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
          <p>
            Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <br /> <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </p>
          <LessonControlButtons />
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS + BOOTSTRAP
          </a>
          <p>
            Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <br /> <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </p>
            <LessonControlButtons />
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A3 - JAVASCRIPT + REACT
          </a>
          <p>
            Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <br /> <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </p>
            <LessonControlButtons />
        </li>
      </ul>
    </div>
);}
