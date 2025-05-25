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

// Added mobile responsiveness to the Dashboard component
export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState("personalDetails");
  const [showRoomField, setShowRoomField] = useState(false);
  const [devices, setDevices] = useState(["Light 1", "AC 1.5", "Fan", "Other Item"]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStep("personalDetails"); // Reset to the first step when closing
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
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
                    border: `2px solid ${step === "personalDetails" ? "#0d6efd" : "#ccc"}`,
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
                    border: `2px solid ${step === "servicesDetails" ? "#0d6efd" : "#ccc"}`,
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

              <Button variant="primary" onClick={handleNext} style={{ width: "100%" }}>
                Next
              </Button>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
                    border: `2px solid ${step === "personalDetails" ? "#0d6efd" : "#ccc"}`,
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
                    border: `2px solid ${step === "servicesDetails" ? "#0d6efd" : "#ccc"}`,
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
            <Form style={{ width: "100%", height: "100%" }} onSubmit={handleCreateUser}>
              <Form.Group style={{display:"inline-block"}}  className="mb-3 w-50">
                <Form.Label>Services</Form.Label>
                <Form.Control as="select">
                  <option>EMS</option>
                  <option>EMS (IR)</option>
                  <option>Automation</option>
                </Form.Control>
              </Form.Group>

              <Form.Group style={{display:"inline-block"}}  className="mb-3 w-50">
                <Form.Label>User Type</Form.Label>
                <Form.Control as="select">
                  <option>Commercial(3KW)</option>
                  <option>Residential(3KW)</option>
                </Form.Control>
              </Form.Group>

              {showRoomField && (
                <>
                  <h5 style={{ marginTop: 24 }}>Add Room Details</h5>
                  <Form.Group style={{ display: "inline-block" }} className="mb-3 w-50">
                    <Form.Label>Room Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter room name" />
                  </Form.Group>

                  <Form.Group style={{ display: "inline-block" }} className="ms-3">
                    <Form.Check type="checkbox" label="Monitoring" id="monitoringCheckbox" />
                  </Form.Group>

                  <Button variant="primary" style={{ width: "100%" }} onClick={handleAddRoom}>
                    Add Room
                  </Button>

                  <Form.Group className="mb-3">
                    <Form.Label>Devices</Form.Label>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      {devices.map((device, index) => (
                        <Button
                          key={index}
                          variant="outline-secondary"
                          style={{ borderRadius: "20px" }}
                        >
                          {device}
                        </Button>
                      ))}
                      <Button
                        variant="outline-primary"
                        style={{ borderRadius: "20px" }}
                      >
                        + Add
                      </Button>
                    </div>
                  </Form.Group>
                </>
              )}

              {!showRoomField && (
                <Button variant="primary" type="submit" style={{ width: "100%" }}>
                  Create User
                </Button>
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
    </>
  );
}
