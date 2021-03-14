import React, { useState } from "react";
import { signin, autheticate, isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, success, loading, didRedirect } = values;

  const handleInputChange = (input) => (event) => {
    setValues({
      ...values,
      error: false,
      [input]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({
      email,
      password,
    })
      .then((data) => {
        console.log(data);
        if (data && data.token) {
          let sessionToken = data.token;
          autheticate(sessionToken, () => {
            console.log("TOKEN ADDED TO LOCAL STORAGE");
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        } else {
          setValues({
            ...values,
            error: true,
            loading: false,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div className="alert alert-danger">
            Login Error. Check Credentials
          </div>
        </div>
      </div>
    );
  };

  const signinForm = () => {
    return (
      <div className="row mb-5">
        <div className="col-md-6 offset-sm-3 text-left mb-2">
          <form>
            <div className="form-group">
              <label className="text-light">E-Mail</label>
              <input
                type="text"
                required
                className="form-control"
                value={email}
                onChange={handleInputChange("email")}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                type="password"
                required
                className="form-control"
                value={password}
                onChange={handleInputChange("password")}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-block btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  return (
    <Base title="User Login">
      <div className="container" style={{ minHeight: "36vh" }}>
        {error && errorMessage()}
        {signinForm()}
        {performRedirect()}
      </div>
    </Base>
  );
};

export default Signin;
