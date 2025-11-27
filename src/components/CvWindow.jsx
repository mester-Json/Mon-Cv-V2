import React from 'react';
import { Rnd } from 'react-rnd';
import '../index.css';

const CvWindow = ({
                      appKey,
                      title,
                      icon,
                      content,
                      x, y, width, height,
                      minimized,
                      zIndex,
                      isFocused,
                      onClose,
                      onMinimize,
                      onFocus,
                      onUpdateDimensions,
                  }) => {
    if (minimized) return null;

    const style = {
        zIndex: zIndex,
    };

    return (
        <Rnd
            size={{ width, height }}
            position={{ x, y }}
            style={style}
            minWidth={300}
            minHeight={200}
            dragHandleClassName="window-header"
            onMouseDown={onFocus}

            onDragStop={(e, d) => {
                onUpdateDimensions(appKey, { x: d.x, y: d.y });
                onFocus();
            }}

            onResizeStop={(e, direction, ref, delta, position) => {
                onUpdateDimensions(appKey, {
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position,
                });
                onFocus();
            }}
        >
            <div className={`window-container ${isFocused ? 'focused' : ''}`}>
                <div className="window-header">
                    <span className="window-title">
                        {icon && <span style={{ marginRight: '5px' }}>{icon}</span>}
                        {title}
                    </span>
                    <div className="window-controls">
                        <button onClick={onMinimize} title="Minimize">-</button>
                        <button disabled title="Maximize">□</button>
                        <button className="close-btn" onClick={onClose} title="Close">x</button>
                    </div>
                </div>

                <div className="window-content">
                    {content}
                </div>
            </div>
        </Rnd>
    );
};

export default CvWindow;