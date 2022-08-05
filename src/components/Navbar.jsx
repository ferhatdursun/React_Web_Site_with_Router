import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Clarusway,
  WebDesign,
  Menu,
  NavLink,
  NavLinkk,
} from "./NavbarStyle";

const MyNavbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Clarusway onClick={() => navigate("/")}>
        Clarusway <WebDesign>Web Design</WebDesign>
      </Clarusway>
      <Menu>
        <NavLink onClick={() => navigate("/")}>HOME</NavLink>
        <NavLinkk onClick={() => navigate("/About")}>ABOUT</NavLinkk>
        <NavLink onClick={() => navigate("/Services")}>SERVICES</NavLink>
      </Menu>
    </Container>
  );
};

export default MyNavbar;
