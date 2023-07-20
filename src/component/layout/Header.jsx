import { NavLink } from "react-router-dom"
import Auth from "../../util/auth/auth";
import { useState } from "react";

export default function Header() {
  const [login, setLogin] = useState(Auth.isAuthenticated());
  const logout = () => {
    setLogin((prevState) => !prevState)
    Auth.logout();
  }
  return (
    <div className="navbar bg-black">
      <div className="flex-1">
        <NavLink to="/"><p className={`btn btn-ghost normal-case text-xl hover:bg-white hover:text-black ${login ? "hidden" : "block"} `}>MY Portofolio</p></NavLink>
        <NavLink to="/"><p className={`btn btn-ghost normal-case text-xl hover:bg-white hover:text-black ${login ? "block" : "hidden"} `}>{Auth.authenticated()}</p></NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className={`${login ? "hidden" : "block"}`}><NavLink to={"/login"}>Log in</NavLink></li>
          <li className={`${login ? "block" : "hidden"}`} onClick={() => logout()}><a>Log out</a></li>
        </ul>
      </div>
    </div>
  )
}
