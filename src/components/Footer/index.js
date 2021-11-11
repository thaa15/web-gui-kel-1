import React from "react";
import { Footers } from "./styled";

const Footer = () => {
  return (
    <Footers>
      <h3 style={{textAlign:"center", color:"white"}}>
        Copyrights {new Date().getFullYear()} Kelompok 1
      </h3>
    </Footers>
  );
};

export default Footer;
