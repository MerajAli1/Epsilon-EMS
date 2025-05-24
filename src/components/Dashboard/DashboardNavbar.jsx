import React from "react";

const DashboardNavbar = ({ onAddUser }) => {
  return (
    <nav
    //   className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Title */}
      <h1 className="display-5">Epsilon EMS</h1>

      {/* Icons and Add User Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Icons */}
        <i className="bi bi-cash-coin" style={{ fontSize: "1.5rem" }}></i>
        <i
          className="bi bi-file-earmark-arrow-up"
          style={{ fontSize: "1.5rem" }}
        ></i>

        {/* Add User Button */}
        <button
          onClick={onAddUser}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Add User
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;