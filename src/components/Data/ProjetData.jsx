import React, { useState, useEffect } from 'react';
import {FolderOpen} from "lucide-react";

const Projets = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const username = "mester-Json";

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setRepos(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <div className="loading-text">Connexion à GitHub...</div>;

    return (

        <div className="folder-view">
            <h3>Projets</h3>
        <div className="explorer-grid">

            {repos.map(repo => (
                <div
                    key={repo.id}
                    className="explorer-item"
                    onDoubleClick={() => window.open(repo.html_url, '_blank')}
                    title={repo.description || repo.name}
                >
                    <div className="folder-icon-wrapper"><FolderOpen size={45} strokeWidth={1} /></div>
                    <span className="folder-name">{repo.name}</span>
                </div>
            ))}
        </div>
            </div>
    );
};

export default Projets;