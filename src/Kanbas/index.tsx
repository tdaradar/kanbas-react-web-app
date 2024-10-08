import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Signin from "./Account/Signin";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses/:cid/*" element={<Courses />} />
      </Routes>
    </div>
</div>

  );
}
