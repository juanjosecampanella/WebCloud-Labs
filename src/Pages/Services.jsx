import React from "react";
import Services from "../components/Services.jsx";
import "../CSS/Service.css";

function servicesInfo() {
  const Info = [
    {
      image: "/assets/softwareDevelopment.PNG",
      serviceTitle: "Software Development",
      description: "We develop software applications that will boost your business.",
    },
    {
      image: "/assets/dataScience.PNG",
      serviceTitle: "Data Science",
      description: "We analyze the information provided and make reports based on the data for a better approach to your business.",
    },
  ];

  return (
    <section id="services" className="new-section">
      <div className="container">
        <header className="header-info">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            We develop customized software solutions to enhance efficiency and drive business growth.
            Our team creates everything from intuitive interfaces to robust backend systems,
            ensuring innovative and high-performance digital products.
          </p>
        </header>

        <div className="services-info">
          {Info.map((info, index) => (
            <Services
              key={index}
              image={info.image}
              serviceTitle={info.serviceTitle}
              description={info.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


export default servicesInfo;
