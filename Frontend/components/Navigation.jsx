import React from "react";
import n from "../components/style/Navigation.module.css";
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
              <a href="#features" >
                Features
              </a>
            </li>
            <li>
              <a href="#about" >
                About
              </a>
            </li>
            <li>
              <a href="#services" >
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" >
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" >
                Team
              </a>
            </li>
            <li>
              <a href="#contact" >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
