import React from 'react';
import '../index.css';

const Tile = ({ label, iconSrc, onClick }) => {
    return (
        <div className="tile" onClick={onClick}>
            <span style={{ fontSize: '32px' }}>{iconSrc}</span>
            <span>{label}</span>
        </div>
    );
};

export default Tile;