import React, { useEffect } from 'react';
import '../index.css';

const BootScreen = ({ onBootComplete }) => {

    useEffect(() => {
        const bootTime = 3000;

        const timer = setTimeout(() => {
            onBootComplete();
        }, bootTime);

        return () => {
            clearTimeout(timer);
        };
    }, [onBootComplete]);

    return (
        <div className="boot-screen">
            <div className="boot-spinner-large"></div>
        </div>
    );
};

export default BootScreen;