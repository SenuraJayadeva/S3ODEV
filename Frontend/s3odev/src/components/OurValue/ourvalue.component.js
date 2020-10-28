import React from "react";

export default function Ourvalue() {
  return (
    <div>
      <div class="container-fluid bg-grey">
        <div class="row">
          <div class="col-sm-4">
            <span
              class="glyphicon glyphicon-globe logo slideanim"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos="zoom-out-right"
            ></span>
          </div>
          <div class="col-sm-8">
            <h2>Our Values</h2>
            <br />
            <h4>
              <strong>MISSION:</strong> 
              Provide low-cost premium solutions for businesses to build their online presence and to improve their workflow.
            </h4>
            <br />
            <p>
              <strong>VISION:</strong> Connect everyone to solutions that increase productivity and efficiency, 
              through innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
