import React from "react";

import "./services.css";

export default function Services() {
  return (
    <div>
      <div id="services" class="container-fluid text-center">
        <h2>SERVICES</h2>
        <h4>What we offer</h4>
        <br />
        <div
          class="row slideanim"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div class="col-sm-4 servicescol">
            <span class="glyphicon glyphicon-off logo-small"></span>
            <h4>POWER</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4 servicescol">
            <span class="glyphicon glyphicon-heart logo-small"></span>
            <h4>QUALITY</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4 servicescol">
            <span class="glyphicon glyphicon-lock logo-small"></span>
            <h4>JOB DONE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
        <br />
        <br />
        <div
          class="row slideanim"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div class="col-sm-4 servicescol">
            <span class="glyphicon glyphicon-leaf logo-small"></span>
            <h4>TRUST</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4 servicescol">
            <span class="glyphicon glyphicon-certificate logo-small"></span>
            <h4>CERTIFIED</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4 servicescol">
            <span class="glyphicon glyphicon-wrench logo-small"></span>
            <h4 style={{ color: "#303030" }}>HARD WORK</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
      </div>
    </div>
  );
}
