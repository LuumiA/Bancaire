import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { LoginForm } from "../../components/loginForm/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <Navigation />
      <main className="main-login bg-dark">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};
export default Login;
