import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div
      className="nav_ac"
      onClick={themetoggle}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="800"
    >
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
