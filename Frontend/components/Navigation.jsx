import React from "react";
import n from "../components/style/Navigation.module.css";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import { AuthContext } from '../components/context/authContext'
import { useContext } from 'react'

export const Navigation = (props) => {
  const auth = useContext(AuthContext);
  console.log(auth.user);
  return (
    <nav id={n.menu} className={n.navbarDefault}>
      <div className={n.navbarheader}>
        <a className={n.navbarBrand} href="#page-top">
          PlanWithUs
        </a>
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
                <li>Welcome {auth.user.name}</li>
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