import React from "react";
import Base from "../core/Base";

const UserDashboard = () => {
  return (
    <Base title="Dashboard">
      <div className="container" style={{ minHeight: "36vh" }}>
        <div className="text-white text-center">
          <h1>Welcome to User Dashboard</h1>
        </div>
      </div>
    </Base>
  );
};

export default UserDashboard;
