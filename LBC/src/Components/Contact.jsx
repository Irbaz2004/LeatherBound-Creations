import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function B() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value;
    const email = form.current.email_Id.value;
    const phone = form.current.phone_input.value;

    if (!name || !email || !phone) {
      alert("Please complete all the details.");
      return;
    }

    emailjs
      .sendForm("service_lcqv959", "template_p0qfhrg", form.current, {
        publicKey: "S8K3--flBHMyhLpC9",
      })
      .then(
        () => {
          alert("SUCCESSFULLY SENT!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 b-height">
            <div className="row b-wrapper">
              <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 b-min-height rounded-end-5">
                <div className="b-logo swift_left">
                  <a
                    href="https://www.youtube.com/channel/UCg-bMxpjvoQVxVs69iyqGuQ"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      src="src/img/logo black.png"
                      alt="Programming Guide Logo"
                      title="Programming Guide Logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="b-title text-center">
                  <h1 className="user_title">
                    Welcome to LeatherBoundCreations
                  </h1>
                  <p className="user_subTitle">
                    To keep Connected with us please contact with your personal
                    info.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                <div className="b-logo swift_right">
                  <a
                    href="https://www.youtube.com/channel/UCg-bMxpjvoQVxVs69iyqGuQ"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      src="images/Logo.png"
                      alt="Programming Guide Logo"
                      title="Programming Guide Logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="b-form text-center">
                  <div className="b-form-title">
                    <h1 className="form_title">Contact Together</h1>
                    <p>
                      <span>
                        <a
                          href="https://www.facebook.com/help.programmingguide"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://twitter.com/HelpProgrammin0"
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://www.instagram.com/help.programmingguide"
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </span>
                    </p>
                    <p className="b-subtext">
                      or use your email for Meet Together
                    </p>
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group username">
                      <input
                        className="form-control con"
                        type="text"
                        name="from_name"
                        placeholder="Name"
                      />
                      <i className="fas fa-user b-font"></i>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control con"
                        type="email"
                        name="email_Id"
                        placeholder="Email"
                      />
                      <i className="fas fa-envelope b-font"></i>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control con"
                        type="number"
                        name="phone_input"
                        placeholder="Mobile Number"
                      />
                      <i className="fas fa-unlock-alt b-font"></i>
                    </div>
                    <div className="form-group">
                      <span className="b-forgot">Forgot your password?</span>
                    </div>
                    <button type="submit" value="Send" className="sign_up">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
