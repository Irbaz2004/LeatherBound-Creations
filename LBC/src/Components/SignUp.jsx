import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <h2 className="text-center m-4">LeatherBoundCreations</h2>

      <div className="signlogin d-flex justify-content-center">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div class="signup">
            <form>
              <label className="text-light my-4" for="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                className="signinp"
                type="text"
                name="txt"
                placeholder="User name"
                required
              />
              <input
                className="signinp"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="signinp"
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <input
                className="signinp"
                type="password"
                name="pswd"
                placeholder="Confirm Password"
                required
              />

              <button className="button my-2">Sign up</button>
            </form>
          </div>

          <div class="login">
            <form>
              <label className="text-dark" for="chk" aria-hidden="true">
                Login
              </label>
              <input
                className="signinp lo"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="signinp lo"
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <button className="button">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
