import React, { useState } from "react";
import Greet from "../content/Greet";
import "../main/Main.css";

export default function Main() {
  const greetings = [
    { message: "Hello", language: "English" },
    { message: "Bonjour", language: "French" },
    { message: "Hola", language: "Spanish" },
    { message: "Ciao", language: "Italian" },
  ];
  const [greeting, setGreeting] = useState(greetings[0]);
  const randomizer = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    setGreeting(greetings[randomIndex]);
  };

  return (
    <div className="container">
      <section className="about" id="about">
        <div className="about-desc">
          <h1 onClick={randomizer}>
            {greeting.message} <span className="wave">👋</span>
          </h1>
          <h2>
            My name is <span className="name">Ashutosh Nikalje</span>
          </h2>
          <p>
            I am a Front-End Developer. My projects are mainly focused on{" "}
            Web-Development. I have a experience working in <span>ReactJs</span>
            , <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and{" "}
            <span>Java</span>. I also have decent knowledge of{" "}
            <span>Angular</span>, <span>PHP</span>, <span>MySQL</span> and{" "}
            <span>Prototyping</span>. My goal is become a full stack developer
          </p>
        </div>
      </section>
    </div>
  );
}
