import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Modal from "react-modal";
import Header from "../Dashboard/DashboardNavbar";

const users = [
  {
    id: "User0001",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Resedential(3KV)",
    services: "EMS + Automation",
    status: "Active",
  },
  {
    id: "User0002",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Commercial(3KV)",
    services: "EMS",
    status: "Active",
  },
  {
    id: "User0003",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Resedential(3KV)",
    services: "EMS (IR)",
    status: "Stopped",
  },
  {
    id: "User0004",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Resedential(3KV)",
    services: "EMS + Automation",
    status: "Active",
  },
  {
    id: "User0005",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Resedential(3KV)",
    services: "EMS + Automation (HD)",
    status: "Active",
  },
  {
    id: "User0006",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Resedential(3KV)",
    services: "EMS + Automation",
    status: "Stopped",
  },
  {
    id: "User0007",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Resedential(3KV)",
    services: "EMS + Automation",
    status: "Active",
  },
  {
    id: "User0008",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Resedential(3KV)",
    services: "EMS + Automation",
    status: "Active",
  },
  {
    id: "User0009",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Resedential(3KV)",
    services: "EMS + Automation",
    status: "Active",
  },
  {
    id: "User0010",
    name: "Zayan Ikhlas",
    email: "zayanikhlas786@gmail.com",
    type: "Resedential(3KV)",
    services: "EMS + Automation",
    status: "Stopped",
  },
];

// Added mobile responsiveness to the Dashboard comp
// onent
export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState("personalDetails");
  const [showRoomField, setShowRoomField] = useState(false);
  const [devices, setDevices] = useState([
    "Light 1",
    "AC 1.5",
    "Fan",
    "Other Item",
  ]);

  const [isAddApplianceModalOpen, setIsAddApplianceModalOpen] = useState(false);
  const [applianceName, setApplianceName] = useState("");
  const [applianceIcon, setApplianceIcon] = useState("bi bi-pc-display");
  const [selectedService, setSelectedService] = useState("EMS");
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");

  const [automationRooms, setAutomationRooms] = useState([]);
  const [currentRoomName, setCurrentRoomName] = useState("");
  const [currentDevices, setCurrentDevices] = useState([]);
  const [isAddDeviceModalOpen, setIsAddDeviceModalOpen] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [deviceIcon, setDeviceIcon] = useState("bi bi-lightbulb");

  const [automationHDRooms, setAutomationHDRooms] = useState([]);
  const [currentHDRoomName, setCurrentHDRoomName] = useState("");
  const [currentHDDevices, setCurrentHDDevices] = useState([]);
  const [isAddHDDeviceModalOpen, setIsAddHDDeviceModalOpen] = useState(false);
  const [hdDeviceName, setHDDeviceName] = useState("");
  const [hdDeviceIcon, setHDDeviceIcon] = useState("bi bi-lightbulb");

  const [emsAutomationRooms, setEmsAutomationRooms] = useState([]);
  const [currentEmsAutomationRoomName, setCurrentEmsAutomationRoomName] =
    useState("");
  const [currentEmsAutomationDevices, setCurrentEmsAutomationDevices] =
    useState([]);
  const [
    isAddEmsAutomationDeviceModalOpen,
    setIsAddEmsAutomationDeviceModalOpen,
  ] = useState(false);
  const [emsAutomationDeviceName, setEmsAutomationDeviceName] = useState("");
  const [emsAutomationDeviceIcon, setEmsAutomationDeviceIcon] =
    useState("bi bi-lightbulb");
  const [emsAutomationMonitoring, setEmsAutomationMonitoring] = useState(false);

  const [emsIRAutomationRooms, setEmsIRAutomationRooms] = useState([]);
  const [currentEmsIRAutomationRoomName, setCurrentEmsIRAutomationRoomName] =
    useState("");
  const [currentEmsIRAutomationDevices, setCurrentEmsIRAutomationDevices] =
    useState([]);
  const [
    isAddEmsIRAutomationDeviceModalOpen,
    setIsAddEmsIRAutomationDeviceModalOpen,
  ] = useState(false);
  const [emsIRAutomationDeviceName, setEmsIRAutomationDeviceName] =
    useState("");
  const [emsIRAutomationDeviceIcon, setEmsIRAutomationDeviceIcon] =
    useState("bi bi-lightbulb");
  const [emsIRAutomationMonitoring, setEmsIRAutomationMonitoring] =
    useState(false);

  const [emsEmsIRAutomationRooms, setEmsEmsIRAutomationRooms] = useState([]);
  const [
    currentEmsEmsIRAutomationRoomName,
    setCurrentEmsEmsIRAutomationRoomName,
  ] = useState("");
  const [
    currentEmsEmsIRAutomationDevices,
    setCurrentEmsEmsIRAutomationDevices,
  ] = useState([]);
  const [
    isAddEmsEmsIRAutomationDeviceModalOpen,
    setIsAddEmsEmsIRAutomationDeviceModalOpen,
  ] = useState(false);
  const [emsEmsIRAutomationDeviceName, setEmsEmsIRAutomationDeviceName] =
    useState("");
  const [emsEmsIRAutomationDeviceIcon, setEmsEmsIRAutomationDeviceIcon] =
    useState("bi bi-lightbulb");
  const [emsEmsIRAutomationMonitoring, setEmsEmsIRAutomationMonitoring] =
    useState(false);

  const [emsEmsIRRooms, setEmsEmsIRRooms] = useState([]);
  const [currentEmsEmsIRRoomName, setCurrentEmsEmsIRRoomName] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStep("personalDetails"); // Reset to the first step when closing
  };
  const openAddApplianceModal = () => setIsAddApplianceModalOpen(true);
  const closeAddApplianceModal = () => setIsAddApplianceModalOpen(false);
  const openAddDeviceModal = () => setIsAddDeviceModalOpen(true);
  const closeAddDeviceModal = () => {
    setIsAddDeviceModalOpen(false);
    setDeviceName("");
    setDeviceIcon("bi bi-lightbulb");
  };

  // Function to handle the next step in the modal
  const handleNext = () => {
    setStep("servicesDetails");
    setShowRoomField(false); // Ensure Room Name field is hidden initially
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    setShowRoomField(true); // Show Room Name field
  };

  const handleAddRoom = () => {
    // Show device buttons when Add Room is clicked
    setDevices(["Light 1", "AC 1.5", "Fan", "Other Item"]);
  };

  const handleAddRoomEMSIR = () => {
    if (roomName.trim() !== "") {
      setRooms([...rooms, { name: roomName }]);
      setRoomName("");
    }
  };

  const handleAddDevice = () => {
    if (deviceName.trim() !== "") {
      setCurrentDevices([
        ...currentDevices,
        { name: deviceName, icon: deviceIcon },
      ]);
      setDeviceName("");
      setDeviceIcon("bi bi-lightbulb");
      setIsAddDeviceModalOpen(false);
    }
  };

  const handleAddAutomationRoom = () => {
    if (currentRoomName.trim() !== "" && currentDevices.length > 0) {
      setAutomationRooms([
        ...automationRooms,
        { roomName: currentRoomName, devices: currentDevices },
      ]);
      setCurrentRoomName("");
      setCurrentDevices([]);
    }
  };
  console.log("Automation Rooms:", automationRooms);
  console.log("EMS(IR) Rooms:", rooms);

  // Automation(HD) handlers
  const openAddHDDeviceModal = () => setIsAddHDDeviceModalOpen(true);
  const closeAddHDDeviceModal = () => {
    setIsAddHDDeviceModalOpen(false);
    setHDDeviceName("");
    setHDDeviceIcon("bi bi-lightbulb");
  };
  const handleAddHDDevice = () => {
    if (hdDeviceName.trim() !== "") {
      setCurrentHDDevices([
        ...currentHDDevices,
        { name: hdDeviceName, icon: hdDeviceIcon },
      ]);
      setHDDeviceName("");
      setHDDeviceIcon("bi bi-lightbulb");
      setIsAddHDDeviceModalOpen(false);
    }
  };
  const handleAddAutomationHDRoom = () => {
    if (currentHDRoomName.trim() !== "" && currentHDDevices.length > 0) {
      setAutomationHDRooms([
        ...automationHDRooms,
        { roomName: currentHDRoomName, devices: currentHDDevices },
      ]);
      setCurrentHDRoomName("");
      setCurrentHDDevices([]);
    }
  };

  // EMS+Automation handlers
  const openAddEmsAutomationDeviceModal = () =>
    setIsAddEmsAutomationDeviceModalOpen(true);
  const closeAddEmsAutomationDeviceModal = () => {
    setIsAddEmsAutomationDeviceModalOpen(false);
    setEmsAutomationDeviceName("");
    setEmsAutomationDeviceIcon("bi bi-lightbulb");
  };
  const handleAddEmsAutomationDevice = () => {
    if (emsAutomationDeviceName.trim() !== "") {
      setCurrentEmsAutomationDevices([
        ...currentEmsAutomationDevices,
        { name: emsAutomationDeviceName, icon: emsAutomationDeviceIcon },
      ]);
      setEmsAutomationDeviceName("");
      setEmsAutomationDeviceIcon("bi bi-lightbulb");
      setIsAddEmsAutomationDeviceModalOpen(false);
    }
  };
  const handleAddEmsAutomationRoom = () => {
    if (
      currentEmsAutomationRoomName.trim() !== "" &&
      currentEmsAutomationDevices.length > 0
    ) {
      setEmsAutomationRooms([
        ...emsAutomationRooms,
        {
          roomName: currentEmsAutomationRoomName,
          devices: currentEmsAutomationDevices,
          monitoring: emsAutomationMonitoring,
        },
      ]);
      setCurrentEmsAutomationRoomName("");
      setCurrentEmsAutomationDevices([]);
      setEmsAutomationMonitoring(false);
    }
  };

  // EMS(IR)+Automation handlers
  const openAddEmsIRAutomationDeviceModal = () =>
    setIsAddEmsIRAutomationDeviceModalOpen(true);
  const closeAddEmsIRAutomationDeviceModal = () => {
    setIsAddEmsIRAutomationDeviceModalOpen(false);
    setEmsIRAutomationDeviceName("");
    setEmsIRAutomationDeviceIcon("bi bi-lightbulb");
  };
  const handleAddEmsIRAutomationDevice = () => {
    if (emsIRAutomationDeviceName.trim() !== "") {
      setCurrentEmsIRAutomationDevices([
        ...currentEmsIRAutomationDevices,
        { name: emsIRAutomationDeviceName, icon: emsIRAutomationDeviceIcon },
      ]);
      setEmsIRAutomationDeviceName("");
      setEmsIRAutomationDeviceIcon("bi bi-lightbulb");
      setIsAddEmsIRAutomationDeviceModalOpen(false);
    }
  };
  const handleAddEmsIRAutomationRoom = () => {
    if (
      currentEmsIRAutomationRoomName.trim() !== "" &&
      currentEmsIRAutomationDevices.length > 0
    ) {
      setEmsIRAutomationRooms([
        ...emsIRAutomationRooms,
        {
          roomName: currentEmsIRAutomationRoomName,
          devices: currentEmsIRAutomationDevices,
          monitoring: emsIRAutomationMonitoring,
        },
      ]);
      setCurrentEmsIRAutomationRoomName("");
      setCurrentEmsIRAutomationDevices([]);
      setEmsIRAutomationMonitoring(false);
    }
  };

  // EMS+EMS(IR)+Automation handlers
  const openAddEmsEmsIRAutomationDeviceModal = () =>
    setIsAddEmsEmsIRAutomationDeviceModalOpen(true);
  const closeAddEmsEmsIRAutomationDeviceModal = () => {
    setIsAddEmsEmsIRAutomationDeviceModalOpen(false);
    setEmsEmsIRAutomationDeviceName("");
    setEmsEmsIRAutomationDeviceIcon("bi bi-lightbulb");
  };
  const handleAddEmsEmsIRAutomationDevice = () => {
    if (emsEmsIRAutomationDeviceName.trim() !== "") {
      setCurrentEmsEmsIRAutomationDevices([
        ...currentEmsEmsIRAutomationDevices,
        {
          name: emsEmsIRAutomationDeviceName,
          icon: emsEmsIRAutomationDeviceIcon,
        },
      ]);
      setEmsEmsIRAutomationDeviceName("");
      setEmsEmsIRAutomationDeviceIcon("bi bi-lightbulb");
      setIsAddEmsEmsIRAutomationDeviceModalOpen(false);
    }
  };
  const handleAddEmsEmsIRAutomationRoom = () => {
    if (
      currentEmsEmsIRAutomationRoomName.trim() !== "" &&
      currentEmsEmsIRAutomationDevices.length > 0
    ) {
      setEmsEmsIRAutomationRooms([
        ...emsEmsIRAutomationRooms,
        {
          roomName: currentEmsEmsIRAutomationRoomName,
          devices: currentEmsEmsIRAutomationDevices,
          monitoring: emsEmsIRAutomationMonitoring,
        },
      ]);
      setCurrentEmsEmsIRAutomationRoomName("");
      setCurrentEmsEmsIRAutomationDevices([]);
      setEmsEmsIRAutomationMonitoring(false);
    }
  };

  // EMS+EMS(IR) handlers (room name only)
  const handleAddEmsEmsIRRoom = () => {
    if (currentEmsEmsIRRoomName.trim() !== "") {
      setEmsEmsIRRooms([...emsEmsIRRooms, { name: currentEmsEmsIRRoomName }]);
      setCurrentEmsEmsIRRoomName("");
    }
  };
  console.log("EMS + EMS(IR) Rooms:", emsEmsIRRooms);
  console.log("EMS + EMS(IR) + Automation Rooms:", emsEmsIRAutomationRooms);
  console.log("EMS + Automation Rooms:", emsAutomationRooms);
  console.log("EMS(IR) + Automation Rooms:", emsIRAutomationRooms);
  console.log("Automation Rooms:", automationRooms);
  console.log("Rooms:", rooms);

  const renderRoomFields = () => {
    // EMS (Image 1)
    if (selectedService === "EMS") {
      return (
        // Only show "Add Room" button (Image 1)
        <button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "0.6rem 1.5rem",
            borderRadius: "999px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            marginTop: 24,
          }}
        >
          Create User
        </button>
      );
    }
    // EMS (IR) (Image 2)
    if (selectedService === "EMS (IR)") {
      return (
        <>
          <h5 style={{ marginTop: 24 }}>Add Room Details</h5>
          <Form.Group style={{ display: "inline-block" }} className="mb-3 w-50">
            <Form.Label>Room Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </Form.Group>
          {/* Render added rooms */}
          <div style={{ marginTop: 16 }}>
            {rooms.map((room, idx) => (
              <div
                key={idx}
                style={{
                  background: "#e0e0e0",
                  borderRadius: "10px",
                  padding: "8px 16px",
                  marginBottom: "8px",
                  display: "inline-block",
                }}
              >
                {room.name}
              </div>
            ))}
          </div>
          <button
            variant="primary"
            style={{
              display: "block",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: 24,
            }}
            type="button"
            onClick={handleAddRoomEMSIR}
          >
            Add Room
          </button>
        </>
      );
    }
    // Automation (Image 3)
    if (selectedService === "Automation") {
      return (
        <>
          <h5 style={{ marginTop: 24 }}>Add Room Details</h5>
          <Form.Group style={{ display: "inline-block" }} className="mb-3 w-50">
            <Form.Label>Room Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room name"
              value={currentRoomName}
              onChange={(e) => setCurrentRoomName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Devices</Form.Label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {currentDevices.map((device, index) => (
                <Button
                  key={index}
                  variant="outline-secondary"
                  style={{
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  disabled
                >
                  <i className={device.icon} style={{ marginRight: 4 }}></i>
                  {device.name}
                </Button>
              ))}
              <Button
                variant="outline-primary"
                style={{ borderRadius: "20px" }}
                onClick={openAddDeviceModal}
              >
                + Add
              </Button>
            </div>
          </Form.Group>
          <button
            variant="primary"
            style={{
              display: "block",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            type="button"
            onClick={handleAddAutomationRoom}
          >
            Add Room
          </button>
          {/* Show added rooms and their devices */}
          <div style={{ marginTop: 16 }}>
            {automationRooms.map((room, idx) => (
              <div key={idx} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: "bold" }}>{room.roomName}</div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginTop: 4,
                  }}
                >
                  {room.devices.map((dev, didx) => (
                    <span
                      key={didx}
                      style={{
                        background: "#e0e0e0",
                        borderRadius: "10px",
                        padding: "6px 12px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <i className={dev.icon}></i> {dev.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    // Automation(HD) (Image 4)
    if (selectedService === "Automation(HD)") {
      return (
        <>
          <h5 style={{ marginTop: 24 }}>Add Room Details</h5>
          <Form.Group style={{ display: "inline-block" }} className="mb-3 w-50">
            <Form.Label>Room Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room name"
              value={currentHDRoomName}
              onChange={(e) => setCurrentHDRoomName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Devices</Form.Label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {currentHDDevices.map((device, index) => (
                <Button
                  key={index}
                  variant="outline-secondary"
                  style={{
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  disabled
                >
                  <i className={device.icon} style={{ marginRight: 4 }}></i>
                  {device.name}
                </Button>
              ))}
              <Button
                variant="outline-primary"
                style={{ borderRadius: "20px" }}
                onClick={openAddHDDeviceModal}
              >
                + Add
              </Button>
            </div>
          </Form.Group>
          <button
            variant="primary"
            style={{
              display: "block",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            type="button"
            onClick={handleAddAutomationHDRoom}
          >
            Add Room
          </button>
          {/* Show added rooms and their devices */}
          <div style={{ marginTop: 16 }}>
            {automationHDRooms.map((room, idx) => (
              <div key={idx} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: "bold" }}>{room.roomName}</div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginTop: 4,
                  }}
                >
                  {room.devices.map((dev, didx) => (
                    <span
                      key={didx}
                      style={{
                        background: "#e0e0e0",
                        borderRadius: "10px",
                        padding: "6px 12px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <i className={dev.icon}></i> {dev.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    // EMS+Automation (Image 5)
    if (selectedService === "EMS+Automation") {
      return (
        <>
          <h5 style={{ marginTop: 24 }}>Add Room Details</h5>
          <Form.Group style={{ display: "inline-block" }} className="mb-3 w-50">
            <Form.Label>Room Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room name"
              value={currentEmsAutomationRoomName}
              onChange={(e) => setCurrentEmsAutomationRoomName(e.target.value)}
            />
          </Form.Group>
          <Form.Group style={{ display: "inline-block" }} className="ms-3">
            <Form.Check
              type="checkbox"
              label="Monitoring"
              id="monitoringCheckbox"
              checked={emsAutomationMonitoring}
              onChange={(e) => setEmsAutomationMonitoring(e.target.checked)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Devices</Form.Label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {currentEmsAutomationDevices.map((device, index) => (
                <Button
                  key={index}
                  variant="outline-secondary"
                  style={{
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  disabled
                >
                  <i className={device.icon} style={{ marginRight: 4 }}></i>
                  {device.name}
                </Button>
              ))}
              <Button
                variant="outline-primary"
                style={{ borderRadius: "20px" }}
                onClick={openAddEmsAutomationDeviceModal}
              >
                + Add
              </Button>
            </div>
          </Form.Group>
          <button
            variant="primary"
            style={{
              display: "block",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            type="button"
            onClick={handleAddEmsAutomationRoom}
          >
            Add Room
          </button>
          {/* Show added rooms and their devices */}
          <div style={{ marginTop: 16 }}>
            {emsAutomationRooms.map((room, idx) => (
              <div key={idx} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: "bold" }}>
                  {room.roomName}{" "}
                  {room.monitoring ? (
                    <span style={{ color: "#007bff", marginLeft: 8 }}>
                      (Monitoring)
                    </span>
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginTop: 4,
                  }}
                >
                  {room.devices.map((dev, didx) => (
                    <span
                      key={didx}
                      style={{
                        background: "#e0e0e0",
                        borderRadius: "10px",
                        padding: "6px 12px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <i className={dev.icon}></i> {dev.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    if (selectedService === "EMS(IR) + Automation") {
      return (
        <>
          <h5 style={{ marginTop: 24 }}>Add Room Details</h5>
          <Form.Group style={{ display: "inline-block" }} className="mb-3 w-50">
            <Form.Label>Room Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room name"
              value={currentEmsIRAutomationRoomName}
              onChange={(e) =>
                setCurrentEmsIRAutomationRoomName(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group style={{ display: "inline-block" }} className="ms-3">
            <Form.Check
              type="checkbox"
              label="Monitoring"
              id="monitoringCheckbox"
              checked={emsIRAutomationMonitoring}
              onChange={(e) => setEmsIRAutomationMonitoring(e.target.checked)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Devices</Form.Label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {currentEmsIRAutomationDevices.map((device, index) => (
                <Button
                  key={index}
                  variant="outline-secondary"
                  style={{
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  disabled
                >
                  <i className={device.icon} style={{ marginRight: 4 }}></i>
                  {device.name}
                </Button>
              ))}
              <Button
                variant="outline-primary"
                style={{ borderRadius: "20px" }}
                onClick={openAddEmsIRAutomationDeviceModal}
              >
                + Add
              </Button>
            </div>
          </Form.Group>
          <button
            variant="primary"
            style={{
              display: "block",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            type="button"
            onClick={handleAddEmsIRAutomationRoom}
          >
            Add Room
          </button>
          {/* Show added rooms and their devices */}
          <div style={{ marginTop: 16 }}>
            {emsIRAutomationRooms.map((room, idx) => (
              <div key={idx} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: "bold" }}>
                  {room.roomName}{" "}
                  {room.monitoring ? (
                    <span style={{ color: "#007bff", marginLeft: 8 }}>
                      (Monitoring)
                    </span>
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginTop: 4,
                  }}
                >
                  {room.devices.map((dev, didx) => (
                    <span
                      key={didx}
                      style={{
                        background: "#e0e0e0",
                        borderRadius: "10px",
                        padding: "6px 12px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <i className={dev.icon}></i> {dev.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    if (selectedService === "EMS + EMS(IR) + Automation") {
      return (
        <>
          <h5 style={{ marginTop: 24 }}>Add Room Details</h5>
          <Form.Group style={{ display: "inline-block" }} className="mb-3 w-50">
            <Form.Label>Room Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room name"
              value={currentEmsEmsIRAutomationRoomName}
              onChange={(e) =>
                setCurrentEmsEmsIRAutomationRoomName(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group style={{ display: "inline-block" }} className="ms-3">
            <Form.Check
              type="checkbox"
              label="Monitoring"
              id="monitoringCheckbox"
              checked={emsEmsIRAutomationMonitoring}
              onChange={(e) =>
                setEmsEmsIRAutomationMonitoring(e.target.checked)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Devices</Form.Label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {currentEmsEmsIRAutomationDevices.map((device, index) => (
                <Button
                  key={index}
                  variant="outline-secondary"
                  style={{
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  disabled
                >
                  <i className={device.icon} style={{ marginRight: 4 }}></i>
                  {device.name}
                </Button>
              ))}
              <Button
                variant="outline-primary"
                style={{ borderRadius: "20px" }}
                onClick={openAddEmsEmsIRAutomationDeviceModal}
              >
                + Add
              </Button>
            </div>
          </Form.Group>
          <button
            variant="primary"
            style={{
              display: "block",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            type="button"
            onClick={handleAddEmsEmsIRAutomationRoom}
          >
            Add Room
          </button>
          {/* Show added rooms and their devices */}
          <div style={{ marginTop: 16 }}>
            {emsEmsIRAutomationRooms.map((room, idx) => (
              <div key={idx} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: "bold" }}>
                  {room.roomName}{" "}
                  {room.monitoring ? (
                    <span style={{ color: "#007bff", marginLeft: 8 }}>
                      (Monitoring)
                    </span>
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginTop: 4,
                  }}
                >
                  {room.devices.map((dev, didx) => (
                    <span
                      key={didx}
                      style={{
                        background: "#e0e0e0",
                        borderRadius: "10px",
                        padding: "6px 12px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <i className={dev.icon}></i> {dev.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    // EMS + EMS(IR) (Image 1)
    if (selectedService === "EMS + EMS(IR)") {
      return (
        <>
          <h5 style={{ marginTop: 24 }}>Add Room Details</h5>
          <Form.Group style={{ display: "inline-block" }} className="mb-3 w-50">
            <Form.Label>Room Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter room name"
              value={currentEmsEmsIRRoomName}
              onChange={(e) => setCurrentEmsEmsIRRoomName(e.target.value)}
            />
          </Form.Group>
          {/* Render added rooms */}
          <div style={{ marginTop: 16 }}>
            {emsEmsIRRooms.map((room, idx) => (
              <div
                key={idx}
                style={{
                  background: "#e0e0e0",
                  borderRadius: "10px",
                  padding: "8px 16px",
                  marginBottom: "8px",
                  display: "inline-block",
                }}
              >
                {room.name}
              </div>
            ))}
          </div>
          <button
            variant="primary"
            style={{
              display: "block",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: 24,
            }}
            type="button"
            onClick={handleAddEmsEmsIRRoom}
          >
            Add Room
          </button>
        </>
      );
    }
    // fallback
    return null;
  };

  const renderModalContent = () => {
    if (step === "personalDetails") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "200px",
              borderRight: "2px solid #e0e0e0",
              paddingBottom: "1rem",
            }}
          >
            <h4 className="mb-4">Add User</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: step === "personalDetails" ? "#0d6efd" : "#000",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: `2px solid ${
                      step === "personalDetails" ? "#0d6efd" : "#ccc"
                    }`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  1
                </div>
                <span>Personal Details</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: step === "servicesDetails" ? "#0d6efd" : "#000",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: `2px solid ${
                      step === "servicesDetails" ? "#0d6efd" : "#ccc"
                    }`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  2
                </div>
                <span>Services</span>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px",
              background: "#f0f0f0",
              borderRadius: "20px",
              width: "100%",
            }}
          >
            <h5>Personal Details</h5>
            <Form style={{ width: "100%", height: "100%" }}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>CNIC Number</Form.Label>
                <Form.Control type="text" placeholder="Enter CNIC" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" placeholder="User ID" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone number" />
                  </Form.Group>
                </Col>
              </Row>

              <button
                variant="primary"
                onClick={handleNext}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "0.6rem 1.5rem",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Next
              </button>
            </Form>
          </div>
        </div>
      );
    } else if (step === "servicesDetails") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "200px",
              borderRight: "2px solid #e0e0e0",
              paddingBottom: "1rem",
            }}
          >
            <h4 className="mb-4">Add User</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: step === "personalDetails" ? "#0d6efd" : "#000",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: `2px solid ${
                      step === "personalDetails" ? "#0d6efd" : "#ccc"
                    }`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  1
                </div>
                <span>Personal Details</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: step === "servicesDetails" ? "#0d6efd" : "#000",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: `2px solid ${
                      step === "servicesDetails" ? "#0d6efd" : "#ccc"
                    }`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  2
                </div>
                <span>Services</span>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px",
              background: "#f0f0f0",
              borderRadius: "20px",
              width: "100%",
            }}
          >
            <h5>Services Details</h5>
            <Form
              style={{ width: "100%", height: "100%" }}
              onSubmit={handleCreateUser}
            >
              <Form.Group
                style={{ display: "inline-block" }}
                className="mb-3 w-50"
              >
                <Form.Label>Services</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedService}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    setShowRoomField(false);
                  }}
                >
                  <option value="EMS">EMS</option>
                  <option value="EMS (IR)">EMS (IR)</option>
                  <option value="Automation">Automation</option>
                  <option value="Automation(HD)">Automation(HD)</option>
                  <option value="EMS+Automation">EMS+Automation</option>
                  <option value="EMS(IR) + Automation">
                    EMS(IR) + Automation
                  </option>
                  <option value="EMS + EMS(IR) + Automation">
                    EMS + EMS(IR) + Automation
                  </option>
                  <option value="EMS + EMS(IR)">EMS + EMS(IR)</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                style={{ display: "inline-block" }}
                className="mb-3 w-50"
              >
                <Form.Label>User Type</Form.Label>
                <Form.Control as="select">
                  <option>Commercial(3KW)</option>
                  <option>Residential(3KW)</option>
                </Form.Control>
              </Form.Group>

              {/* Show fields based on selected service */}
              {selectedService === "EMS" ? (
                renderRoomFields()
              ) : showRoomField ? (
                renderRoomFields()
              ) : (
                <button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    padding: "0.6rem 1.5rem",
                    borderRadius: "999px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  {selectedService === "EMS" ? "Create User" : "Create User"}
                </button>
              )}
            </Form>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Header onAddUser={openModal} />
      <Container
        fluid
        style={{
          padding: "2rem",
          backgroundColor: "#f5f5f5",
          maxWidth: "100%",
        }}
      >
        <Row className="mb-3">
          <Col
            xs={12}
            className="d-flex justify-content-between align-items-center"
            style={{ flexWrap: "wrap" }}
          >
            <h3
              className="fs-1"
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              Welcome Zayan!
            </h3>
            {/* Search input and buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#D9D9D9",
                borderRadius: "20px",
                padding: "0.5rem 1rem",
                gap: "10px",
                flex: "1",
                maxWidth: "400px",
              }}
            >
              <input
                type="text"
                placeholder="Search User"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "1rem",
                  color: "#000",
                }}
              />
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  color: "#000",
                }}
              >
                <i className="bi bi-search"></i>
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  color: "#000",
                }}
              >
                <i className="bi bi-funnel-fill"></i>
              </button>
            </div>
          </Col>
        </Row>

        {/* Table to display user data */}
        <Row>
          <Col xs={12}>
            <div
              style={{
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "30px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#f0f0f0",
                      textAlign: "left",
                    }}
                  >
                    <th style={{ padding: "0.75rem", fontWeight: "bold" }}>
                      User ID
                    </th>
                    <th style={{ padding: "0.75rem", fontWeight: "bold" }}>
                      Name
                    </th>
                    <th style={{ padding: "0.75rem", fontWeight: "bold" }}>
                      Email
                    </th>
                    <th style={{ padding: "0.75rem", fontWeight: "bold" }}>
                      User Type
                    </th>
                    <th style={{ padding: "0.75rem", fontWeight: "bold" }}>
                      Services
                    </th>
                    <th style={{ padding: "0.75rem", fontWeight: "bold" }}>
                      Active
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#D9D9D9" : "#FFFFFF",
                      }}
                    >
                      <td style={{ padding: "0.75rem" }}>{user.id}</td>
                      <td style={{ padding: "0.75rem" }}>{user.name}</td>
                      <td style={{ padding: "0.75rem" }}>{user.email}</td>
                      <td style={{ padding: "0.75rem" }}>{user.type}</td>
                      <td style={{ padding: "0.75rem" }}>{user.services}</td>
                      <td style={{ padding: "0.75rem" }}>{user.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "800px",
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "1rem",
            borderRadius: "10px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {renderModalContent()}
      </Modal>

      {/* Add Appliance Modal */}
      <Modal
        isOpen={isAddApplianceModalOpen}
        onRequestClose={closeAddApplianceModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "50vh",
            maxWidth: "400px",
            padding: "2rem",
            borderRadius: "20px",
            backgroundColor: "#f9f9f9",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h3 style={{ marginBottom: "1.5rem" }}>Add Appliances</h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              fontSize: "1.5rem",
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="bi bi-hdd" style={{ marginRight: "0.5rem" }}></i>
            <i className="bi bi-caret-down-fill"></i>
          </button>

          <input
            type="text"
            value={applianceName}
            onChange={(e) => setApplianceName(e.target.value)}
            style={{
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "12px",
              padding: "0.6rem 1rem",
              fontSize: "1rem",
              width: "100%",
            }}
            placeholder="Appliance Name"
          />
        </div>

        <div style={{ textAlign: "right" }}>
          <button
            onClick={closeAddApplianceModal}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Done
          </button>
        </div>
      </Modal>

      {/* Add Device Modal for Automation */}
      <Modal
        isOpen={isAddDeviceModalOpen}
        onRequestClose={closeAddDeviceModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "50vh",
            maxWidth: "400px",
            padding: "2rem",
            borderRadius: "20px",
            backgroundColor: "#f9f9f9",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h3 style={{ marginBottom: "1.5rem" }}>Add Device</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          {/* Icon dropdown */}
          <select
            value={deviceIcon}
            onChange={(e) => setDeviceIcon(e.target.value)}
            style={{
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              fontSize: "1.5rem",
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <option value="bi bi-lightbulb">💡 Light</option>
            <option value="bi bi-snow">❄️ AC</option>
            <option value="bi bi-fan">🌀 Fan</option>
            <option value="bi bi-lightning-charge">⚡ Other</option>
          </select>
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            style={{
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "12px",
              padding: "0.6rem 1rem",
              fontSize: "1rem",
              width: "100%",
            }}
            placeholder="Device Name"
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={handleAddDevice}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Add Device
          </button>
        </div>
      </Modal>

      {/* Add Device Modal for Automation(HD) */}
      <Modal
        isOpen={isAddHDDeviceModalOpen}
        onRequestClose={closeAddHDDeviceModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "50vh",
            maxWidth: "400px",
            padding: "2rem",
            borderRadius: "20px",
            backgroundColor: "#f9f9f9",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h3 style={{ marginBottom: "1.5rem" }}>Add Device</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <select
            value={hdDeviceIcon}
            onChange={(e) => setHDDeviceIcon(e.target.value)}
            style={{
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              fontSize: "1.5rem",
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <option value="bi bi-lightbulb">💡 Light</option>
            <option value="bi bi-snow">❄️ AC</option>
            <option value="bi bi-fan">🌀 Fan</option>
            <option value="bi bi-lightning-charge">⚡ Other</option>
          </select>
          <input
            type="text"
            value={hdDeviceName}
            onChange={(e) => setHDDeviceName(e.target.value)}
            style={{
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "12px",
              padding: "0.6rem 1rem",
              fontSize: "1rem",
              width: "100%",
            }}
            placeholder="Device Name"
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={handleAddHDDevice}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Add Device
          </button>
        </div>
      </Modal>

      {/* Add Device Modal for EMS+Automation */}
      <Modal
        isOpen={isAddEmsAutomationDeviceModalOpen}
        onRequestClose={closeAddEmsAutomationDeviceModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "50vh",
            maxWidth: "400px",
            padding: "2rem",
            borderRadius: "20px",
            backgroundColor: "#f9f9f9",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h3 style={{ marginBottom: "1.5rem" }}>Add Device</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <select
            value={emsAutomationDeviceIcon}
            onChange={(e) => setEmsAutomationDeviceIcon(e.target.value)}
            style={{
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              fontSize: "1.5rem",
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <option value="bi bi-lightbulb">💡 Light</option>
            <option value="bi bi-snow">❄️ AC</option>
            <option value="bi bi-fan">🌀 Fan</option>
            <option value="bi bi-lightning-charge">⚡ Other</option>
          </select>
          <input
            type="text"
            value={emsAutomationDeviceName}
            onChange={(e) => setEmsAutomationDeviceName(e.target.value)}
            style={{
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "12px",
              padding: "0.6rem 1rem",
              fontSize: "1rem",
              width: "100%",
            }}
            placeholder="Device Name"
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={handleAddEmsAutomationDevice}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Add Device
          </button>
        </div>
      </Modal>

      {/* Add Device Modal for EMS(IR)+Automation */}
      <Modal
        isOpen={isAddEmsIRAutomationDeviceModalOpen}
        onRequestClose={closeAddEmsIRAutomationDeviceModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "50vh",
            maxWidth: "400px",
            padding: "2rem",
            borderRadius: "20px",
            backgroundColor: "#f9f9f9",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h3 style={{ marginBottom: "1.5rem" }}>Add Device</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <select
            value={emsIRAutomationDeviceIcon}
            onChange={(e) => setEmsIRAutomationDeviceIcon(e.target.value)}
            style={{
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              fontSize: "1.5rem",
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <option value="bi bi-lightbulb">💡 Light</option>
            <option value="bi bi-snow">❄️ AC</option>
            <option value="bi bi-fan">🌀 Fan</option>
            <option value="bi bi-lightning-charge">⚡ Other</option>
          </select>
          <input
            type="text"
            value={emsIRAutomationDeviceName}
            onChange={(e) => setEmsIRAutomationDeviceName(e.target.value)}
            style={{
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "12px",
              padding: "0.6rem 1rem",
              fontSize: "1rem",
              width: "100%",
            }}
            placeholder="Device Name"
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={handleAddEmsIRAutomationDevice}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Add Device
          </button>
        </div>
      </Modal>

      {/* Add Device Modal for EMS+EMS(IR)+Automation */}
      <Modal
        isOpen={isAddEmsEmsIRAutomationDeviceModalOpen}
        onRequestClose={closeAddEmsEmsIRAutomationDeviceModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "50vh",
            maxWidth: "400px",
            padding: "2rem",
            borderRadius: "20px",
            backgroundColor: "#f9f9f9",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h3 style={{ marginBottom: "1.5rem" }}>Add Device</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <select
            value={emsEmsIRAutomationDeviceIcon}
            onChange={(e) => setEmsEmsIRAutomationDeviceIcon(e.target.value)}
            style={{
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              fontSize: "1.5rem",
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <option value="bi bi-lightbulb">💡 Light</option>
            <option value="bi bi-snow">❄️ AC</option>
            <option value="bi bi-fan">🌀 Fan</option>
            <option value="bi bi-lightning-charge">⚡ Other</option>
          </select>
          <input
            type="text"
            value={emsEmsIRAutomationDeviceName}
            onChange={(e) => setEmsEmsIRAutomationDeviceName(e.target.value)}
            style={{
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "12px",
              padding: "0.6rem 1rem",
              fontSize: "1rem",
              width: "100%",
            }}
            placeholder="Device Name"
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={handleAddEmsEmsIRAutomationDevice}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Add Device
          </button>
        </div>
      </Modal>
    </>
  );
}
