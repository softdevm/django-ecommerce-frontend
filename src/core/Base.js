import React from "react";

const Base = ({
  title = "Prestige Wear",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>Got any Questions ? Reach me out on Instagram.</h4>
          <button className="btn btn-warning btn-lg">Contact Us</button>
          <div className="container">
            <span className="text-white">
              React Django Ecommerce Application
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;
