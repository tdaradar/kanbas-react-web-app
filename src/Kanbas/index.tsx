import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Signin from "./Account/Signin";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
  return (
    <div>
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h2>Calendar</h2>} />
              <Route path="/Inbox" element={<h2>Inbox</h2>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
