import { useState, useEffect } from 'react';

const Notepad = ({ content }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        let resolved = typeof content === 'function' ? content() : content;

        if (typeof resolved !== 'string') {
            setText(resolved?.toString() || "");
        } else {
            setText(resolved);
        }
    }, [content]);

    return (
        <div className="notepad-container">
            <div className="notepad-menu">
                <span>Fichier</span><span>Édition</span><span>Format</span>
            </div>
            <div className="notepad-text-area">
                {typeof content === 'string' ? (
                    <textarea
                        className="notepad-textarea-real"
                        value={content}
                        readOnly
                    />
                ) : (
                    <div className="notepad-content-wrapper">
                        {content}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notepad;