import React, { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import "../../styles/modal.css"

export default function ChangePasswordModal({ onClose }) {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const toggleVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            setError('New passwords do not match');
            return;
        }

        if (formData.newPassword.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Auto close after 3 seconds
            setTimeout(() => {
                onClose();
            }, 3000);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="modal-overlay">
                <div className="modal-card" style={{ textAlign: 'center', padding: '50px 40px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: '#f0fdf4',
                        color: '#22c55e',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        margin: '0 auto 25px',
                        boxShadow: '0 10px 20px rgba(34, 197, 94, 0.15)'
                    }}>
                        <FaCheckCircle />
                    </div>
                    <h2 style={{ color: '#1e293b', marginBottom: '12px' }}>Password Updated!</h2>
                    <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                        Your password has been successfully changed. <br />
                        You can now use your new password to log in.
                    </p>
                    <button
                        className="btn-primary"
                        onClick={onClose}
                        style={{ width: '100%', justifyContent: 'center', height: '50px' }}
                    >
                        Done
                    </button>
                    <p style={{ marginTop: '20px', color: '#94a3b8', fontSize: '13px' }}>
                        Closing automatically in a few seconds...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'none',
                        border: 'none',
                        color: '#94a3b8',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }}
                >
                    <FaTimesCircle />
                </button>

                <h2>Change Password</h2>
                <p className="subtitle">Enhance your account security by updating your password.</p>

                {error && (
                    <div style={{
                        background: '#fef2f2',
                        color: '#dc2626',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '15px', position: 'relative' }}>
                        <label>Current Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPasswords.current ? "text" : "password"}
                                name="currentPassword"
                                placeholder="Enter current password"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => toggleVisibility('current')}
                                style={{
                                    position: 'absolute',
                                    right: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    color: '#94a3b8',
                                    cursor: 'pointer'
                                }}
                            >
                                {showPasswords.current ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label>New Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPasswords.new ? "text" : "password"}
                                name="newPassword"
                                placeholder="Enter new password"
                                value={formData.newPassword}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => toggleVisibility('new')}
                                style={{
                                    position: 'absolute',
                                    right: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    color: '#94a3b8',
                                    cursor: 'pointer'
                                }}
                            >
                                {showPasswords.new ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label>Confirm New Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPasswords.confirm ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm new password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => toggleVisibility('confirm')}
                                style={{
                                    position: 'absolute',
                                    right: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    color: '#94a3b8',
                                    cursor: 'pointer'
                                }}
                            >
                                {showPasswords.confirm ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button
                            type="button"
                            className="btn-outline"
                            onClick={onClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={isSubmitting}
                            style={{ minWidth: '140px' }}
                        >
                            {isSubmitting ? 'Updating...' : 'Update Password'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
