import React, { useState } from "react";
import Modal from "react-modal";

const DashboardNavbar = ({ onAddUser }) => {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("commercial");

  const openPricingModal = () => setIsPricingModalOpen(true);
  const closePricingModal = () => setIsPricingModalOpen(false);

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
        <i 
          className="bi bi-cash-coin" 
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
          onClick={openPricingModal}
        ></i>
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

      {/* Pricing Modal */}
      <Modal
        isOpen={isPricingModalOpen}
        onRequestClose={closePricingModal}
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
            padding: "2rem",
            borderRadius: "10px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div>
          <h2 style={{ marginBottom: "2rem" }}>Unit Pricing</h2>
          
          <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
            <div 
              style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
              onClick={() => setActiveTab("commercial")}
            >
              <div style={{ 
                width: "40px", 
                height: "40px", 
                borderRadius: "50%", 
                border: `2px solid ${activeTab === "commercial" ? "#007bff" : "#000"}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: activeTab === "commercial" ? "#007bff" : "#000",
                fontWeight: activeTab === "commercial" ? "bold" : "normal"
              }}>
                1
              </div>
              <span style={{ 
                color: activeTab === "commercial" ? "#007bff" : "#000",
                fontWeight: activeTab === "commercial" ? "bold" : "normal" 
              }}>Commercial</span>
            </div>
            <div 
              style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
              onClick={() => setActiveTab("residential")}
            >
              <div style={{ 
                width: "40px", 
                height: "40px", 
                borderRadius: "50%", 
                border: `2px solid ${activeTab === "residential" ? "#007bff" : "#000"}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: activeTab === "residential" ? "#007bff" : "#000",
                fontWeight: activeTab === "residential" ? "bold" : "normal"
              }}>
                2
              </div>
              <span style={{ 
                color: activeTab === "residential" ? "#007bff" : "#000",
                fontWeight: activeTab === "residential" ? "bold" : "normal" 
              }}>Residential</span>
            </div>
          </div>

          {activeTab === "commercial" ? (
            <>
              {/* Commercial 3KW Section */}
              <div style={{ marginBottom: "2rem" }}>
                <h3>Commercial (3KW)</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                  <div>
                    <p>1-200 units</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>200+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>300+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>400+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Commercial 5KW Section */}
              <div style={{ marginBottom: "2rem" }}>
                <h3>Commercial (5KW)</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                  <div>
                    <p>1-200 units</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>200+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>300+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>400+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Commercial 10KW Section */}
              <div>
                <h3>Commercial (10KW)</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                  <div>
                    <p>1-200 units</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>200+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>300+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>400+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Residential 3KW Section */}
              <div style={{ marginBottom: "2rem" }}>
                <h3>Residential (3KW)</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                  <div>
                    <p>1-200 units</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>200+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>300+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>400+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Residential 5KW Section */}
              <div style={{ marginBottom: "2rem" }}>
                <h3>Residential (5KW)</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                  <div>
                    <p>1-200 units</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>200+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>300+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>400+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Residential 10KW Section */}
              <div>
                <h3>Residential (10KW)</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                  <div>
                    <p>1-200 units</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>200+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>300+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                  <div>
                    <p>400+</p>
                    <input 
                      type="number" 
                      style={{ 
                        background: "#f0f0f0", 
                        padding: "0.8rem", 
                        borderRadius: "8px", 
                        width: "100%", 
                        border: "1px solid #ddd"
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </nav>
  );
};

export default DashboardNavbar;