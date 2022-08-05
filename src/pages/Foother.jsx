import React from "react";
import { Genel, Copyright, FootherContainer,A } from "./FootherStyles";
import Foto from "../img/Clarusway.jpeg"
const Foother = () => {
  return (
    <FootherContainer>
      <Genel>
        <Copyright> Ferhat_Clarusway Web Design, Copyright 2020</Copyright>
        <A href="https://www.clarusway.com" target="_blank">
          <img src={Foto} alt="" width="70rem" />
        </A>
      </Genel>
    </FootherContainer>
  );
};

export default Foother;
