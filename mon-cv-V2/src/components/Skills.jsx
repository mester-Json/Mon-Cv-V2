import { Box , Card , CardContent , Chip , Container , Grid , Typography } from "@mui/material";

export const SkillsSection = () => {
    const skillCategories = {
        "Frontend": {
            skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
            icon: "🎨"
        },
        "Backend": {
            skills: ["PHP", "Python", "Java", "Spring Boot", "Symfony"],
            icon: "⚙️"
        },
        "Base de données": {
            skills: ["SQL", "MySQL", "PostgreSQL"],
            icon: "🗄️"
        },
        "Outils & OS": {
            skills: ["Git", "Linux/Debian", "Terminal", "VS Code"],
            icon: "🛠️"
        }
    };

    return (
        <Box id="skills" sx={{ py: 10, bgcolor: '#1e1e1e' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
                    💻 Compétences
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={4} sx={{ maxWidth: '800px' }}>
                        {Object.entries(skillCategories).map(([category, data]) => (
                            <Grid item xs={12} md={6} key={category}>
                                <Card sx={{ height: '100%' }}>
                                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                        <Typography variant="h6" sx={{
                                            mb: 3,
                                            color: 'primary.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 1
                                        }}>
                                            <span style={{ fontSize: '1.5rem' }}>{data.icon}</span>
                                            {category}
                                        </Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            {data.skills.map((skill) => (
                                                <Chip
                                                    key={skill}
                                                    label={skill}
                                                    variant="outlined"
                                                    color="primary"
                                                    sx={{
                                                        '&:hover': {
                                                            bgcolor: 'primary.main',
                                                            color: '#000000'
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};
