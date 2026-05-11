import { Rnd } from 'react-rnd';

const DesktopIcon = ({ id, label, iconSrc, initialX, initialY, onClick, onDragStop }) => {

    return (
        <Rnd
            position={{ x: initialX || 0, y: initialY || 0 }}
            size={{ width: 90, height: 90 }}
            bounds=".desktop-container"
            enableResizing={false}
            className="desktop-icon-rnd"
            onDragStop={(e, d) => onDragStop(id, d.x, d.y)}
        >
            <div
                className="desktop-icon"
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    onClick(e);
                }}
            >
                <span className="icon-img">{iconSrc}</span>
                <span className="icon-label">{label}</span>
            </div>
        </Rnd>
    );
};

export default DesktopIcon;