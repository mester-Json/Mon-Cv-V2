import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';

const RECIPIENT_EMAIL = 'decubberjayson@gmail.com';

const SERVICE_ID = 'service_2w2ukv9';
const TEMPLATE_ID = 'template_tg75k14';
const PUBLIC_KEY = 'SGbl2DwG5zNA_zMMo';


const MailApp = () => {
    const [senderEmail, setSenderEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (status === 'sending') return;

        if (!senderEmail || !subject || !body) {
            setStatus('error');
            return;
        }

        setStatus('sending');

        const templateParams = {
            from_name: 'Visiteur du CV',
            from_email: senderEmail,
            to_email: RECIPIENT_EMAIL,
            subject: subject,
            message: body,
            reply_to: senderEmail,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('EmailJS Success!', response.status, response.text);
                setStatus('success');
                setSenderEmail('');
                setSubject('');
                setBody('');
            })
            .catch((err) => {
                console.error('EmailJS Failed:', err);
                setStatus('error');
            });
    };

    const getStatusMessage = () => {
        switch (status) {
            case 'sending':
                return { text: "Envoi en cours...", color: '#0078d4' };
            case 'success':
                return { text: "Message envoyé avec succès !", color: 'green' };
            case 'error':
                return { text: "Erreur lors de l'envoi. Veuillez vérifier les champs ou réessayer.", color: 'red' };
            default:
                return null;
        }
    };

    const statusMessage = getStatusMessage();

    return (
        <div className="mail-app-form">
            <h3 style={{ marginBottom: '20px' }}>Contacter Jayson Decubber</h3>

            {statusMessage && (
                <p style={{ marginTop: '10px', marginBottom: '15px', fontWeight: 'bold', color: statusMessage.color }}>
                    {statusMessage.text}
                </p>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="recipientEmail" style={{ fontWeight: 'bold' }}>Destinataire (Jayson)</label>
                    <input
                        type="email"
                        id="recipientEmail"
                        value={RECIPIENT_EMAIL}
                        readOnly
                        style={{ padding: '8px', border: '1px solid var(--win11-border)', backgroundColor: 'var(--win11-window-bg-secondary, #e0e0e0)', color: 'var(--win11-text)', cursor: 'default' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="senderEmail" style={{ fontWeight: 'bold' }}>Votre Email *</label>
                    <input
                        type="email"
                        id="senderEmail"
                        value={senderEmail}
                        onChange={(e) => { setSenderEmail(e.target.value); setStatus('idle'); }}
                        placeholder="votre.nom@example.com"
                        required
                        style={{ padding: '8px', border: '1px solid var(--win11-border)', backgroundColor: 'var(--win11-window-bg)', color: 'var(--win11-text)' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="subject" style={{ fontWeight: 'bold' }}>Objet *</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value); setStatus('idle'); }}
                        required
                        style={{ padding: '8px', border: '1px solid var(--win11-border)', backgroundColor: 'var(--win11-window-bg)', color: 'var(--win11-text)' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="body" style={{ fontWeight: 'bold' }}>Message *</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => { setBody(e.target.value); setStatus('idle'); }}
                        rows="8"
                        required
                        style={{ padding: '8px', border: '1px solid var(--win11-border)', backgroundColor: 'var(--win11-window-bg)', color: 'var(--win11-text)', resize: 'vertical' }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: status === 'sending' ? '#005a9e' : '#0078d4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    {status === 'sending' ? 'Envoi...' : 'Envoyer'}
                </button>

            </form>
        </div>
    );
};

export default MailApp;