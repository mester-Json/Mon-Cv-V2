import { Box , Card , CardContent , Chip , Container , Grid , Typography } from "@mui/material";

export const ProjectsSection = () => {
    const projects = [
        {
            title: "CV Interactif v2",
            description: "Refonte complète de mon CV en React avec un design moderne et Material-UI",
            tech: ["React", "Material-UI", "Responsive"],
            status: "En cours"
        },
        {
            title: "Application Web Full Stack",
            description: "Projet de fin de formation avec authentification et CRUD complet",
            tech: ["PHP", "MySQL", "JavaScript"],
            status: "Terminé"
        },
        {
            title: "Site Web Vitrine",
            description: "Site institutionnel développé lors du stage en mairie avec CMS",
            tech: ["HTML5", "CSS3", "PHP"],
            status: "Déployé"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'En cours': return '#ff9800';
            case 'Terminé': return '#4caf50';
            case 'Déployé': return '#2196f3';
            default: return '#757575';
        }
    };

    return (
        <Box id="projects" sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
                    🚀 Projets
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0px 8px 25px rgba(25, 118, 210, 0.15)'
                                }
                            }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                        <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
                                            {project.title}
                                        </Typography>
                                        <Chip
                                            label={project.status}
                                            sx={{
                                                bgcolor: getStatusColor(project.status),
                                                color: '#ffffff',
                                                fontSize: '0.75rem'
                                            }}
                                        />
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {project.tech.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    bgcolor: '#424242',
                                                    color: '#ffffff',
                                                    fontSize: '0.75rem'
                                                }}
                                            />
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