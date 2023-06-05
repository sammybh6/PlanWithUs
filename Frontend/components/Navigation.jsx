import React from "react";
import n from "../components/style/Navigation.module.css";
import LoginModal from "./LoginModal";
export const Navigation = (props) => {
  return (
    <nav id={n.menu} className={n.navbarDefault}>
        <div className={n.navbarheader}>
        <a className={n.navbarBrand} href="#page-top">
            PlanWithUs
        </a>
        <div/>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className={n.side}>
            <li>
              <a href="Flights" >

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
            <LoginModal/>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;