import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <div className="topnav">
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) => {
            return isPending ? "pending" : isActive ? "active" : "";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={`/timer`}
          className={({ isActive, isPending }) => {
            return isPending ? "pending" : isActive ? "active" : "";
          }}
        >
          Timer Apps
        </NavLink>
        <NavLink
          to={`/todo`}
          className={({ isActive, isPending }) => {
            return isPending ? "pending" : isActive ? "active" : "";
          }}
        >
          Todo Apps
        </NavLink>
        <NavLink
          to={`/secret`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Secret
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
