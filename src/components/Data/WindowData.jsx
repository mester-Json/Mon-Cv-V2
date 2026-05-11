import React from "react";
import FileExplorer from "../Apps/FileExplorer";
import MailApp from "../Apps/MailApp.jsx";
import EDUCATION_DATA from "./EducationData.jsx";
import XP_DATA from "./ExperienceData.jsx";
import SKILLS_DATA from "./SkillsData.jsx";
import ProfileData from "./ProfileData.jsx";
import InterestData from "./InterestData.jsx";
import SettingsData from "./SettingsData.jsx";
import PrivacyData from "./PrivacyData.jsx";
import { FileText, FolderOpen, Folder, Mail, Terminal, Settings, Heart } from 'lucide-react'


const WINDOW_DATA = {

    NOTEPAD: {
        title: "Bloc-notes",
        icon: <FileText size={16} strokeWidth={1} />,
        width: 600,
        height: 450,
        statusBar: true,
        content: (props) => (
            <Notepad content={props.content || props.children} />
        )
    },

    PROFILE: {
        title: " MonProfil.txt " ,
        icon: <FileText size={35} strokeWidth={1} /> ,
        content: (props) => <ProfileData openWindow={props.openWindow}/> ,
        statusBar: true
    } ,

    SKILLS: {
        title: "Compétences" ,
        icon: <FolderOpen size={35} strokeWidth={1} />,
        content: ({openWindow}) => (
            <FileExplorer folderName="Compétences" data={SKILLS_DATA} openWindow={openWindow}/>
        )
    } ,

    XP: {
        title: "Explorateur - Expériences Professionnelles" ,
        icon: <FolderOpen size={35} strokeWidth={1} /> ,
        content: ({openWindow}) => (
            <FileExplorer folderName="Expériences Professionnelles" data={XP_DATA} openWindow={openWindow}/>
        )
    } ,

    EDUCATION: {
        title: "Explorateur - Diplômes et Formations" ,
        icon: <FolderOpen size={35} strokeWidth={1}/> ,
        content: ({openWindow}) => (
            <FileExplorer folderName="Diplômes et Formations" data={EDUCATION_DATA} openWindow={openWindow}/>
        )
    } ,

    PROJECTS: {
        title: "Explorateur de fichiers - Mes Projets Personnels",
        icon: <FolderOpen size={35} strokeWidth={1}/>,
        content: (props) => (
            <div className="projects-container">
                {props.allProjects && props.allProjects.length > 0 ? (
                    props.allProjects.map(repo => (
                        <div key={repo.id} className="project-item">
                            <Folder size={16} />
                            <span>{repo.name}</span>
                        </div>
                    ))
                ) : (
                    <p>Chargement des projets GitHub...</p>
                )}
            </div>
        )
    },

    MAIL: {
        title: "Email" ,
        icon: <Mail size={35} strokeWidth={1} /> ,
        content: () => <MailApp/>
    } ,

    TERMINAL: {
        title: "Terminal" ,
        icon: <Terminal size={35} strokeWidth={1} /> ,
        content: () => (
            <div className="terminal-container">
                <p>Microsoft Windows [version 10.0.22631.3447]</p>
                <p>(c) Jayson Corp. Tous droits réservés.</p>
                <br/>
                <p>
                    <span>C:\Users\Jayson&gt;</span>
                    <span className="terminal-cursor">_</span>
                </p>
            </div>
        )
    } ,

    SETTINGS: {
        title: "Paramètres - Personnalisation" ,
        icon: <Settings size={35} strokeWidth={1} /> ,
        content: (props) =>
            <SettingsData {...props}/>
    },

    INTERESTS: {
        title: "Intérêts" ,
        icon: <FolderOpen size={35} strokeWidth={1} /> ,
        content: (props) => <InterestData openWindow={props.openWindow}/> ,
        statusBar: true
    },
    PRIVACY: {
        title: "Politique de Confidentialité.txt",
        icon: <FileText size={16} strokeWidth={1} />,
        width: 600,
        height: 450,
        statusBar: true,
        content: () => PrivacyData
    },
}
export default WINDOW_DATA;