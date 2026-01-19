import React, { useState } from "react";
import hospitalImg from "../assets/hospital1.jpg";

function Signup() {
  const [showPersonal, setShowPersonal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === formData.email);
    if (exists) return alert("User already exists");

    users.push({
      email: formData.email,
      password: formData.password,
      role: "PATIENT",
      profile: formData,
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! You can login now.");
  };

  return (
    <div className="signup-container">
     {/* LEFT */}
<div
  className="signup-left"
  style={{
    background: "linear-gradient(135deg,#0b5c63,#5fc4c6)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "40px",
  }}
>
  {/* TOP CONTENT */}
  <div>
    <h2 style={{ fontWeight: "700" }}>VV Care Hospitals</h2>
    <h1 style={{ marginTop: "30px" }}>Your Health, Our Priority</h1>
    <p>Experience seamless healthcare management.</p>
  </div>

  {/* IMAGE FILL */}
  <div
    style={{
      marginTop: "30px",
      flex: 1,
      backgroundImage: `url(${hospitalImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "12px",
    }}
  />
</div>


      {/* RIGHT */}
      <div className="signup-right">
        <h2>Create Patient Account</h2>

        <form onSubmit={handleSubmit}>
          <h4>Basic Information</h4>

          <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

          {/* DROPDOWN CONTROLLER */}
          <select onChange={(e) => setShowPersonal(e.target.value === "yes")} required>
            <option value="">Add Personal Details?</option>
            <option value="yes">Yes</option>
            <option value="no">Later</option>
          </select>

          {/* CONDITIONAL SECTION */}
          {showPersonal && (
            <>
              <h4>Personal Details</h4>
              <input type="date" name="dob" onChange={handleChange} />
              <select name="gender" onChange={handleChange}>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <select name="bloodGroup" onChange={handleChange}>
                <option value="">Blood Group</option>
                <option>A+</option><option>B+</option><option>O+</option>
              </select>
              <input name="height" placeholder="Height (cm)" onChange={handleChange} />
              <input name="weight" placeholder="Weight (kg)" onChange={handleChange} />
            </>
          )}

          <button className="signup-btn">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
