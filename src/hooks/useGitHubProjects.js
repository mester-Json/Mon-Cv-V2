import { useState, useEffect } from 'react';

const GITHUB_USERNAME = '';

export const useGitHubProjects = () => {
    const [latestProject, setLatestProject] = useState(null);
    const [allProjects, setAllProjects] = useState(null);

    const fetchGithubProjects = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`);
            if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);

            const repos = await response.json();
            const filteredProjects = repos
                .filter(repo => !repo.fork && repo.name !== GITHUB_USERNAME.toLowerCase())
                .map(repo => ({
                    key: repo.name,
                    shortTitle: repo.name.replace(/-/g, ' '),
                    title: repo.name.replace(/-/g, ' '),
                    url: repo.html_url,
                    description: repo.description || "Pas de description fournie.",
                    language: repo.language || "Non spécifié",
                    updatedAt: new Date(repo.updated_at).toLocaleDateString('fr-FR'),
                }));

            setAllProjects(filteredProjects);
            setLatestProject(filteredProjects[0] || { name: 'Aucun projet', updatedAt: '', url: '#' });
        } catch (error) {
            console.error("Erreur GitHub:", error);
            setLatestProject({ name: 'Indisponible', error: true });
            setAllProjects([]);
        }
    };

    useEffect(() => { fetchGithubProjects(); }, []);

    return { latestProject, allProjects };
};