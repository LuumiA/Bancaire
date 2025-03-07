import React from "react";
import "./EditUserInfo.scss";

export const EditUserInfo: React.FC = () => {
  return (
    <form className="edit-user-info">
      <h1>Edit user info</h1>
      <div className="form-element">
        <label htmlFor="username">User name:</label>
        <input type="text" id="username" value="" readOnly />
      </div>
      <div className="form-element">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" value="" disabled />
      </div>
      <div className="form-element">
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" value="" disabled />
      </div>
      <div className="button-container">
        <button type="button" className="save-button">
          Save
        </button>
        <button type="button" className="cancel-button">
          Cancel
        </button>
      </div>
    </form>
  );
};
