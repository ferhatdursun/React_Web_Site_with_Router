import React from "react";
import {
  Container,
  Newsletter,
  Kapsayici,
  Input,
  Button,
  Containerr,
  Cizgi,
} from "./HeaderStyle";

const Header = () => {
  return (
    <Container>
      <Cizgi />
      <Containerr>
        <div>
          <Newsletter>Subscribe To Our Newsletter</Newsletter>
        </div>
        <Kapsayici>
          <Input type="text" placeholder="Enter Email..." />
          <Button>Subscribe</Button>
        </Kapsayici>
      </Containerr>
    </Container>
  );
};

export default Header;
