import React, {useEffect, useState} from "react";
import "../CSS/Service.css";

function Service({image, serviceTitle, description}) {
    const[isVisible, setIsVisible] = useState(false);
    const infoRef = React.useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if(infoRef.current) {
                const top = infoRef.current.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) {
                    setIsVisible(true);
                  }
            }
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      return (
        <div ref={infoRef} className={`info-service ${isVisible ? "isVisible" : ""}`}>
            <div className="service-desc">
                <h2 className="service-name">{serviceTitle}</h2>
                <p className="service-description">{description}</p>
            </div>
            <img src={image} alt={serviceTitle} className="info-service"/>
        </div>
      );
}

  export default Service;