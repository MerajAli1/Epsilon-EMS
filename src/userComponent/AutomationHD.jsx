import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Header from "../userComponent/Navbar";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define global variables for Firebase (will be provided by the Canvas environment)
// declare const __app_id: string | undefined;
// declare const __firebase_config: string | undefined;
// declare const __initial_auth_token: string | undefined;

function AutomationHD() {
  const [appId, setAppId] = useState("");
  //   const [firebaseConfig, setFirebaseConfig] = useState<any>(null);
  //   const [userId, setUserId] = useState<string | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // State for the room data - UPDATED for device automation
  const [bedroomData, setBedroomData] = useState({
    status: "Connected to Automation System",
    totalDevices: 6,
    poweredOn: 3,
    poweredOff: 3,
    lastSeen: "May 24, 2025 11:35 AM",
    devices: [
      { id: "light1", name: "Light 1", icon: "fas fa-lightbulb", on: true },
      { id: "ac", name: "AC", icon: "fas fa-fan", on: false }, // Using fan for AC, as no direct AC icon in FA
      { id: "fan", name: "Fan", icon: "fas fa-fan", on: true },
      { id: "light2", name: "Light 2", icon: "fas fa-lightbulb", on: false },
      { id: "light3", name: "Light 3", icon: "fas fa-lightbulb", on: false },
      { id: "television", name: "Television", icon: "fas fa-tv", on: true },
    ],
  });
  const [livingRoomData, setLivingRoomData] = useState({
    status: "Disconnected from Automation System",
    totalDevices: 10,
    poweredOn: 6,
    poweredOff: 4,
    lastSeen: "May 24, 2025 11:35 AM",
  });

  // Chart data (removed as per new images, but keeping the variables if needed later)
  const chartData = {
    labels: ["Living Room", "Bedroom", "Kitchen"],
    datasets: [
      {
        data: [50, 30, 19], // Percentages from the image
        backgroundColor: ["#007bff", "#28a745", "#ffc107"], // Bootstrap primary, success, warning colors
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%", // Makes it a donut chart
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            family: "Inter, sans-serif",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += context.parsed + "%";
            }
            return label;
          },
        },
      },
    },
  };

  // Function to toggle device state
  const toggleDevice = (deviceId) => {
    setBedroomData((prevData) => ({
      ...prevData,
      devices: prevData.devices.map((device) =>
        device.id === deviceId ? { ...device, on: !device.on } : device
      ),
    }));
  };

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div
          className="container"
          style={{
            fontFamily: "Inter, sans-serif",
            minHeight: "100vh",
            paddingBottom: "20px",
          }}
        >
          {/* Header */}

          <div className="container-fluid px-4">
            {/* User Info */}
            <div
              className="d-flex justify-content-between align-items-center mb-4 text-muted"
              style={{ fontSize: "0.9rem" }}
            >
              <span>May 24, 2025 11:35 AM</span>
              <span>Logged in as: zayanikhlas786@gmail.com</span>
            </div>

            {/* Room Monitoring Section - Bed Room (Updated for devices) */}
            <div
              className="card shadow-sm mb-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="card-title fw-bold"
                    style={{ color: "#343a40" }}
                  >
                    Bed Room
                  </h5>
                  <span className="text-success fw-bold d-flex align-items-center">
                    <i
                      className="fas fa-circle me-2"
                      style={{ fontSize: "0.7rem" }}
                    ></i>{" "}
                    {bedroomData.status}
                  </span>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-md-4">
                    <div
                      className="card h-100 p-3 text-center"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#f0f2f5",
                      }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Total Devices
                      </p>
                      <h3 className="fw-bold" style={{ color: "#343a40" }}>
                        {bedroomData.totalDevices}
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card h-100 p-3 text-center"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#f0f2f5",
                      }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Powered On
                      </p>
                      <h3
                        className="fw-bold text-success"
                        style={{ color: "#28a745" }}
                      >
                        {bedroomData.poweredOn}
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card h-100 p-3 text-center"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#f0f2f5",
                      }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Powered Off
                      </p>
                      <h3
                        className="fw-bold text-danger"
                        style={{ color: "#dc3545" }}
                      >
                        {bedroomData.poweredOff}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary"
                    style={{ borderRadius: "8px", padding: "8px 20px" }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Bed Room Device Control Section */}
            <div
              className="card shadow-sm mb-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <h5
                  className="card-title fw-bold mb-3"
                  style={{ color: "#343a40" }}
                >
                  Bed Room Devices
                </h5>
                {/* Add summary above device grid */}
                <div className="d-flex justify-content-start align-items-center mb-3" style={{ gap: '2rem' }}>
                  <span className="fw-bold" style={{ fontSize: '1.1rem' }}>
                    Total Devices: {bedroomData.devices.length}
                  </span>
                  <span className="fw-bold" style={{ fontSize: '1.1rem' }}>
                    In Human Detection: {bedroomData.devices.filter(d => d.humanDetection).length}
                  </span>
                </div>
                <div className="row g-3">
                  {bedroomData.devices.map((device) => (
                    <div
                      key={device.id}
                      className="col-6 col-sm-4 col-md-3 col-lg-2"
                    >
                      <button
                        className="btn w-100 d-flex flex-column align-items-center justify-content-center p-3 position-relative"
                        style={{
                          borderRadius: "10px",
                          height: "100px",
                          backgroundColor: device.on ? "#007bff" : "#f0f2f5",
                          color: device.on ? "#ffffff" : "#343a40",
                          border: device.on ? "none" : "1px solid #ced4da",
                          boxShadow: device.on
                            ? "0 4px 8px rgba(0, 123, 255, 0.2)"
                            : "none",
                          transition: "all 0.2s ease-in-out",
                          position: 'relative',
                        }}
                        onClick={() => toggleDevice(device.id)}
                      >
                        <div className="d-flex align-items-center position-absolute" style={{ top: 8, left: 8, zIndex: 2 }} onClick={e => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            className="form-check-input me-1"
                            checked={!!device.humanDetection}
                            onChange={() => {
                              setBedroomData((prevData) => ({
                                ...prevData,
                                devices: prevData.devices.map((d) =>
                                  d.id === device.id ? { ...d, humanDetection: !d.humanDetection } : d
                                ),
                              }));
                            }}
                            id={`hd-${device.id}`}
                            style={{ cursor: 'pointer' }}
                          />
                          <label htmlFor={`hd-${device.id}`} style={{ fontSize: '0.7rem', cursor: 'pointer', marginBottom: 0, color: device.on ? '#fff' : '#343a40' }}>
                            Human Detection
                          </label>
                        </div>
                        <i
                          className={`${device.icon} mb-2`}
                          style={{ fontSize: "1.8rem", marginTop: '18px' }}
                        ></i>
                        <span
                          className="fw-bold"
                          style={{ fontSize: "0.9rem" }}
                        >
                          {device.name}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <button
                    className="btn btn-primary"
                    style={{ borderRadius: "8px", padding: "8px 20px" }}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>

            {/* Room Monitoring Section - Living Room (Updated for devices) */}
            <div
              className="card shadow-sm mb-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="card-title fw-bold"
                    style={{ color: "#343a40" }}
                  >
                    Living Room
                  </h5>
                  <span className="text-danger fw-bold d-flex align-items-center">
                    <i
                      className="fas fa-circle me-2"
                      style={{ fontSize: "0.7rem" }}
                    ></i>{" "}
                    {livingRoomData.status}
                  </span>
                </div>
                <div
                  className="text-muted mb-3"
                  style={{ fontSize: "0.85rem", textAlign: "right" }}
                >
                  Last seen {livingRoomData.lastSeen}
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-md-4">
                    <div
                      className="card h-100 p-3 text-center"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#f0f2f5",
                      }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Total Devices
                      </p>
                      <h3 className="fw-bold" style={{ color: "#343a40" }}>
                        {livingRoomData.totalDevices}
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card h-100 p-3 text-center"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#f0f2f5",
                      }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Powered On
                      </p>
                      <h3
                        className="fw-bold text-success"
                        style={{ color: "#28a745" }}
                      >
                        {livingRoomData.poweredOn}
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card h-100 p-3 text-center"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#f0f2f5",
                      }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Powered Off
                      </p>
                      <h3
                        className="fw-bold text-danger"
                        style={{ color: "#dc3545" }}
                      >
                        {livingRoomData.poweredOff}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary"
                    style={{ borderRadius: "8px", padding: "8px 20px" }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutomationHD;
