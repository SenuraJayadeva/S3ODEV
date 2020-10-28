import React from "react";

import Senura from "./img/senura.jpg";
import Oshen from "./img/oshen.jpg";
import Sandaru from "./img/sandaru.jpg";
import Sameera from "./img/sameera.jpg";

import "./ourteam.css";

export default function Ourteam() {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <h2 className="text-center">OUR TEAM</h2>
      <div className="row">
        <div className="col-md-3">
          <center>
            <div className="card socialicon">
              <img
                src={Senura}
                style={{ width: "200px", borderRadius: "50%" }}
              />
              <h4>
                Senura Jayadeva <br />
                Full Stack Developer
              </h4>
              <i class="fab fa-facebook-square socialicons"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fab fa-linkedin socialicons"></i>
            </div>
          </center>
        </div>

        <div className="col-md-3">
          <center>
            <div className="card socialicon">
              <img
                src={Oshen}
                style={{ width: "200px", borderRadius: "50%" }}
              />
              <h4>
                Oshen Dikkumbura <br />
                Full Stack Developer
              </h4>
              <i class="fab fa-facebook-square socialicons"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fab fa-linkedin socialicons"></i>
            </div>
          </center>
        </div>

        <div className="col-md-3">
          <center>
            <div className="card socialicon">
              <img
                src={Sandaru}
                style={{ width: "200px", borderRadius: "50%" }}
              />
              <h4>
                Sandaru Shashinda <br />
                Frontend Developer
              </h4>
              <i class="fab fa-facebook-square socialicons"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fab fa-linkedin socialicons"></i>
            </div>
          </center>
        </div>
        <div className="col-md-3">
          <center>
            <div className="card socialicon">
              <img
                src={Sameera}
                style={{ width: "200px", borderRadius: "50%" }}
              />
              <h4>
                Sameera Arachchige <br />
                UI / UX Engineer
              </h4>
              <i class="fab fa-facebook-square socialicons"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fab fa-linkedin socialicons"></i>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
