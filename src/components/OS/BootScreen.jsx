import  { useEffect, useState } from 'react';

const BootScreen = ({
                        onBootComplete,
                        isShutdown = false }) => {

    const [showBlackScreen, setShowBlackScreen] = useState(false);

    useEffect(() => {
        const bootTime = 3000;

        const timer = setTimeout(() => {
            if (isShutdown) {
                setShowBlackScreen(true);
            } else {
                onBootComplete();
            }
        }, bootTime);

        return () => {
            clearTimeout(timer);
        };
    }, [onBootComplete, isShutdown]);

    if (showBlackScreen) {
        return (
            <div className="boot-screen" style={{ background: '#000' }}>
            </div>
        );
    }

    return (
        <div className="boot-screen">
            <div className="boot-spinner-large"></div>
        </div>
    );
};

export default BootScreen;