import React, { useState, useEffect } from "react";
import LightButton from "../../assets/light-mode-button.jpg";
import DarkButton from "../../assets/dark-mode-button.jpg";

const DarkMode = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}, [theme]);


  return <div className="relative">
    <img src={LightButton} alt="Light Button" onClick={()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }}
    className={`w-12 cursor-pointer rounded-full drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
        duration-300 absolute right-0 z-10 ${theme == "dark"?"opacity-0" : "opacity-100"}`} 
     />
     <img src={DarkButton} alt="Dark Button" onClick={()=>{
        setTheme(theme === "light" ? "dark" : "light");
     }} 
     className="w-12 cursor-pointer rounded-full drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
        duration-300"
     />
  </div>
};

export default DarkMode;
