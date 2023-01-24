import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [theme, setTheme] = useState(true);

  function changeTheme() {
    if (theme) {
      setTheme(document.body.classList.replace("dark-theme", "light-theme"));
      document.getElementById("icon").innerHTML = "light_mode";
    } else {
      setTheme(document.body.classList.replace("light-theme", "dark-theme"));
      document.getElementById("icon").innerHTML = "dark_mode";
    }
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="/">ASHUTOSH.</a>
        </div>

        <div className="toggle">
          <button className="switch">
            <span
              className="material-symbols-outlined"
              onClick={changeTheme}
              id="icon"
            >
              dark_mode
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
