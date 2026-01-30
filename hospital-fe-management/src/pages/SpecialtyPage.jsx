import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    FaHeart, FaBrain, FaBone, FaChild, FaShieldAlt,
    FaUtensils, FaHeartbeat, FaLungs, FaArrowLeft, FaCheckCircle
} from 'react-icons/fa';
import "../styles/components/SpecialtyPage.css";

const specialtyData = {
    cardiology: {
        title: "Cardiology",
        icon: <FaHeart />,
        color: "#ff4757",
        description: "Expert heart care with advanced diagnostics and treatments. Our cardiology department is equipped with state-of-the-art technology to provide comprehensive care for all heart-related conditions.",
        features: [
            "Advanced Heart Failure Management",
            "Interventional Cardiology",
            "Electrophysiology",
            "Preventive Cardiology",
            "Cardiac Rehabilitation"
        ],
        details: "We prioritize your heart health with a team of world-renowned cardiologists and cardiac surgeons. From routine check-ups to complex surgeries, we provide personalized care tailored to each patient's needs."
    },
    neurology: {
        title: "Neurology",
        icon: <FaBrain />,
        color: "#a55eea",
        description: "Advanced treatment for brain and nervous system disorders. Our neurology team specializes in diagnosing and treating complex neurological conditions with a patient-centered approach.",
        features: [
            "Stroke Care & Management",
            "Epilepsy Treatment",
            "Neuromuscular Disorders",
            "Neuro-Oncology",
            "Memory & Aging Center"
        ],
        details: "Our neurology experts use the latest imaging and diagnostic tools to ensure accurate diagnoses and effective treatment plans for conditions affecting the brain and nervous system."
    },
    orthopedics: {
        title: "Orthopedics",
        icon: <FaBone />,
        color: "#20bf6b",
        description: "Comprehensive bone, joint, and spine care solutions. We provide expert care for orthopedic conditions, helping you regain mobility and live a pain-free life.",
        features: [
            "Joint Replacement Surgery",
            "Sports Medicine",
            "Spine Surgery",
            "Orthopedic Trauma",
            "Pediatric Orthopedics"
        ],
        details: "Whether it's a sports injury or chronic joint pain, our orthopedic surgeons and physical therapists work together to provide complete care and rehabilitation."
    },
    pediatrics: {
        title: "Pediatrics",
        icon: <FaChild />,
        color: "#f7b731",
        description: "Compassionate healthcare for infants, children, and teens. Our pediatric department is dedicated to providing high-quality medical care in a child-friendly environment.",
        features: [
            "Neonatal Intensive Care (NICU)",
            "Pediatric Emergency Medicine",
            "Vaccinations & Immunizations",
            "Growth & Development Monitoring",
            "Child Psychology"
        ],
        details: "We believe in a holistic approach to child health, focusing on physical, emotional, and social well-being from birth through adolescence."
    },
    oncology: {
        title: "Oncology",
        icon: <FaShieldAlt />,
        color: "#eb3b5a",
        description: "Comprehensive cancer diagnosis and treatment services. Our oncology center offers advanced therapies and compassionate support for patients and their families.",
        features: [
            "Medical Oncology",
            "Radiation Therapy",
            "Surgical Oncology",
            "Immunotherapy",
            "Palliative Care"
        ],
        details: "Our multidisciplinary team works collaboratively to provide the most advanced cancer treatments while focusing on the overall quality of life for our patients."
    },
    gastroenterology: {
        title: "Gastroenterology",
        icon: <FaUtensils />,
        color: "#fa8231",
        description: "Digestive system care with expert specialists. We offer advanced diagnostic and treatment options for a wide range of gastrointestinal and liver disorders.",
        features: [
            "Endoscopy & Colonoscopy",
            "Liver Disease Management",
            "Inflammatory Bowel Disease (IBD)",
            "Pancreatic & Biliary Care",
            "Nutritional Counseling"
        ],
        details: "Using minimally invasive techniques, our gastroenterologists provide effective treatments for digestive health, ensuring a faster recovery for our patients."
    },
    nephrology: {
        title: "Nephrology",
        icon: <FaHeartbeat />,
        color: "#2abb9b",
        description: "Advanced kidney care and dialysis services. Our nephrology team is committed to providing expert care for kidney-related conditions and hypertension.",
        features: [
            "Chronic Kidney Disease Management",
            "Dialysis Services (Hemodialysis & Peritoneal)",
            "Kidney Transplantation Support",
            "Hypertension Management",
            "Glomerular Diseases"
        ],
        details: "We offer comprehensive services for patients with kidney disease, focusing on slowing progression and improving patient outcomes through specialized care."
    },
    pulmonology: {
        title: "Pulmonology",
        icon: <FaLungs />,
        color: "#45aaf2",
        description: "Expert treatment for lung and respiratory conditions. Our pulmonology department provides advanced care for asthma, COPD, and other respiratory disorders.",
        features: [
            "Asthma & Allergy Management",
            "COPD Treatment",
            "Sleep Medicine",
            "Interventional Pulmonology",
            "Cystic Fibrosis Care"
        ],
        details: "Our respiratory specialists use the latest diagnostic tools to treat lung diseases and help patients breathe easier and lead active lives."
    }
};

export default function SpecialtyPage() {
    const { id } = useParams();
    const data = specialtyData[id.toLowerCase()];

    if (!data) {
        return (
            <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h2>Specialty not found</h2>
                <Link to="/" className="primary-btn">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="specialty-page">
            <section className="specialty-hero" style={{ background: `linear-gradient(135deg, ${data.color}22 0%, ${data.color}11 100%)` }}>
                <div className="container">
                    <Link to="/" className="back-link">
                        <FaArrowLeft /> Back to Specialties
                    </Link>
                    <div className="specialty-hero-content">
                        <div className="specialty-icon-large" style={{ backgroundColor: data.color, boxShadow: `0 20px 40px ${data.color}33` }}>
                            {data.icon}
                        </div>
                        <div className="specialty-hero-titles">
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="specialty-content">
                <div className="container specialty-grid">
                    <div className="content-section">
                        <h2>Overview</h2>
                        <p>{data.details}</p>
                        <div className="action-box">
                            <h3>Need a Consultation?</h3>
                            <p>Our specialists are here to help. Book an appointment today for expert medical advice.</p>
                            <Link to="/login" className="primary-btn">Book Appointment</Link>
                        </div>
                    </div>

                    <div className="content-section">
                        <h2>Our Services</h2>
                        <div className="services-list">
                            {data.features.map((feature, index) => (
                                <div key={index} className="service-item" style={{ borderLeft: `4px solid ${data.color}` }}>
                                    <FaCheckCircle style={{ color: data.color }} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
