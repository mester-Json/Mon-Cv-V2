import React from 'react';
import { Rnd } from 'react-rnd';
import '../index.css';

const DesktopIcon = ({ id, label, iconSrc, initialX, initialY, onClick, onDragStop }) => {

    const handleDoubleClick = (e) => {
        e.stopPropagation();
        onClick(id);
    };

    const handleSingleClick = (e) => {
        e.stopPropagation();
    };

    return (
        <Rnd
            default={{
                x: initialX,
                y: initialY,
                width: 90,
                height: 90,
            }}
            minWidth={90}
            minHeight={90}
            maxWidth={90}
            maxHeight={90}
            bounds=".desktop"
            className="desktop-icon-container"
            onDragStop={(e, d) => onDragStop(id, d.x, d.y)}
            disableDragging={false}
        >
            <div
                className="desktop-icon"
                onClick={handleSingleClick}
                onDoubleClick={handleDoubleClick}
            >
                <span className="icon-img">{iconSrc}</span>
                <span className="icon-label">{label}</span>
            </div>
        </Rnd>
    );
};

export default DesktopIcon;