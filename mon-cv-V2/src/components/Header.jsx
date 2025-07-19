import { useEffect , useState } from "react";
import { AppBar , Box , Button , IconButton , Toolbar , Typography } from "@mui/material";

export const Header = ({ activeSection, onMenuClick, isMobileMenuOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { id: 'about', label: 'À propos' },
        { id: 'education', label: 'Formation' },
        { id: 'experience', label: 'Expérience' },
        { id: 'skills', label: 'Compétences' },
        { id: 'projects', label: 'Projets' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: isScrolled ? 'rgba(18, 18, 18, 0.95)' : 'rgba(18, 18, 18, 0.9)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', mx: 'auto', width: '100%' }}>
                <Typography variant="h6" sx={{ fontFamily: 'monospace', color: '#1976d2' }}>
                    &lt;JaysonDecubber /&gt;
                </Typography>

                {/* Desktop Navigation */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    {sections.map((section) => (
                        <Button
                            key={section.id}
                            color="inherit"
                            onClick={() => scrollToSection(section.id)}
                            sx={{
                                color: activeSection === section.id ? '#1976d2' : '#ffffff',
                                '&:hover': { color: '#1976d2' }
                            }}
                        >
                            {section.label}
                        </Button>
                    ))}
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                    onClick={onMenuClick}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    ☰
                </IconButton>
            </Toolbar>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <Box sx={{
                    display: { xs: 'block', md: 'none' },
                    bgcolor: 'rgba(18, 18, 18, 0.98)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                    py: 1
                }}>
                    {sections.map((section) => (
                        <Button
                            key={section.id}
                            onClick={() => {
                                scrollToSection(section.id);
                                onMenuClick();
                            }}
                            sx={{
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                color: '#ffffff',
                                '&:hover': { color: '#1976d2' }
                            }}
                        >
                            {section.label}
                        </Button>
                    ))}
                </Box>
            )}
        </AppBar>
    );
};