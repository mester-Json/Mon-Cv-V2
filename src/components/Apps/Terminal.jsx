import  { useState, useEffect, useRef } from 'react';
import XP_DATA from '../Data/ExperienceData';
import EDUCATION_DATA from '../Data/EducationData';
import SKILLS_DATA from '../Data/SkillsData';

const Terminal = ({ repos }) => {

    const [currentDir, setCurrentDir] = useState('/');
    const [history, setHistory] = useState([
        { text: "Microsoft Windows [Version 10.0.22621.1702]", type: "system" },
        { text: "Système de fichiers synchronisé avec succès.", type: "info" }
    ]);
    const [input, setInput] = useState("");
    const terminalEndRef = useRef(null);

    const fileSystem = {
        '/': ['Profil.txt', 'Contact.txt', 'Projets', 'Experiences', 'Formation', 'Competences'],
        'Projets': repos ? repos.map(r => r.name) : [],
        'Experiences': XP_DATA.map(xp => `${xp.shortTitle.replace(/\s+/g, '_')}.txt`),
        'Formation': EDUCATION_DATA.map(edu => `${edu.shortTitle.replace(/\s+/g, '_')}.txt`),
        'Competences': SKILLS_DATA.map(s => `${s.shortTitle.replace(/\s+/g, '_')}.txt`)
    };

    const renderToString = (reactElement) => {
        if (!reactElement) return "";
        if (typeof reactElement === 'string') return reactElement;
        if (Array.isArray(reactElement)) return reactElement.map(renderToString).join("");
        if (reactElement.props && reactElement.props.children) return renderToString(reactElement.props.children);
        return "";
    };

    const getCatContent = (fileName) => {
        if (fileName === 'Bio.txt') return "Développeur Full Stack de 23 ans, passionné par la création d’applications modernes et performantes, alliant front-end intuitif et back-end robuste pour offrir des solutions fiables et évolutives.";
        if (fileName === 'Contact.txt') return "Email: Decubberjayson@gmail.com | GitHub: @mester-Json | Tel : 06.50.06.12.08";

        const xp = XP_DATA.find(x => `${x.shortTitle.replace(/\s+/g, '_')}.txt` === fileName);
        if (xp) return renderToString(xp.content);

        const edu = EDUCATION_DATA.find(e => `${e.shortTitle.replace(/\s+/g, '_')}.txt` === fileName);
        if (edu) return renderToString(edu.content);

        const skill = SKILLS_DATA.find(s => `${s.shortTitle.replace(/\s+/g, '_')}.txt` === fileName);
        if (skill) return renderToString(skill.content);

        return `Fichier '${fileName}' introuvable dans ce répertoire.`;
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const fullCmd = input.trim();
            const [cmd, ...args] = fullCmd.toLowerCase().split(' ');
            const target = fullCmd.split(' ')[1];

            const prompt = `C:\\Users\\Jayson${currentDir === '/' ? '' : '\\' + currentDir}> `;
            const newHistory = [...history, { text: prompt + fullCmd, type: "user" }];

            switch (cmd) {
                case 'ls':
                    newHistory.push({ text: fileSystem[currentDir].join("    "), type: "system" });
                    break;

                case 'cd':
                    if (!target || target === '/') {
                        setCurrentDir('/');
                    } else if (target === '..' || target === '.') {
                        setCurrentDir('/');
                    } else if (fileSystem[target] && currentDir === '/') {
                        setCurrentDir(target);
                    } else {
                        newHistory.push({ text: "Le chemin spécifié est introuvable.", type: "error" });
                    }
                    break;

                case 'cat':
                    if (!target) {
                        newHistory.push({ text: "Usage: cat [nom_du_fichier]", type: "error" });
                    } else {
                        newHistory.push({ text: getCatContent(target), type: "system" });
                    }
                    break;

                case 'help':
                    newHistory.push({
                        text: "Commandes disponibles :\n" +
                              "  ls              - Liste les fichiers et dossiers du répertoire actuel\n" +
                              "  cd [dossier]    - Change de répertoire (ex: cd Projets)\n" +
                              "  cat [fichier]   - Affiche le contenu d'un fichier .txt\n" +
                              "  clear           - Efface l'historique du terminal\n" +
                              "  help            - Affiche ce menu d'aide",
                        type: "system"
                    });
                    break;

                case 'clear':
                    setHistory([]); setInput(""); return;

                default:
                    if (cmd) newHistory.push({ text: `'${cmd}' n'est pas reconnu.`, type: "error" });
            }
            setHistory(newHistory);
            setInput("");
        }
    };

    useEffect(() => { terminalEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [history]);

    return (
        <div className="terminal-container" onClick={() => document.getElementById('term-input').focus()}>
            <div className="terminal-history">
                {history.map((line, i) => (
                    <div key={i} className={`terminal-line ${line.type}`} style={{ whiteSpace: 'pre-wrap' }}>{line.text}</div>
                ))}
            </div>
            <div className="terminal-input-line">
                <span className="terminal-prompt">C:\Users\Jayson{currentDir === '/' ? '' : '\\' + currentDir}&gt;</span>
                <input id="term-input" type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleCommand} autoFocus autoComplete="off" />
            </div>
            <div ref={terminalEndRef} />
        </div>
    );
};

export default Terminal;