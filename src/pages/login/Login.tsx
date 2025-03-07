import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { LoginForm } from "../../components/loginForm/LoginForm";

const Login: React.FC = () => {
  return (
    <>
      <body>
        <Navigation />
        <main className="main-login bg-dark">
          <LoginForm />
        </main>
        <Footer />
      </body>
    </>
  );
};
export default Login;
