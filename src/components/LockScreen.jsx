import React, { useState } from 'react';
import userIcon from '../assets/user.png';
import lockScreenBg from '../assets/wallpapers/win11-default.jpg';
import '../index.css';

const LockScreen = ({ onLogin, theme }) => {
    const [password, setPassword] = useState('');
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [error, setError] = useState('');

    const correctPassword = "1234";

    const handleUnlock = () => {
        setIsInputVisible(true);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setError('');
            onLogin();
        } else {
            setError("Mot de passe incorrect. (Hint: 1234)");
            setPassword('');
        }
    };

    return (
        <div
            className="lock-screen"
            style={{
                backgroundImage: `url(${lockScreenBg})`,
                filter: theme === 'dark' ? 'brightness(0.8)' : 'none',
            }}
        >
            <div className="login-form">
                <img src={userIcon} alt="Profile" />
                <h2>Jayson Decubber</h2>

                {!isInputVisible ? (
                    <p style={{ cursor: 'pointer', color: theme === 'dark' ? 'white' : '#333' }} onClick={handleUnlock}>
                        Cliquez ou appuyez sur Entrée pour déverrouiller
                    </p>
                ) : (
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            className="password-input"
                            autoFocus
                        />
                        <button type="submit" className="login-button">
                            Se connecter
                        </button>
                        {error && <p style={{ color: '#e81123', marginTop: '10px', fontSize: '0.9rem' }}>{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default LockScreen;