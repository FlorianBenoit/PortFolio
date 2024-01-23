import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [isSticky, setSticky] = useState(false);

  const handleClickScroll = (elementSelector) => {
    const element = document.querySelector(elementSelector);
    if (element) {
      // Will scroll smoothly to the top of the specified section
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with selector '${elementSelector}' not found.`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${isSticky ? "sticky" : ""}`}>
      <div className='nav-elements'>
        <div className='nav-link'>
          <button className='button' onClick={() => handleClickScroll(".banner")}>
            Acceuil
          </button>
          <button className='button' onClick={() => handleClickScroll(".about")}>
            Profil
          </button>
          <button className='button' onClick={() => handleClickScroll(".comp")}>
            Compétences
          </button>
          <button className='button' onClick={() => handleClickScroll(".port")}>
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
