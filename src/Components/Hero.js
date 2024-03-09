import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const handleBookAppointmentClick = () => {
  //   navigate("/appointment");
  // };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline"> Health comes first</p>
          <h2 className="text-title">
          Patient Information System (PIS)
          </h2>
          <div class="text-descritpion" >
              <p>It  automates the storage, retrieval, and management of patient data. The primary goals include creating a web-based system to collect and store patient information, manage bills, record accurate diagnoses, and track appointments while ensuring the security of sensitive medical data.</p>
          </div>      
          <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
          </div>
      </div>
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
    </div>
  );
}

export default Hero;
