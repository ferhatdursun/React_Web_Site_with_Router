import React from "react";
import { Form } from "react-bootstrap";

const Services = () => {
  return (
    <div className="ServicesContainer">
      <div className="ServicesSol">
        <h4>Services</h4>
        <div className="SWebSeiteDesign">
          <h2>Website Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nisi
            pariatur consequuntur temporibus! Deserunt distinctio cumque eos
            <br></br>
            Pricing: $ 1,000 - $3,000
          </p>
        </div>
        <div className="SWebSeiteMaintenance">
          <h2>Website Maintenance</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            reprehenderit vero error sunt laborum itaque corrupti porro.
            <br></br>
            Pricing: $250 per month
          </p>
        </div>
        <div className="SWebsiteHosting">
          <h2>Website Hosting</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            eaque, rem molestiae praesentium accusamus perspiciatis provident
            <br></br>
            Pricing: $500 per month
          </p>
        </div>
      </div>
      <div className="ServicesSag">
        <h3 className="label">Get A Quote</h3>
        <Form className="Form">
          <label className="label">Name</label>
          <input className="inputt" type="text" placeholder="Name" />

          <label className="label">Email</label>
          <input className="inputt" type="text" placeholder="EmailAdress" />

          <label className="label">Message</label>
          <input className="inputt" placeholder="Message" height="2rem" />

          <button className="Sbutton">Send</button>
        </Form>
      </div>
    </div>
  );
};

export default Services;
