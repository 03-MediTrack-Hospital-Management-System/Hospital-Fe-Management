import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHospital, FaUser, FaCalendarAlt, FaFileMedical, FaSignature, FaDownload, FaPrint } from 'react-icons/fa';
import { downloadReportPDF } from '../../utils/downloadUtils';

const ReportModal = ({ report, onClose }) => {
    if (!report) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="report-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="report-modal-content"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="modal-close-icon" onClick={onClose}>
                        <FaTimes />
                    </button>

                    <div className="report-paper">
                        {/* Header */}
                        <header className="report-header">
                            <div className="hospital-brand">
                                <FaHospital />
                                <div>
                                    <h2>MEDITRACK HOSPITAL</h2>
                                    <p>123 Medical Plaza, Health City, ST 56789</p>
                                    <p>Tel: +1 (555) 000-1234 | www.meditrack.com</p>
                                </div>
                            </div>
                            <div className="report-type-badge">
                                {report.type} REPORT
                            </div>
                        </header>

                        <div className="divider shadow-line"></div>

                        {/* Patient & Report Info */}
                        <div className="report-info-grid">
                            <div className="info-block">
                                <label>PATIENT NAME</label>
                                <p><FaUser /> John Doe</p>
                            </div>
                            <div className="info-block">
                                <label>REPORT ID</label>
                                <p>#REP-2024-{report.id.toString().padStart(4, '0')}</p>
                            </div>
                            <div className="info-block">
                                <label>DATE GENERATED</label>
                                <p><FaCalendarAlt /> {new Date(report.date).toLocaleDateString()}</p>
                            </div>
                            <div className="info-block">
                                <label>REFERRING PHYSICIAN</label>
                                <p><FaSignature /> {report.doctor}</p>
                            </div>
                        </div>

                        <div className="divider"></div>

                        {/* Main Content */}
                        <div className="report-body">
                            <section className="report-section">
                                <h3><FaFileMedical /> Findings & Clinical Analysis</h3>
                                <div className="findings-box">
                                    <p><strong>Clinical Indication:</strong> {report.description}</p>
                                    <p><strong>Status:</strong> <span className={`status-text ${report.status.toLowerCase()}`}>{report.status}</span></p>

                                    <div className="dummy-text">
                                        <p>The prescribed examination indicates stable biological parameters within the reference range for the cardiovascular and metabolic indices. All cellular counts (RBC, WBC) and enzymatic markers (ALT, AST) appear consistent with optimal physiological state. No immediate pathological deviations were identified in the primary screening.</p>
                                        <p>Comparison with previous baseline results shows a positive trend in systemic resilience. Recommended follow-up in 3-6 months for routine verification.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="report-section">
                                <h3>Recommendations</h3>
                                <ul>
                                    <li>Continue current hydration and nutritional protocols.</li>
                                    <li>Maintain moderate physical activity as per established schedule.</li>
                                    <li>Schedule periodic screening as advised by {report.doctor}.</li>
                                </ul>
                            </section>
                        </div>

                        {/* Footer */}
                        <footer className="report-footer">
                            <div className="signature-area">
                                <div className="e-signature">
                                    <p className="dr-name">{report.doctor}</p>
                                    <span>Chief Medical Officer</span>
                                </div>
                                <p>Electronically Signed on {new Date(report.date).toLocaleDateString()}</p>
                            </div>
                            <div className="disclaimer">
                                <p>This is a computer-generated report and does not require a physical signature. For any clarification, please contact the hospital administration.</p>
                            </div>
                        </footer>
                    </div>

                    <div className="report-actions-fixed">
                        <button className="report-btn secondary" onClick={() => window.print()}>
                            <FaPrint /> Print Report
                        </button>
                        <button
                            className="report-btn primary"
                            onClick={() => downloadReportPDF(report)}
                        >
                            <FaDownload /> Download PDF
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ReportModal;
