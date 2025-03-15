import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Account from "../../components/account/Account";
import ProfileModif from "../../components/profilModif/ProfilModif";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchUserProfile } from "../../redux/feature/authActions";
import { EditUserInfo } from "../../components/editUserInfo/EditUserInfo";
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
  const dispatch: AppDispatch = useDispatch();
  // We retrieve the user profile and profile edit state from the Redux store
  const { isEditingProfile, user, error, loading } = useSelector(
    (state: RootState) => state.auth
  );
  // We set local state for displaying user information
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  // Effect to fetch user profile when the component mounts
  useEffect(() => {
    // We dispatch fetchUserProfile to load the profile on startup
    dispatch(fetchUserProfile());
  }, [dispatch]);
  // Effect to update local fields when the userProfile changes
  useEffect(() => {
    if (user) {
      setUserName(user.userName || "");
      setFirstName(user.firstName || "");
    }
  }, [user]);

  if (loading) return <p>Loading accounts...</p>;
  if (error) return <p>Error loading accounts: {error}</p>;

  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        {isEditingProfile ? (
          <EditUserInfo />
        ) : (
          <ProfileModif userName={userName} firstName={firstName} />
        )}
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
