import React, { useEffect, useState } from "react";
import "../CSS/ProfileCard.css";

function ProfileCard({ image, name, profession, description }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const top = cardRef.current.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={cardRef} className={`profile-card ${isVisible ? "visible" : ""}`}>
      <img src={image} alt={name} className="profile-image" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <h3 className="profile-profession">{profession}</h3>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
