import React from 'react';
import './ErrorMessageModal.css'; 

function ErrorMessageModal({ message, onClose }) {
    if (!message) return null; // Ne rend rien si aucun message n'est défini

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <p>{message}</p>
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default ErrorMessageModal;
