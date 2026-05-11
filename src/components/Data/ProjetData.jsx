import React from 'react';
import { useGitHubProjects } from '../../hooks/useGitHubProjects';
import { FolderOpen } from "lucide-react";

const Projets = () => {
    const { allProjects, loading } = useGitHubProjects();

    if (loading) return <div className="loading-text">Connexion à GitHub...</div>;

    return (
        <div className="folder-view">
            <h3>Projets</h3>
            <div className="explorer-grid">
                {allProjects && allProjects.map(repo => (
                    <div
                        key={repo.key}
                        className="explorer-item"
                        onDoubleClick={() => window.open(repo.url, '_blank')}
                    >
                        <div className="folder-icon-wrapper">
                            <FolderOpen size={45} strokeWidth={1} />
                        </div>
                        <span className="folder-name">{repo.shortTitle}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projets;