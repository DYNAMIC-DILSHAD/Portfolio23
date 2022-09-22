import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Hello i'm </h5>
        <div>
           <h1>Dilshad <span>Ansari</span></h1>
        </div>
        <h5 className="text__light">Fullstack Web Developer</h5>

        
        <HeaderSocials />
        <CTA />


       

      </div>
    </header>
  );
};

export default Header;