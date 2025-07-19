import { Avatar , Box , Button , Chip , Container , Grid , Paper , Typography } from "@mui/material";

export const HeroSection = () => {
    return (
        <Box
            id="hero"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #121212 0%, #1a1a2e 50%, #16213e 100%)',
                position: 'relative',
                overflow: 'hidden',
                pt: 8
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={8}>
                        <Chip
                            label="$ whoami"
                            sx={{
                                mb: 3,
                                fontFamily: 'monospace',
                                bgcolor: 'rgba(25, 118, 210, 0.1)',
                                color: '#1976d2',
                                border: '1px solid #1976d2',
                                fontSize: '0.9rem',
                                height: '36px'
                            }}
                        />
                        <Typography
                            variant="h1"
                            sx={{
                                mb: 3,
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                fontWeight: 300,
                                background: 'linear-gradient(45deg, #1976d2, #00bcd4)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            Jayson Decubber
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 4,
                                fontSize: { xs: '1.5rem', md: '2.125rem' },
                                fontWeight: 400,
                                color: '#ffffff'
                            }}
                        >
                            Concepteur Développeur d'Applications
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 4,
                                maxWidth: 600,
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                color: '#e0e0e0'
                            }}
                        >
                            Développeur junior passionné à la recherche d'une alternance en développement informatique niveau bac +4.
                            Je perfectionne mes compétences à travers des projets personnels et explore les technologies modernes.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon="👨‍💻"
                                href="https://github.com/mester-json"
                                target="_blank"
                                sx={{ fontSize: '1rem', py: 1.5, px: 3 }}
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon="📧"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                sx={{ fontSize: '1rem', py: 1.5, px: 3 }}
                            >
                                Contact
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar
                                src="src/assets/1690303954048.png"
                                sx={{
                                    width: { xs: 200, md: 300 },
                                    height: { xs: 200, md: 300 },
                                    border: '4px solid #1976d2',
                                    boxShadow: '0 0 30px rgba(25, 118, 210, 0.3)',
                                    mb: 3
                                }}
                            />
                            <Paper sx={{
                                p: 2.5,
                                fontFamily: 'monospace',
                                fontSize: '0.875rem',
                                color: '#1976d2',
                                bgcolor: 'rgba(25, 118, 210, 0.05)',
                                border: '1px solid rgba(25, 118, 210, 0.2)',
                                borderRadius: 2
                            }}>
                                <div style={{ color: '#00bcd4' }}>const developer = &#123;</div>
                                <div style={{ color: '#ffffff' }}>&nbsp;&nbsp;name: <span style={{ color: '#4caf50' }}>"Jayson"</span>,</div>
                                <div style={{ color: '#ffffff' }}>&nbsp;&nbsp;passion: <span style={{ color: '#4caf50' }}>"coding"</span>,</div>
                                <div style={{ color: '#ffffff' }}>&nbsp;&nbsp;status: <span style={{ color: '#4caf50' }}>"available"</span></div>
                                <div style={{ color: '#00bcd4' }}>&#125;;</div>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};