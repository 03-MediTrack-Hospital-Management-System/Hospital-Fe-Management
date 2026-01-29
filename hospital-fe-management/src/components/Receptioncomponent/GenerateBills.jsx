import React, { useState } from "react";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Arjun Kumar",
    specialization: "Cardiologist",
    consultationFee: 800
  },
  {
    id: 2,
    name: "Dr. Meena Sharma",
    specialization: "Dermatologist",
    consultationFee: 600
  },
  {
    id: 3,
    name: "Dr. Rahul Verma",
    specialization: "General Physician",
    consultationFee: 400
  }
];



export default function GenerateBills() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const patients = users.filter(u => u.role === "PATIENT");

  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [extraCharges, setExtraCharges] = useState(0);

  const totalAmount =
    (selectedDoctor?.consultationFee || 0) + Number(extraCharges);

  const handleGenerateBill = () => {
    if (!selectedPatient || !selectedDoctor) {
      alert("Please select patient and doctor");
      return;
    }

    const bill = {
      patient: selectedPatient,
      doctor: selectedDoctor.name,
      specialization: selectedDoctor.specialization,
      consultationFee: selectedDoctor.consultationFee,
      extraCharges,
      totalAmount,
      date: new Date().toLocaleDateString()
    };

    console.log("Generated Bill:", bill);
    alert("Bill Generated Successfully ✅");

    // later → send to backend
  };

  const containerStyle = {
  maxWidth: "500px",
  margin: "auto",
  padding: "25px",
  borderRadius: "14px",
  backgroundColor: "#ffffff",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  fontFamily: "'Poppins', Inter, sans-serif"
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#0f766e",
  fontSize: "22px",
  fontWeight: "600"
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "14px"
};

const infoBox = {
  padding: "10px",
  backgroundColor: "#f0fdfa",
  borderRadius: "8px",
  marginBottom: "12px",
  color: "#065f46"
};

const totalBox = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px",
  backgroundColor: "#ecfeff",
  borderRadius: "8px",
  marginBottom: "15px",
  fontSize: "16px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(90deg, #0f766e, #2563eb)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer"
};

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Generate Patient Bill</h2>

      {/* Patient */}
      <select
        style={inputStyle}
        value={selectedPatient}
        onChange={(e) => setSelectedPatient(e.target.value)}
      >
        <option value="">Select Patient</option>
        {patients.map((p, index) => (
          <option key={index} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      {/* Doctor */}
      <select
        style={inputStyle}
        onChange={(e) =>
          setSelectedDoctor(
            doctorsData.find(d => d.id === Number(e.target.value))
          )
        }
      >
        <option value="">Select Doctor</option>
        {doctorsData.map(doc => (
          <option key={doc.id} value={doc.id}>
            {doc.name} ({doc.specialization})
          </option>
        ))}
      </select>

      {/* Fee Info */}
      {selectedDoctor && (
        <div style={infoBox}>
          <p><strong>Consultation Fee:</strong> ₹{selectedDoctor.consultationFee}</p>
        </div>
      )}

      {/* Extra Charges */}
      <input
        style={inputStyle}
        type="number"
        placeholder="Extra Charges (Lab / Medicine)"
        value={extraCharges}
        onChange={(e) => setExtraCharges(e.target.value)}
      />

      {/* Total */}
      <div style={totalBox}>
        <span>Total Amount</span>
        <strong>₹ {totalAmount}</strong>
      </div>

      <button style={buttonStyle} onClick={handleGenerateBill}>
        Generate Bill
      </button>
    </div>
  );
}