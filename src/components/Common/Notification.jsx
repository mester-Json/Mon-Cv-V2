import  {  useEffect } from 'react';

const Notification = ({ title, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 6000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="notification-container">
            <div className="notif-header">
                <span>{title || "Système"}</span>
                <button className="notif-close" onClick={onClose}>×</button>
            </div>
            <div className="notif-content">
                {message}
            </div>
        </div>
    );
};

export default Notification;