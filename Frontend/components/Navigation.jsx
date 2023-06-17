import React from "react";
import n from "../components/style/Navigation.module.css";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import { Button } from "@mui/material";
import { fetchData } from "./utils/Rest";
import { set } from "react-hook-form";

export const Navigation = (props) => {
  const auth = useContext(AuthContext);
  console.log(auth.user);
  const [loggedIn, setLoggedIn] = React.useState(auth.user ? true : false);
  const logout = async () => {
    const lo = await fetchData('auth/logout', true);
    auth.logout();
    setLoggedIn(false);
  }

  return (
    <nav id={n.menu} className={n.navbarDefault}>
      <div className={n.navbarheader}>
        <Link to="/" >
          <a className={n.navbarBrand} >
            PlanWithUs
          </a>
        </Link>
        <div />

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className={n.side}>
            <li>
              <Link to="/packages" >

                Packages
              </Link>
            </li>
            <li>
              <a href="flights" >

                Flights
              </a>
            </li>
            <li>
              <a href="trains" >
                Trains
              </a>
            </li>
            <li>
              <a href="hotels" >
                Hotels
              </a>
            </li>
            <li>
              <a href="stays" >
                AirBnb
              </a>
            </li>
            {/* <LoginModal /> */}
            {
              auth.user ?
                <li><Button onClick={logout}>Logout</Button></li>
                :
                <LoginModal />
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;