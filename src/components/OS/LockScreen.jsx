import { useState } from 'react';
import userIcon from '../../assets/user.png';
import win11Default from '../../assets/wallpapers/win11-default.png';
import win11Dark from '../../assets/wallpapers/win11-dark.png';

const LockScreen = ({ onLogin, theme }) => {
    const [isInputVisible, setIsInputVisible] = useState(false);



    const lockScreenBg = theme === 'dark' ? win11Dark : win11Default;

    return (
        <div
            className="lock-screen"
            style={{
                backgroundImage: `url(${lockScreenBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            onClick={() => !isInputVisible && setIsInputVisible(true)}
        >
            <div className="login-form">
                <img src={userIcon} alt="Profile" className="user-icon" />
                <h2>Jayson Decubber</h2>


                    <div className="login-action">
                        <button
                            className="login-button"
                            onClick={onLogin}
                            autoFocus
                        >
                            Se connecter
                        </button>
                        <p className="login-message">
                            Bienvenue sur mon portfolio
                        </p>
                    </div>

            </div>
        </div>
    );
};

export default LockScreen;