import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const CookieBanner = ({ openWindow }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    const handleOpenPrivacy = (e) => {
        e.preventDefault();
        if (openWindow) {
            openWindow('PRIVACY');
        }
    };
    if (!isVisible) return null;

    return (
        <div className="cookie-banner-container">
            <div className="cookie-banner-content">
                <div className="cookie-header">
                    <div className="cookie-title">
                        <ShieldCheck size={18} color="#2798F5" />
                        <span>Confidentialité et Cookies</span>
                    </div>
                    <button className="cookie-close" onClick={handleDecline}>
                        <X size={16} />
                    </button>
                </div>
                <div className="cookie-body">
                    <p>
                        Ce portfolio utilise des cookies pour améliorer votre expérience.
                        Consultez notre
                        <span onClick={handleOpenPrivacy} className="cookie-link-button">
                            Politique de confidentialité
                        </span>
                        pour en savoir plus.
                    </p>
                </div>
                <div className="cookie-footer">
                    <button className="btn-secondary" onClick={handleDecline}>Refuser</button>
                    <button className="btn-primary" onClick={handleAccept}>Accepter</button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;