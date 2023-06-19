import React from "react";
import n from "../components/style/Navigation.module.css";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import { Button } from "@mui/material";
import { fetchData } from "./utils/Rest";
import { set } from "react-hook-form";
import Cookies from 'js-cookie';

export const Navigation = (props) => {
  const auth = useContext(AuthContext);
  // const [cookies, setCookie, removeCookie] = useCookies();
  
  const [cookie,setCookie] = React.useState(Cookies.get('token'));

  const logout = async () => {
    const lo = await fetchData('auth/logout', true);
    Cookies.remove('token');
    setCookie(null);
    auth.logout();
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
            
            {/* <LoginModal /> */}
            {
              cookie?
                <li><Button variant="contained" onClick={logout} sx={{
        color: '#562B08',
        backgroundColor: 'white',
        borderRadius: '20px',
        border: '2px solid #562B08',
        padding: '10px 20px',
        '&:hover': {
          backgroundColor: '#562B08',
          color: 'white',
        },
      }}>
        Logout
      </Button></li>
                :
                <LoginModal handleCookie={()=> setCookie(Cookies.get('token'))}/>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;