import { Box , Card , CardContent , Chip , Container , Typography } from "@mui/material";

export const EducationSection = () => {
    const formations = [
        { title: "CDA", year: "2024-2025", school: "Dawan", level: "Bac +3", color: "#1976d2" },
        { title: "Dev Full Stack", year: "2024", school: "Afpa", level: "Monter de compétence", color: "#388e3c" },
        { title: "Dev Web , Web Mobile", year: "2022-2023", school: "Pop'school", level: "Bac +2", color: "#f57c00" },
        { title: "CAP Mécanique Auto", year: "2020-2021", school: "Garage Cappart", level: "CAP", color: "#7b1fa2" },
        { title: "Bac Pro MEI", year: "2018-2019", school: "Lycée Pasteur", level: "Bac Pro", color: "#d32f2f" }
    ];

    return (
        <Box id="education" sx={{ py: 10, bgcolor: '#1e1e1e' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
                    🎓 Formation
                </Typography>
                <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                    {formations.map((formation, index) => (
                        <Box key={index} sx={{ display: 'flex', mb: 4, position: 'relative' }}>
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    bgcolor: formation.color,
                                    mt: 1,
                                    mr: 3,
                                    flexShrink: 0
                                }}
                            />
                            <Card sx={{ flexGrow: 1 }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: formation.color, mb: 0.5 }}>
                                        {formation.title}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: formation.color, mb: 0.5 }}>
                                        {formation.school}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Chip label={formation.year} variant="outlined" color="primary" />
                                        <Chip label={formation.level} variant="outlined" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};