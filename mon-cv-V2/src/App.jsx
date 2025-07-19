import { Header } from "./components/Header.jsx";
import { HeroSection } from "./components/Hero.jsx";

import { Footer } from "./components/Footer.jsx";
import '../src/styles/index.css'
import { useEffect , useState } from "react";
import { AboutSection } from "./components/About.jsx";
import { EducationSection } from "./components/Education.jsx";
import { ExperienceSection } from "./components/Experience.jsx";
import { SkillsSection } from "./components/Skills.jsx";
import { ProjectsSection } from "./components/Projects.jsx";
import { ContactSection } from "./components/Contact.jsx";
import { Box } from "@mui/material";

function App() {
        const [activeSection, setActiveSection] = useState('hero');
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

        // Détection de la section active
        useEffect(() => {
            const handleScroll = () => {
                const sections = ['hero', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
                const scrollPosition = window.scrollY + 100;

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const toggleMobileMenu = () => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
        };

        return (
            <Box sx={{ bgcolor: '#121212', color: '#ffffff', minHeight: '100vh' }}>
                <Header
                    activeSection={activeSection}
                    onMenuClick={toggleMobileMenu}
                    isMobileMenuOpen={isMobileMenuOpen}
                />

                <Box component="main">
                    <HeroSection />
                    <AboutSection />
                    <EducationSection />
                    <ExperienceSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </Box>

                <Footer />
            </Box>
        );
    }

export default App
