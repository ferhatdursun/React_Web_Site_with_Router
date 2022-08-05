import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom"
import Html from "../img/logo_html.png";
import Css from "../img/logo_css.png";
import Brush from "../img/logo_brush.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      
      <div className="Container">
        <div className="html" >
          <img src={Html} alt="" onClick={()=>navigate("/HtmlDetails")} />
          <p>HTML 5 Markup</p>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            corrupti dicta exercitationem at architecto.
          </p>
        </div>

        <div className="html">
          <img src={Css} alt="" onClick={()=>navigate("/CssDetails")}/>
          <p>CSS3 Styling</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            corrupti dicta exercitationem at architecto.
          </p>
        </div>
        <div className="html">
          <img src={Brush} alt="" onClick={()=>navigate("/GraphicDetails")} />
          <p>Graphic Design</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            corrupti dicta exercitationem at architecto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
