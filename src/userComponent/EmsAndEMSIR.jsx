import React, { useState } from "react";
import EMSIR from "./EMSIR";
import EMSUser from "./EMSUser";
import Header from "./Navbar";
import Automtion from "./Automation";

const EmsAndEMSIR = () => {
  // State for mobile view tab switching
  const [activeTab, setActiveTab] = useState("dashboard"); // 'dashboard' or 'rooms'

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <div className="container-fluid py-4">
          {/* Status indicator, responsive design with mobile tab switcher */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <span className="text-success me-2">●</span>
              <span>Connected to Monitoring System</span>
            </div>

            {/* Mobile tabs - only visible on small screens */}
            <div className="d-md-none">
              <div className="btn-group">
                <button
                  className={`btn ${
                    activeTab === "dashboard"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  Dashboard
                </button>
                <button
                  className={`btn ${
                    activeTab === "rooms"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("rooms")}
                >
                  Rooms
                </button>
              </div>
            </div>
          </div>

          <div className="mb-2">
            Logged in as:{" "}
            <span className="text-primary">zayanikhlas786@gmail.com</span>
          </div>
          <div className="text-muted mb-4">May 24, 2025 11:35 AM</div>

          {/* Main content area - Responsive grid layout */}
          <div className="row">
            {/* EMSUser component - Left panel on desktop, full width on mobile when dashboard tab is active */}
            <div
              className={`col-md-8 mb-4 ${
                activeTab === "rooms" ? "d-none d-md-block" : ""
              }`}
            >
              <div className="card border-0 shadow-sm h-100"> {/* Added h-100 */}
                <div className="card-body p-0">
                  <EMSUser />
                </div>
              </div>
            </div>

            {/* EMSIR component - Right panel on desktop, full width on mobile when rooms tab is active */}
            <div
              className={`col-md-4 mb-4 ${
                activeTab === "dashboard" ? "d-none d-md-block" : ""
              }`}
            >
              <div className="card border-0 shadow-sm h-100"> {/* Added h-100 */}
                <div className="card-body">
                  <h5 className="card-title mb-4">Rooms</h5>
                  <EMSIR />
                </div>
              </div>
            </div>
          </div>

          {/* Automation component - Full width below EMSUser and EMSIR */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3">Home Automation</h5>
                  <Automtion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmsAndEMSIR;
