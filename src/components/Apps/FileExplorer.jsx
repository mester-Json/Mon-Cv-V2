import {FileText } from "lucide-react";

const FileExplorer = ({
                          folderName,
                          data,
                          openWindow }) => {

    const handleFileClick = (item) => {
        if (openWindow) {
            const extractText = (node) => {
                if (!node) return "";
                if (typeof node === "string") return node;
                if (Array.isArray(node)) return node.map(extractText).join("");
                if (node.props && node.props.children) return extractText(node.props.children);
                return "";
            };

            const pureText = extractText(item.content);

            openWindow('NOTEPAD', {
                title: `${item.shortTitle}.txt`,
                content: `${item.title}\n${"=".repeat(item.title.length)}\n\n${pureText}`
            });
        }
    };

    return (
        <div className="folder-view">
            <h3>{folderName}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                {data.map(item => (
                    <div
                        key={item.key}
                        className="desktop-icon"
                        style={{ cursor: 'pointer', width: '90px', textAlign: 'center' }}
                        onClick={() => handleFileClick(item)}
                    >
                        <div className="icon-img" style={{ fontSize: '2rem' }}><FileText size={35} strokeWidth={1} /></div>
                        <div className="icon-label" style={{ marginTop: '5px' }}>
                            {item.shortTitle}.txt
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileExplorer;