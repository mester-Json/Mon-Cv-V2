import { Box , Card , CardContent , Container , Grid , Paper , Typography } from "@mui/material";

export const AboutSection = () => {
    return (
        <Box id="about" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
                    👨‍💻 À propos de moi
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent sx={{ p: 4 }}>
                                <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 2 }}>
                                    Hello World ! Je m'appelle Jayson Decubber, un développeur junior enthousiaste. Actuellement,
                                    je suis à la recherche d'une entreprise dans le cadre de mon alternance en développement informatique niveau bac +4.
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                                    Je consacre mon temps à travailler sur divers projets personnels afin de parfaire mes compétences et d'en
                                    acquérir de nouvelles. Si vous souhaitez en savoir plus sur mon parcours, n'hésitez pas à consulter mes réalisations.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>Informations</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <span style={{ marginRight: 8 }}>📍</span>
                                    <Typography variant="body2">Billy-Montigny (62420)</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <span style={{ marginRight: 8 }}>📞</span>
                                    <Typography variant="body2">07.63.88.03.95</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <span style={{ marginRight: 8 }}>📧</span>
                                    <Typography variant="body2">decubberjayson@gmail.com</Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    Né le 05/08/2002
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};