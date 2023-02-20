import React, { useState } from "react";
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
            Web-Development. I have a experience working in <b>ReactJs</b>,{" "}
            <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> and <b>Java</b>. I also
            have decent knowledge of <b>Angular</b>, <b>PHP</b>, <b>MySQL</b>{" "}
            and <b>Prototyping</b>. My goal is become a full stack developer
          </p>
        </div>
      </section>

      <div className="socials">
        <a href="https://www.linkedin.com/in/ashutoshnikalje31/">
          <i class="bi bi-linkedin fa-3x icons icon-1"></i>
        </a>
        <a href="https://github.com/nikashu3110">
          {" "}
          <i class="bi bi-github fa-3x icons icon-2 "></i>
        </a>
        <a href="">
          {" "}
          <i class="bi bi-twitter fa-3x icons icon-3"></i>
        </a>
      </div>
    </div>
  );
}
