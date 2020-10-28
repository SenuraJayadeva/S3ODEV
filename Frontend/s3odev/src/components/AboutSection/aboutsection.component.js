import React from "react";

import Banner1 from "./img/banner1.png";

export default function AboutSection() {
  return (
    <div>
      <div id="about" class="container-fluid">
        <div class="row">
          <div
            class="col-sm-8"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2>About Company</h2>
            <br />
            <h4>
            We are a Tech-Startup based in Sri Lanka comprising of young Tech-Enthusiasts with amazing skills. 
            Our motivation and passion is driven at the sight of our satisfied customers, and on how much of an impact we can make to make this world a better place,
             as we are the generation that is just stepping in to the drivers' seat.

            
            </h4>
            <p>
            We custom-tailor solutions to improve the productivity and efficiency of your business so that you can give both your clients and employees a better experience.

We can help you build an online presence for your business with a website, or even help you reach more customers with a mobile application,
 or even help you to make your business process more efficient with our solutions.
            </p>
            <br />
            <button class="btn btn-primary btn-lg">Get in Touch</button>
          </div>
          <div
            class="col-sm-4"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={Banner1} style={{ width: "110%", marginTop: "15%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
