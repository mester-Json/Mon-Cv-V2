import  { useState } from 'react';
import { Rnd } from 'react-rnd';
import Projets from '../Data/ProjetData.jsx';

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
                      statusBar,
                      allProjects,
                      openWindow
                  }) => {
    const [isClosing, setIsClosing] = useState(false);

    if (minimized) return null;

    const getOSLabel = () => {
        const platform = navigator.platform.toLowerCase();
        if (platform.includes('win')) return 'Windows (CRLF)';
        if (platform.includes('mac')) return 'Macintosh (LF)';
        return 'Linux (LF)';
    };

    const handleClose = (e) => {
        if (e) e.stopPropagation();
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 200);
    };

    const renderContent = () => {
        if (appKey === 'PROJECTS') {
            return <Projets projects={allProjects} />;
        }

        if (typeof content === 'function') {
            return content({ openWindow, allProjects });
        }

        return content;
    };

    return (
        <Rnd
            key={isMaximized ? 'max' : 'normal'}
            size={isMaximized ? { width: '100%', height: '100%' } : { width, height }}
            position={isMaximized ? { x: 0, y: 0 } : { x, y }}
            bounds="parent"
            dragHandleClassName="window-header"
            disableDragging={isMaximized}
            enableResizing={!isMaximized}
            onDragStart={onFocus}
            onResizeStart={onFocus}
            style={{
                zIndex: zIndex,
                position: isMaximized ? 'fixed' : 'absolute'
            }}
            onDragStop={(e, d) => {
                if (!isMaximized) {
                    onUpdateDimensions(appKey, { x: d.x, y: d.y });
                }
                onFocus();
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                if (!isMaximized) {
                    onUpdateDimensions(appKey, {
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }
                onFocus();
            }}
        >
            <div
                className={`window-container ${isFocused ? 'focused' : ''} ${isMaximized ? 'maximized' : ''} ${isClosing ? 'closing' : ''}`}
                onClick={onFocus}
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: isMaximized ? '0' : '8px',
                    pointerEvents: 'auto'
                }}
            >
                <div className="window-header" onDoubleClick={toggleMaximize}>
                    <span className="window-title">
                        {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
                        {title}
                    </span>
                    <div className="window-controls">
                        <button onClick={(e) => { e.stopPropagation(); onMinimize(); }}>-</button>
                        <button onClick={(e) => { e.stopPropagation(); toggleMaximize(); }}>
                            {isMaximized ? RESTORE_ICON : MAXIMIZE_ICON}
                        </button>
                        <button className="close-btn" onClick={handleClose}>x</button>
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
                    {renderContent()}
                </div>

                {(appKey.startsWith('NOTEPAD') || (typeof statusBar !== 'undefined' && statusBar)) && (
                    <div className="notepad-status-bar">
                        <div className="status-item">{getOSLabel()}</div>
                        <div className="status-item">UTF-8</div>
                    </div>
                )}
            </div>
        </Rnd>
    );
};

export default CvWindow;