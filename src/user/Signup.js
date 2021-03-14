import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "./../core/Base";
import { signup } from "./../auth/helper/index";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleInputChange = (input) => (event) => {
    setValues({
      ...values,
      error: false,
      [input]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({
      name,
      email,
      password,
    })
      .then((data) => {
        console.log(data);
        if (data && data.email && data.email === email) {
          setValues({
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        } else {
          setValues({
            ...values,
            success: false,
            error: "Error in Signup. Check Credentials.",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div className="alert alert-success">
            New Account Created Successfully. Please Login Now.
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div className="alert alert-danger">
            Error in Signing Up User. Check Credentials.
          </div>
        </div>
      </div>
    );
  };

  const signupForm = () => {
    return (
      <div className="row mb-5">
        <div className="col-md-6 offset-sm-3 text-left mb-2">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                type="text"
                required
                className="form-control"
                value={name}
                onChange={handleInputChange("name")}
              />
            </div>
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
              Signup Now
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Welcome, Signup Here">
      {success && successMessage()}
      {error && errorMessage()}
      {signupForm()}
    </Base>
  );
};

export default Signup;
