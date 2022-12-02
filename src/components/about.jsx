import React from "react";
import styles from "../styles/About.module.css";
import hero from "../img/aesthetic.jpg";

function About() {
  return (
    <section className={styles.about_section} id="about">
      <h1>About</h1>
      <div className={styles.about}>
        <div className={styles.about_container}>
          <img className={styles.about_img} src={hero} alt="" />
        </div>
        <div className={styles.about_info}>
          <p>
            Hello , My name is Nazarov Nurmukhammad and I'm Front-End developer
            . I'm 16 years old and I'm from Uzbekistan moreover live in Tashkent
            . In 2021 , I became interested with web-programming and started
            basic course . In the beginning , everything was so difficult for me
            , but step by step I started to understand it and finished course
            with a good result .
          </p>
          <br />
          <p>
            I liked it very much and quickly started learning more . I started
            learning JavaScript and realized that it is a very complex
            programming language , but i continued to learn . And now I'm
            spending time to learn new technologies like ( Firebase , MongoDb
            .etc ) .
            <p />
            <br />
            And I'm developing on this way . And one of my goals is to bring
            programming to a high level and find a dream job .
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
