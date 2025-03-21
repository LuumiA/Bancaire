import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      <main className="main bg-dark error-page-main">
        <div className="error-container">
          <h1 className="error-title">404 - Page non trouvée</h1>
          <p className="error-text">
            La page que vous recherchez n'existe pas.
          </p>
          <button className="sign-in-button" onClick={() => navigate("/")}>
            Retour à l'accueil
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
