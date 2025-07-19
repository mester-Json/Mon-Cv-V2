import { Box , Card , CardContent , Chip , Container , Grid , Typography } from "@mui/material";

export  const ExperienceSection = () => {
    const experiences = [
        {
            title: "Alternance CDA",
            duration: "1 an",
            company: "Dawan",
            location: "Hybride",
            tasks: ["App SIRH", "React", "Backend Java Spring", "Automatisation de tâches pour les RH"]
        },
        {
            title: "Stage Dev Full Stack",
            duration: "1 Mois",
            company: "Hyzen",
            location: "Télétravail",
            tasks: ["App de location de serveurs", "React", "Backend Node.js", "Interface De location de server et d'ajout de money avec Paypal"]
        },
        {
            title: "Stage Dev Web",
            duration: "2 Mois",
            company: "Mairie de Seclin",
            location: "Seclin 59113",
            tasks: ["App de gestion de tickets", "React", "Backend Node.js", "Interface permettant l'envoi de tickets"]
        },
        {
            title: "Stages Mission Locale",
            duration: "Variable",
            company: "Mission Locale",
            location: "Local",
            tasks: ["Découverte du milieu professionnel", "Orientation"]
        },
        {
            title: "Stage Mécanique",
            duration: "3 semaines",
            company: "Auto System",
            location: "Billy-Montigny 62420",
            tasks: ["Maintenance automobile", "Diagnostic", "Réparation"]
        }
    ];

    return (
        <Box id="experience" sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
                    💼 Expériences
                </Typography>
                <Grid container spacing={3}>
                    {experiences.map((exp, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card sx={{
                                height: '100%',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0px 8px 25px rgba(25, 118, 210, 0.15)'
                                }
                            }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                        <Box sx={{ flexGrow: 1, mr: 3 }}>
                                            <Typography variant="h6" color="primary">
                                                {exp.title}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ flexShrink: 0 }}>
                                            <Chip
                                                label={exp.duration}
                                                color="primary"
                                                size="small"
                                                sx={{
                                                    fontSize: '0.75rem',
                                                    height: '24px',
                                                    minWidth: '60px'
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                        {exp.company}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {exp.location}
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                                        {exp.tasks.map((task, taskIndex) => (
                                            <Typography
                                                component="li"
                                                key={taskIndex}
                                                variant="body2"
                                                sx={{ mb: 0.5, color: 'text.primary' }}
                                            >
                                                {task}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
