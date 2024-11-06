import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="rounded-0 list-group wd">
      <Link to={`/Kanbas/Account/Signin`} className="bg-white text-black border-0 active list-group-item"> Signin </Link> <br />
      <Link to={`/Kanbas/Account/Signup`} className="text-danger border-0 list-group-item"> Signup </Link> <br />
      <Link to={`/Kanbas/Account/Profile`} className="text-danger border-0 list-group-item"> Profile </Link> <br />
    </div>
  );
}
