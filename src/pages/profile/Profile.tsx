import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Account from "../../components/account/Account";
import ProfileModif from "../../components/profilModif/ProfilModif";
// Données des comptes
const accountsData = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];
const Profile: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <ProfileModif userName="Juko" firstName="Nicolas" />
        <section>
          <h2 className="sr-only">Accounts</h2>
          <Account accounts={accountsData} />
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Profile;
