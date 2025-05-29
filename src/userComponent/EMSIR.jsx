import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Header from "../userComponent/Navbar";
import { Link } from "react-router-dom";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function EMSIR() {
  // State for the room data
  const [bedroomData, setBedroomData] = useState({
    current: "0.75 A",
    voltage: "217 V",
    power: "162 W",
    status: "Connected to Monitoring System",
    lastSeen: "May 24, 2025 11:35 AM",
  });
  const [livingRoomData, setLivingRoomData] = useState({
    current: "3.1",
    voltage: "217 V",
    power: "2000 W",
    status: "Disconnected to Monitoring System",
    lastSeen: "May 24, 2025 11:35 AM",
  });

  // Chart data
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
  //     // Initialize Firebase only once
  //     const initializeFirebase = async () => {
  //       try {
  //         const app_id =
  //           typeof __app_id !== "undefined" ? __app_id : "default-app-id";
  //         setAppId(app_id);

  //         const config =
  //           typeof __firebase_config !== "undefined"
  //             ? JSON.parse(__firebase_config)
  //             : null;
  //         setFirebaseConfig(config);

  //         if (config) {
  //           const { initializeApp } = await import("firebase/app");
  //           const {
  //             getAuth,
  //             signInWithCustomToken,
  //             signInAnonymously,
  //             onAuthStateChanged,
  //           } = await import("firebase/auth");
  //           const { getFirestore } = await import("firebase/firestore");

  //           const app = initializeApp(config);
  //           const auth = getAuth(app);
  //           const db = getFirestore(app); // Initialize Firestore

  //           // Sign in
  //           if (typeof __initial_auth_token !== "undefined") {
  //             await signInWithCustomToken(auth, __initial_auth_token);
  //           } else {
  //             await signInAnonymously(auth);
  //           }

  //           // Set up auth state listener
  //           onAuthStateChanged(auth, (user) => {
  //             if (user) {
  //               setUserId(user.uid);
  //             } else {
  //               setUserId(crypto.randomUUID()); // Anonymous user ID
  //             }
  //             setIsAuthReady(true);
  //           });
  //         }
  //       } catch (error) {
  //         console.error("Error initializing Firebase:", error);
  //       }
  //     };

  //     initializeFirebase();
  //   }, []); // Empty dependency array ensures this runs once on mount

  //   // You can add a useEffect here to fetch data from Firestore once auth is ready
  //   // For this example, we're using static data as per the image.
  //   useEffect(() => {
  //     if (isAuthReady && userId) {
  //       console.log("Firebase Auth is ready. User ID:", userId);
  //       // Example: You could fetch data from Firestore here if needed
  //       // const { getFirestore, doc, onSnapshot } = await import('firebase/firestore');
  //       // const db = getFirestore(firebaseApp); // Assuming firebaseApp is initialized
  //       // const docRef = doc(db, `artifacts/${appId}/users/${userId}/roomData`);
  //       // onSnapshot(docRef, (docSnap) => {
  //       //   if (docSnap.exists()) {
  //       //     const data = docSnap.data();
  //       //     setBedroomData(data.bedroom || bedroomData);
  //       //     setLivingRoomData(data.livingRoom || livingRoomData);
  //       //   }
  //       // });
  //     }
  //   }, [isAuthReady, userId, appId]); // Dependencies for data fetching

  return (
    <>
      <Header />

      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div
          className="container"
          style={{
            fontFamily: "Inter, sans-serif",
            minHeight: "100vh",
            paddingBottom: "20px",
          }}
        >
          {/* Header */}

          {/* Room Monitoring Section */}
          <div className="card shadow-sm mb-4" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title fw-bold" style={{ color: "#343a40" }}>
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
                    style={{ borderRadius: "10px" }}
                  >
                    <p
                      className="mb-1 text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Current
                    </p>
                    <h3 className="fw-bold" style={{ color: "#343a40" }}>
                      {bedroomData.current}
                    </h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card h-100 p-3 text-center"
                    style={{ borderRadius: "10px" }}
                  >
                    <p
                      className="mb-1 text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Voltage
                    </p>
                    <h3 className="fw-bold" style={{ color: "#343a40" }}>
                      {bedroomData.voltage}
                    </h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card h-100 p-3 text-center"
                    style={{ borderRadius: "10px" }}
                  >
                    <p
                      className="mb-1 text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Power
                    </p>
                    <h3 className="fw-bold" style={{ color: "#007bff" }}>
                      {bedroomData.power}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <Link to={"/emsuser"}
                  className="btn btn-primary"
                  style={{ borderRadius: "8px", padding: "8px 20px" }}
                >
                  Details
                </Link >
              </div>
            </div>
          </div>

          <div className="card shadow-sm mb-4" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title fw-bold" style={{ color: "#343a40" }}>
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
                    style={{ borderRadius: "10px" }}
                  >
                    <p
                      className="mb-1 text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Current
                    </p>
                    <h3 className="fw-bold" style={{ color: "#343a40" }}>
                      {livingRoomData.current}
                    </h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card h-100 p-3 text-center"
                    style={{ borderRadius: "10px" }}
                  >
                    <p
                      className="mb-1 text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Voltage
                    </p>
                    <h3 className="fw-bold" style={{ color: "#343a40" }}>
                      {livingRoomData.voltage}
                    </h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card h-100 p-3 text-center"
                    style={{ borderRadius: "10px" }}
                  >
                    <p
                      className="mb-1 text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Power
                    </p>
                    <h3 className="fw-bold" style={{ color: "#007bff" }}>
                      {livingRoomData.power}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <Link to={"/emsuser"}
                  className="btn btn-primary"
                  style={{ borderRadius: "8px", padding: "8px 20px" }}
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          <div className="container-fluid px-4">
            {/* User Info */}
            <div
              className="d-flex justify-content-between align-items-center mb-4 text-muted"
              style={{ fontSize: "0.9rem" }}
            >
              <span>May 24, 2025 11:35 AM</span>
              <span>Logged in as: zayanikhlas786@gmail.com</span>
            </div>

            {/* Room Energy Usage Section */}
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
                    Room Energy Usage
                  </h5>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      style={{ borderRadius: "8px" }}
                    >
                      Energy
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      style={{ borderRadius: "8px" }}
                    >
                      Cost
                    </button>
                  </div>
                </div>
                <p
                  className="card-subtitle mb-3 text-muted"
                  style={{ fontSize: "0.9rem" }}
                >
                  Energy consumption by room
                </p>

                <div className="row align-items-center">
                  <div className="col-md-6 d-flex justify-content-center">
                    <div
                      style={{
                        position: "relative",
                        width: "250px",
                        height: "250px",
                      }}
                    >
                      <Doughnut data={chartData} options={chartOptions} />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#343a40",
                        }}
                      >
                        {/* You can add a central text here if needed, like total usage */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex flex-column justify-content-center h-100">
                      <div className="d-flex align-items-center mb-2">
                        <span
                          className="me-2"
                          style={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            backgroundColor: "#007bff",
                          }}
                        ></span>
                        <span className="fw-bold" style={{ color: "#343a40" }}>
                          Living Room{" "}
                          <span className="text-muted fw-normal">50 %</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <span
                          className="me-2"
                          style={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            backgroundColor: "#28a745",
                          }}
                        ></span>
                        <span className="fw-bold" style={{ color: "#343a40" }}>
                          Bedroom{" "}
                          <span className="text-muted fw-normal">30 %</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <span
                          className="me-2"
                          style={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            backgroundColor: "#ffc107",
                          }}
                        ></span>
                        <span className="fw-bold" style={{ color: "#343a40" }}>
                          Kitchen{" "}
                          <span className="text-muted fw-normal">19 %</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Analysis Section */}
            <div
              className="card shadow-sm mb-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <h5
                  className="card-title fw-bold mb-3"
                  style={{ color: "#343a40" }}
                >
                  Detailed Analysis
                </h5>
                <ul
                  className="nav nav-tabs mb-3"
                  style={{ borderBottom: "none" }}
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{
                        border: "none",
                        borderBottom: "2px solid #007bff",
                        color: "#007bff",
                        fontWeight: "bold",
                      }}
                    >
                      Consumption
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      style={{ border: "none", color: "#6c757d" }}
                    >
                      Costs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      style={{ border: "none", color: "#6c757d" }}
                    >
                      Insights
                    </a>
                  </li>
                </ul>

                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <div
                      className="card h-100 p-3"
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Daily Average
                      </p>
                      <h4 className="fw-bold" style={{ color: "#343a40" }}>
                        3.2 kWh
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card h-100 p-3"
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Peak Usage
                      </p>
                      <h4 className="fw-bold" style={{ color: "#343a40" }}>
                        735 W
                      </h4>
                      <p
                        className="mb-0 text-muted"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Today at 7:30 PM
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card h-100 p-3"
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Power Factor
                      </p>
                      <h4 className="fw-bold" style={{ color: "#343a40" }}>
                        0.92
                      </h4>
                      <p
                        className="mb-0 text-success"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Good efficiency
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
                  Last 7 days
                </p>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  Your electricity usage pattern shows highest consumption
                  during evening hours (6-9 PM). Consider shifting some
                  activities to off-peak hours to optimize energy usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EMSIR;
