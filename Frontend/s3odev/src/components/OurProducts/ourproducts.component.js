import React from "react";

export default function Ourproducts() {
  return (
    <div>
      <div id="portfolio" class="container-fluid text-center bg-grey">
        <h2>OUR PRODUCTS</h2>
        <br />
        <h4>What we have created</h4>
        <div class="row text-center slideanim">
          <div
            class="col-sm-4"
            style={{ padding: "10px", borderRadius: "20px" }}
          >
            <div class="thumbnail" style={{ padding: "10px" }}>
              <img
                src="https://jumbotron-production-f.squarecdn.com/assets/2194c707b541ede89e40.jpg"
                alt="Paris"
                style={{ width: "300px", height: "300px" }}
              />
              <p>
                <strong>Web Applications</strong>
              </p>
            </div>
          </div>
          <div
            class="col-sm-4"
            style={{ padding: "10px", borderRadius: "20px" }}
          >
            <div class="thumbnail" style={{ padding: "10px" }}>
              <img
                src="https://www.gurutva.org/wp-content/uploads/2019/12/Top-Mobile-Application-Development-Company.webp"
                alt="New York"
                style={{ width: "300px", height: "300px" }}
              />
              <p>
                <strong>Mobile Appications</strong>
              </p>
            </div>
          </div>
          <div
            class="col-sm-4"
            style={{ padding: "10px", borderRadius: "20px" }}
          >
            <div class="thumbnail" style={{ padding: "10px" }}>
              <img
                src="https://lh3.googleusercontent.com/proxy/QBgusZ3Yhwpem4wD491xQf62Gd1lEKLJw76blkXCjtlXwtvZrwRb-6dYxFjmq2IQGg_tQ9SQDOtuxGEwsyALuqs63VumebkyhdAn48j5Vxv6GWdbs-Ccsj1HTEjiF7pb"
                alt="San Francisco"
                style={{ width: "300px", height: "300px" }}
              />
              <p>
                <strong>Desktop Applications</strong>
              </p>
            </div>
          </div>
        </div>
        <br />

        <h2>What our customers say</h2>
        <div
          id="myCarousel"
          class="carousel slide text-center"
          data-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          {/* <!-- Wrapper for slides --> */}
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <h4>
                "This company is the best. I am so happy with the result!"
                <br />
                <span>Michael Roe, Vice President, Comment Box</span>
              </h4>
            </div>
            <div class="item">
              <h4>
                "One word... WOW!!"
                <br />
                <span>John Doe, Salesman, Rep Inc</span>
              </h4>
            </div>
            <div class="item">
              <h4>
                "Could I... BE any more happy with this company?"
                <br />
                <span>Chandler Bing, Actor, FriendsAlot</span>
              </h4>
            </div>
          </div>

          {/* <!-- Left and right controls --> */}
          <a
            class="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              class="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              class="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
