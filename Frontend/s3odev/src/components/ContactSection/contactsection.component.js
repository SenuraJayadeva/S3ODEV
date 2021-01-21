import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

export default function Contactsection() {
  init("user_17nXRu6uDfNlxC194GMjM");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_isciv2f",
        "template_gwrz50y",
        e.target,
        "user_17nXRu6uDfNlxC194GMjM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div
      style={{ marginTop: "5%" }}
      id="contact"
      class="container-fluid text-center bg-grey"
    >
      {/* <!-- Container (Contact Section) --> */}
      <div>
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
            <form noValidate autoComplete="off" onSubmit={sendEmail}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                size="medium"
                variant="outlined"
                nam="name"
                style={{ width: "80%", fontSize: "15px" }}
              />

              <TextField
                id="outlined-basic"
                label="Email"
                size="medium"
                name="email"
                variant="outlined"
                style={{ width: "80%", margin: "15px", fontSize: "15px" }}
              />

              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                size="medium"
                name="message"
                rows={4}
                variant="outlined"
                style={{ width: "80%", fontSize: "15px" }}
              />

              <Button
                variant="outlined"
                type="submit"
                value="send message"
                color="primary"
                style={{
                  margin: "15px",
                  width: "80%",
                  height: "10%",
                  fontSize: "15px",
                }}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
