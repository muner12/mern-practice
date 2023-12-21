import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
export default function NavBar() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="logo">
          <a href="#">MunirDEV</a>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            {
              isLoggedIn ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/signup">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )
          }
          </ul>
        </nav>
      </header>
    </>
  );
}
