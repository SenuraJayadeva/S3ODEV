import React from "react";

import Banner1 from "./img/banner1.png";

export default function AboutSection() {
  return (
    <div>
      <div id="about" class="container-fluid">
        <div class="row">
          <div class="col-sm-8">
            <h2>About Company</h2>
            <br />
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <br />
            <button class="btn btn-primary btn-lg">Get in Touch</button>
          </div>
          <div class="col-sm-4">
            <img src={Banner1} style={{ width: "110%", marginTop: "15%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
