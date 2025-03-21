import React from "react";

interface FeatureProps {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, alt, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
