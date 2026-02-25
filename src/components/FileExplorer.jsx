import React, { useState } from 'react';
import '../index.css';

const FileExplorer = ({ folderName, data }) => {
    const [openedFolderKey, setOpenedFolderKey] = useState(null);
    const [isNoteOpen, setIsNoteOpen] = useState(false);

    const activeFile = openedFolderKey ? data.find(item => item.key === openedFolderKey) : null;

    const handleBack = () => {
        if (isNoteOpen) {
            setIsNoteOpen(false);
        } else {
            setOpenedFolderKey(null);
        }
    };

    if (activeFile && isNoteOpen) {
        return (
            <div className="file-content">
                <button onClick={handleBack} className="back-button">🠔 Retour</button>
                <div className="window-content">
                    <h3>{activeFile.title}</h3>
                    <div className="text-body">
                        {activeFile.content}
                    </div>
                </div>
            </div>
        );
    }

    if (activeFile && !isNoteOpen) {
        return (
            <div className="folder-detail-view">
                <button onClick={handleBack} className="back-button">🠔 Dossier Parent</button>
                <div
                    className="file-item"
                    onClick={() => setIsNoteOpen(true)}
                >
                    <span className="icon-img">📝</span>
                    <span className="icon-label">{activeFile.shortTitle}.txt</span>
                </div>
            </div>
        );
    }

    return (
        <div className="folder-view">
            <h3>Dossier : {folderName}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                {data.map(item => (
                    <div
                        key={item.key}
                        className="desktop-icon"
                        style={{ cursor: 'pointer', width: '90px' }}
                        onClick={() => setOpenedFolderKey(item.key)}
                    >
                        <span className="icon-img">📁</span>
                        <span className="icon-label">{item.shortTitle}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileExplorer;