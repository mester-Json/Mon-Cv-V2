import React from 'react';
import { Rnd } from 'react-rnd';
import '../index.css';

const MAXIMIZE_ICON = '□';
const RESTORE_ICON = '❐';

const CvWindow = ({
                      appKey,
                      title,
                      icon,
                      content,
                      x, y, width, height,
                      minimized,
                      zIndex,
                      isFocused,
                      isMaximized,
                      onClose,
                      onMinimize,
                      onFocus,
                      onUpdateDimensions,
                      toggleMaximize,
                  }) => {
    if (minimized) return null;

    const style = {
        zIndex: zIndex,
        cursor: isMaximized ? 'default' : 'auto',
    };

    const disableRndFeatures = isMaximized;

    return (
        <Rnd
            size={{ width, height }}
            position={{ x, y }}
            style={style}
            minWidth={300}
            minHeight={200}
            dragHandleClassName="window-header"
            onMouseDown={onFocus}

            disableDragging={disableRndFeatures}

            enableResizing={{
                top: !disableRndFeatures,
                right: !disableRndFeatures,
                bottom: !disableRndFeatures,
                left: !disableRndFeatures,
                topRight: !disableRndFeatures,
                bottomRight: !disableRndFeatures,
                bottomLeft: !disableRndFeatures,
                topLeft: !disableRndFeatures
            }}

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
            <div
                className={`window-container ${isFocused ? 'focused' : ''} ${isMaximized ? 'maximized' : ''}`}
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: isMaximized ? '0' : '8px',
                }}
            >
                <div className="window-header" onDoubleClick={toggleMaximize}>
                    <span className="window-title">
                        {icon && <span style={{ marginRight: '5px' }}>{icon}</span>}
                        {title}
                    </span>
                    <div className="window-controls">
                        <button onClick={onMinimize} title="Minimize">-</button>

                        <button
                            onClick={toggleMaximize}
                            title={isMaximized ? "Restaurer" : "Maximiser"}
                        >
                            {isMaximized ? RESTORE_ICON : MAXIMIZE_ICON}
                        </button>

                        <button className="close-btn" onClick={onClose} title="Close">x</button>
                    </div>
                </div>

                <div
                    className="window-content"
                    style={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        padding: '15px'
                    }}
                >
                    {content}
                </div>
            </div>
        </Rnd>
    );
};

export default CvWindow;