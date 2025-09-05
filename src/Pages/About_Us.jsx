import React from "react";
import ProfileCard from "../components/ProfileCard";
import "../CSS/About_Us.css";

function AboutUs() {
  const teamMembers = [
    {
      image: "/assets/juanCampanella.jpg",
      name: "Juan Jose Campanella",
      profession: "BSc. Systems Engineering",
      description: "Passionate about technology and user experience.",
    },
    {
      image: "/assets/danielMendoza.jpeg",
      name: "Daniel Mendoza",
      profession: "BSc. Systems Engineering",
      description: "Web developer with adaptability, teamwork and focus on efficient and innovative solutions.",
    },
    {
      image: "/assets/vanessaFontalvo.jpg",
      name: "Vanessa Fontalvo",
      profession: "BSc. Systems Engineering",
      description: "Leads projects efficiently with strategic vision.",
    },
  ];

  return (
    <section id="aboutUs" className="about-us">
      <div className="team-background"></div>
      <div className="team-container">
        <header className="team-header">
          <h1 className="Section_team_title">Our Leadership Team</h1>
          <p className="team-description">
            We are a team passionate about innovation and technology, committed to developing
            efficient and creative solutions. We work together to deliver high-quality products,
            combining expertise in frontend, backend, and project management.
          </p>
        </header>
        <div className="profiles-container">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              image={member.image}
              name={member.name}
              profession={member.profession}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
