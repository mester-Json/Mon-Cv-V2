import { useState } from "react";
import { Box , Button , Card , CardContent , Container , Grid , IconButton , Paper , Typography } from "@mui/material";

export const ContactSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', type: 'success' });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
        setSnackbar({ open: true, message: 'Message envoyé ! Je vous recontacterai bientôt.', type: 'success' });
        setIsModalOpen(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <Box id="contact" sx={{ py: 10, bgcolor: '#1e1e1e' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
                    📬 Contact
                </Typography>
                <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={8}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
                                    Parlons de votre projet !
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                                    Je suis actuellement à la recherche d'une alternance en développement informatique.
                                    N'hésitez pas à me contacter pour discuter d'opportunités ou de projets.
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <span style={{ fontSize: '1.5rem' }}>📧</span>
                                        <Box>
                                            <Typography variant="subtitle2" color="primary">Email</Typography>
                                            <Typography variant="body2">decubberjayson@gmail.com</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <span style={{ fontSize: '1.5rem' }}>📞</span>
                                        <Box>
                                            <Typography variant="subtitle2" color="primary">Téléphone</Typography>
                                            <Typography variant="body2">07.63.88.03.95</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <span style={{ fontSize: '1.5rem' }}>💻</span>
                                        <Box>
                                            <Typography variant="subtitle2" color="primary">GitHub</Typography>
                                            <Typography variant="body2">github.com/mester-json</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent sx={{ textAlign: 'center', py: 4 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon="📨"
                                    onClick={() => setIsModalOpen(true)}
                                    sx={{ fontSize: '1.1rem', py: 1.5, px: 3 }}
                                >
                                    Envoyer un message
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Modal Material-UI Style */}
            {isModalOpen && (
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1300,
                    backdropFilter: 'blur(4px)'
                }} onClick={() => setIsModalOpen(false)}>
                    <Paper sx={{
                        width: '90%',
                        maxWidth: 500,
                        m: 2,
                        borderRadius: 2,
                        overflow: 'hidden'
                    }} onClick={(e) => e.stopPropagation()}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 3,
                            borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
                        }}>
                            <Typography variant="h6" color="primary">Me contacter</Typography>
                            <IconButton onClick={() => setIsModalOpen(false)}>
                                ✕
                            </IconButton>
                        </Box>
                        <Box sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Votre nom"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '12px 16px',
                                            border: '1px solid rgba(255, 255, 255, 0.23)',
                                            borderRadius: '4px',
                                            backgroundColor: '#2a2a2a',
                                            color: '#ffffff',
                                            fontSize: '1rem',
                                            fontFamily: 'inherit'
                                        }}
                                        required
                                    />
                                </Box>
                                <Box>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Votre email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '12px 16px',
                                            border: '1px solid rgba(255, 255, 255, 0.23)',
                                            borderRadius: '4px',
                                            backgroundColor: '#2a2a2a',
                                            color: '#ffffff',
                                            fontSize: '1rem',
                                            fontFamily: 'inherit'
                                        }}
                                        required
                                    />
                                </Box>
                                <Box>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Sujet"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '12px 16px',
                                            border: '1px solid rgba(255, 255, 255, 0.23)',
                                            borderRadius: '4px',
                                            backgroundColor: '#2a2a2a',
                                            color: '#ffffff',
                                            fontSize: '1rem',
                                            fontFamily: 'inherit'
                                        }}
                                        required
                                    />
                                </Box>
                                <Box>
                  <textarea
                      name="message"
                      placeholder="Votre message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid rgba(255, 255, 255, 0.23)',
                          borderRadius: '4px',
                          backgroundColor: '#2a2a2a',
                          color: '#ffffff',
                          fontSize: '1rem',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          minHeight: '120px'
                      }}
                      required
                  />
                                </Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon="🚀"
                                    onClick={handleSubmit}
                                    sx={{ mt: 1 }}
                                >
                                    Envoyer
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            )}

            {/* Snackbar Material-UI Style */}
            {snackbar.open && (
                <Box sx={{
                    position: 'fixed',
                    bottom: 24,
                    left: 24,
                    right: 24,
                    zIndex: 1400,
                    maxWidth: 600,
                    mx: 'auto'
                }}>
                    <Paper sx={{
                        p: 2,
                        bgcolor: snackbar.type === 'success' ? '#4caf50' : '#f44336',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography>{snackbar.message}</Typography>
                        <IconButton
                            size="small"
                            onClick={() => setSnackbar({ ...snackbar, open: false })}
                            sx={{ color: '#ffffff' }}
                        >
                            ✕
                        </IconButton>
                    </Paper>
                </Box>
            )}
        </Box>
    );
};