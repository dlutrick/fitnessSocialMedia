import React, { useEffect, useState } from "react";
import Axios from "axios";

// My components
import Page from "./Page";

function HomeGuest() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post("/register", {
        username,
        email,
        password,
      });
      console.log("User successfully created.");
    } catch (error) {
      console.log("There was an error.");
    }
  }

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username-register" className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                  id="username-register"
                  className="form-control"
                  type="text"
                  placeholder="Pick a username"
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email-register" className="text-muted mb-1">
                  <small>Email</small>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email-register"
                  className="form-control"
                  type="text"
                  placeholder="you@example.com"
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password-register" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
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
                Sign up for FitnessApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default HomeGuest;
