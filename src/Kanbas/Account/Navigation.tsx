import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="rounded-0 list-group wd">
      <Link to={`/Kanbas/Account/Signin`} className="bg-white text-black border-0 active list-group-item"> Signin </Link> <br />
      <Link to={`/Kanbas/Account/Signup`} className="text-danger border-0 list-group-item"> Signup </Link> <br />
      <Link to={`/Kanbas/Account/Profile`} className="text-danger border-0 list-group-item"> Profile </Link> <br />
    </div>
  );
}
