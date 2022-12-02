import React from "react";
import styles from "../styles/Skills.module.css";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react js.png";
import next from "../img/next js.png";
import mui from "../img/mui.png";
import tailwind from "../img/tailwind.png";
import sass from "../img/sass.png";

function Skills() {
  return (
    <div className={styles.skill_section} id="skills">
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.skill_container}>
        <div className={styles.skill_card}>
          <div className={styles.html}>
            <img className={styles.skill_img} src={html} alt="error" />
            <p className={styles.skill_name}>HTML</p>
          </div>
        </div>
        <div className={styles.skill_card}>
          <div className={styles.css}>
            <img className={styles.skill_img} src={css} alt="error" />
            <p className={styles.skill_name}>CSS</p>
          </div>
        </div>
        <div className={styles.skill_card}>
          <div className={styles.js}>
            <img className={styles.skill_img} src={js} alt="error" />
            <p className={styles.skill_name}>javaScript</p>
          </div>
        </div>
        <div className={styles.skill_card}>
          <div className={styles.sass}>
            <img className={styles.skill_img} src={sass} alt="error" />
            <p className={styles.skill_name}>sass</p>
          </div>
        </div>
        <div className={styles.skill_card}>
          <div className={styles.react}>
            <img className={styles.skill_img} src={react} alt="error" />
            <p className={styles.skill_name}>react JS</p>
          </div>
        </div>
        <div className={styles.skill_card}>
          <div className={styles.next}>
            <img className={styles.skill_img} src={next} alt="error" />
            <p className={styles.skill_name}>next JS</p>
          </div>
        </div>
        <div className={styles.skill_card}>
          <div className={styles.mui}>
            <img className={styles.skill_img} src={mui} alt="error" />
            <p className={styles.skill_name}>material UI</p>
          </div>
        </div>
        <div className={styles.skill_card}>
          <div className={styles.tailwind}>
            <img className={styles.skill_img} src={tailwind} alt="error" />
            <p className={styles.skill_name}>tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
