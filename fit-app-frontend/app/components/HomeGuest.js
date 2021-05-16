import React, { useEffect } from "react";

// My components
import Page from "./Page";

function HomeGuest() {
  return (
    <Page title="Sign Up" wide={true}>
      <div className="container py-md-5">
        <div className="row align-items-center">
          <div className="col-lg-7 py-3 py-md-5">
            <h1 className="display-3">Welcome to our exclusive club!</h1>
            <p className="lead text-muted">
              Are you sick of loving food but come to find out your pants don't
              agree? Are you a lonely person? Have you been to AA? Well, if
              you've answer yes to any of these questions, do we have the
              perfect group for you!
            </p>
            <h2>Join our fat club!</h2>
          </div>
          <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form action="#" method="POST" id="registration-form">
              <div className="form-group">
                <label for="username-register" className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input
                  name="username"
                  id="username-register"
                  className="form-control"
                  type="text"
                  placeholder="Pick a username"
                  autocomplete="off"
                />
              </div>

              <div className="form-group">
                <label for="email-register" className="text-muted mb-1">
                  <small>Email</small>
                </label>
                <input
                  name="email"
                  id="email-register"
                  className="form-control"
                  type="text"
                  placeholder="you@example.com"
                  autocomplete="off"
                />
              </div>

              <div className="form-group">
                <label for="password-register" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input
                  name="password"
                  id="password-register"
                  className="form-control"
                  type="password"
                  placeholder="Create a password"
                />
              </div>

              <button
                type="submit"
                className="py-3 mt-4 btn btn-lg btn-success btn-block"
              >
                Sign up for OurApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default HomeGuest;
