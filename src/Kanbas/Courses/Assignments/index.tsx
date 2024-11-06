import React from 'react';
import { useParams, Link } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { assignments } from "../../Database";
import * as db from "../../Database";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([ ...modules, { _id: new Date().getTime().toString(),
                                     name: moduleName, course: cid, lessons: [] } ]);
    setModuleName("");
  };
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };

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
              <LessonControlButtons moduleId={assignment._id}
        deleteModule={deleteModule} editModule={editModule}/>
            </li>
          ))}
      </ul>
    </div>
  );
}
