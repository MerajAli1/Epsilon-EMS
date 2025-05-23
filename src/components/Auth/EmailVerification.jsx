import { Container, Row, Col, Button } from "react-bootstrap";
import mail from "../../assets/mail.png";
import Header from "../Navbar";
const EmailVerification = () => {
  return (
    <>
      <Header />
      <Container
        fluid
        style={{ minHeight: "100vh", backgroundColor: "#f7f7f7" }}
      >
        <Row className="align-items-center" style={{ minHeight: "100vh" }}>
          <Col md={6} className="p-5">
            <div>
              <div className="mb-4">
                <span style={{ cursor: "pointer", marginRight: "10px" }}>
                  <i class="bi bi-arrow-left"></i>
                </span>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Email Verification
                </span>
                <p className="fs-5">Enter the 6 digit OTP we have send to your email </p>
              </div>

              <p>Enter the 6 digit OTP we have sent to your email</p>
              <div className="d-flex gap-2 mb-3">
                {[...Array(6)].map((_, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength="1"
                    style={{
                      width: "50px",
                      height: "50px",
                      textAlign: "center",
                      fontSize: "20px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                ))}
              </div>
              <p>
                Didn’t receive an OTP?{" "}
                <a style={{textDecoration:"none", color: "#007bff"}} href="#">
                  Resend
                </a>
              </p>

              <Button variant="primary" className="px-5">
                Verify
              </Button>
            </div>
          </Col>

          <Col md={6} className="text-center p-4">
            <img
              width={"60%"}
              src={mail}
              alt="Email illustration"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmailVerification;
