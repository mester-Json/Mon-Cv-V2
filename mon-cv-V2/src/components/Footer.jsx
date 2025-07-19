import { useEffect , useState } from "react";
import { Box , Button , Container , Fab , Typography } from "@mui/material";

export const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openGmail = () => {
        const subject = "Contact depuis votre CV";
        const body = "Bonjour Jayson,%0D%0A%0D%0AJe vous contacte concernant...";
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=decubberjayson@gmail.com&su=${subject}&body=${body}`;

        // Essaie d'ouvrir Gmail en premier, sinon fallback vers mailto
        try {
            window.open(gmailUrl, '_blank');
        } catch (error) {
            window.location.href = `mailto:decubberjayson@gmail.com?subject=${subject}&body=${body}`;
        }
    };

    return (
        <>
            <Box component="footer" sx={{
                py: 4,
                bgcolor: '#0a0a0a',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 3
                    }}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant="body1" sx={{
                                mb: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                gap: 1,
                                color: '#ffffff'
                            }}>
                                Développé avec <span style={{ color: '#f44336' }}>❤️</span> par Jayson Decubber
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                                © 2025 - Tous droits réservés
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Button
                                variant="outlined"
                                size="small"
                                href="https://github.com/mester-json"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    borderColor: '#1976d2',
                                    color: '#1976d2',
                                    '&:hover': {
                                        borderColor: '#1565c0',
                                        bgcolor: 'rgba(25, 118, 210, 0.08)'
                                    }
                                }}
                            >
                                GITHUB
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                onClick={openGmail}
                                sx={{
                                    borderColor: '#1976d2',
                                    color: '#1976d2',
                                    '&:hover': {
                                        borderColor: '#1565c0',
                                        bgcolor: 'rgba(25, 118, 210, 0.08)'
                                    }
                                }}
                            >
                                EMAIL
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                href="tel:0763880395"
                                sx={{
                                    borderColor: '#1976d2',
                                    color: '#1976d2',
                                    '&:hover': {
                                        borderColor: '#1565c0',
                                        bgcolor: 'rgba(25, 118, 210, 0.08)'
                                    }
                                }}
                            >
                                TÉLÉPHONE
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {showScrollTop && (
                <Fab onClick={scrollToTop}>
                    ↑
                </Fab>
            )}
        </>
    );
};
