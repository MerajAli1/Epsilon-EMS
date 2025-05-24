import { Container, Row, Col } from "react-bootstrap";
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
  return (
    <>
      <Header />
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
    </>
  );
}
