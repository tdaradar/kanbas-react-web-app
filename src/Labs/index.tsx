import { Routes, Route, Navigate } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div className="container-fluid">
      <TOC />
      <h1>Welcome to Web Dev!!</h1>
      <h1>Labs</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="/Lab1" element={<Lab1 />} />
        <Route path="/Lab2" element={<Lab2 />} />
      </Routes>
      {/* <Lab1 />
      <Lab2 />
      <h2>Lab 3</h2>
      <h2>Lab 4</h2>
      <h2>Lab 5</h2> */}
    </div>
  );
}
