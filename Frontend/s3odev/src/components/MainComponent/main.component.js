import React from "react";

import AboutSection from "../AboutSection/aboutsection.component";
import Ourvalue from "../OurValue/ourvalue.component";
import Services from "../ServicesComponent/services.component";
import Ourproducts from "../OurProducts/ourproducts.component";
import Ourteam from "../OurTeam/ourteam.component";
import Contactsection from "../ContactSection/contactsection.component";
import Footer from "../Footer/footer.component";

export default function MainComponent() {
  return (
    <div>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#myPage">
              S<sub>3</sub>ODev
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#portfolio">PRODUCTS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="jumbotron text-center">
        <h1>
          {" "}
          S<sub>3</sub>ODev Solutions
        </h1>
        <p>It is not enough for code to work</p>
      </div>

      <div>
        <AboutSection />
      </div>
      <div>
        <Ourvalue />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Ourproducts />
      </div>
      <div>
        <Ourteam />
      </div>
      <div>
        <Contactsection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
