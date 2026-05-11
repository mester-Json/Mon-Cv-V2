import WINDOW_DATA from "./WindowData.jsx";

const desktopIconsData = {
    PROFILE_ICON: { id: 'PROFILE_ICON', label: 'MonProfil.txt', icon: WINDOW_DATA.PROFILE.icon, appKey: 'PROFILE', initialX: 20, initialY: 20 },
    SKILLS_ICON: { id: 'SKILLS_ICON', label: 'Compétences', icon: WINDOW_DATA.SKILLS.icon, appKey: 'SKILLS', initialX: 20, initialY: 130 },
    XP_ICON: { id: 'XP_ICON', label: 'Expériences', icon: WINDOW_DATA.XP.icon, appKey: 'XP', initialX: 20, initialY: 240 },
    SETTINGS_ICON: { id: 'SETTINGS_ICON', label: 'Paramètres', icon: WINDOW_DATA.SETTINGS.icon, appKey: 'SETTINGS', initialX: 20, initialY: 350 },
    TERMINAL_ICON: { id: 'TERMINAL_ICON', label: 'Terminal', icon: WINDOW_DATA.TERMINAL.icon, appKey: 'TERMINAL', initialX: 20, initialY: 460 },
};

export default desktopIconsData;

