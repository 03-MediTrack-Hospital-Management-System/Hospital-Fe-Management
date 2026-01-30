import React from "react";
import { FaHospital, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <div className="container">

        {/* Main Row */}
        <div className="row align-items-center gy-2">

          {/* Hospital Branding */}
          <div className="col-md-4 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <FaHospital className="text-teal fs-5" />
              <span className="fw-semibold">VV Care Hospital</span>
            </div>
            <small className="text-secondary">
              Hospital Management System
            </small>
          </div>

          {/* Contact Info */}
          <div className="col-md-5 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-3 small text-secondary">
              <span className="d-flex align-items-center gap-1">
                <FaMapMarkerAlt /> Medical City
              </span>
              <span className="d-flex align-items-center gap-1">
                <FaPhoneAlt /> +1 (800) VV-CARE
              </span>
              <span className="d-flex align-items-center gap-1">
                <FaEnvelope /> support@vvcare.com
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-md-3 text-center text-md-end">
            <small className="text-secondary">
              © {new Date().getFullYear()} VV Care
            </small>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary border-opacity-25 my-2" />

        {/* Bottom Line */}
        <div className="text-center small text-secondary">
          Secure Hospital Information System • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
