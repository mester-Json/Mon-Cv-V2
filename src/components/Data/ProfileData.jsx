import Notepad from "../Apps/Notepad.jsx";

const ProfileData = () => {
    return (
        <Notepad content={
            <div className="text-body">
                <h3>Mon Profil</h3>
                <p><strong>Développeur Full Stack Java/React</strong></p>
                <p>
                    Développeur passionné avec un an d'expérience (incluant l'alternance), spécialisé dans la création d'applications métiers
                    sécurisées. Mobile sur Lille ou Nantes, vous maîtrisez l'ensemble du cycle de développement,
                    de la conception d'interfaces utilisateur à la mise en place d'architectures backend robustes.
                </p>
                <p>
                    <strong>Expertise Technique :</strong> Maîtrise de React (JS/TS), Java Spring Boot, Node.js, Express et PHP/Symfony. 
                    Gestion de bases de données SQL/NoSQL et outils DevOps (Docker, GitLab CI).
                </p>
                <p>
                    <strong>Expériences Clés :</strong> Alternance chez Dawan (SIRH), Stage chez Hizen dev (E-commerce & API PayPal), Stage à la Mairie de Seclin.
                </p>
                <p><a href="https://www.linkedin.com/in/package-lock-json/" target="_blank" rel="noopener noreferrer">Mon LinkedIn</a></p>
            </div>
        } />
    );
};

export default ProfileData;