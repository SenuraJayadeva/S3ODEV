import React from "react";

export default function Contactsection() {
  return (
    <div
      style={{ marginTop: "5%" }}
      id="contact"
      class="container-fluid text-center bg-grey"
    >
      {/* <!-- Container (Contact Section) --> */}
      <div id="contact" class="container-fluid bg-grey">
        <h2 class="text-center">CONTACT</h2>
        <div class="row">
          <div class="col-sm-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p>
              <span class="glyphicon glyphicon-map-marker"></span> Maharagama ,
              Sri Lanka
            </p>
            <p>
              <span class="glyphicon glyphicon-phone"></span> +94 715787181 /
              +94 779142664
            </p>
            <p>
              <span class="glyphicon glyphicon-envelope"></span>{" "}
              s3odevelopers@gmail.com
            </p>
          </div>
          <div class="col-sm-7 slideanim">
            <div class="row">
              <div class="col-sm-6 form-group">
                <input
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
              <div class="col-sm-6 form-group">
                <input
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
            </div>
            <textarea
              class="form-control"
              id="comments"
              name="comments"
              placeholder="Comment"
              rows="5"
            ></textarea>
            <br />
            <div class="row">
              <div class="col-sm-12 form-group">
                <button
                  class="btn btn-primary pull-right"
                  type="submit"
                  stye={{ width: "10px" }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}