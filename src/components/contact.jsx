import React, { useEffect } from "react";
import styles from "../styles/Contact.module.css";
import tg from "../img/tg.png";
import facebook from "../img/facebook.png";
import github from "../img/github.png";
import btn from "../img/btn.png";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={styles.contact} id="contact">
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.links}>
        <div className={styles.link}>
          <a href="https://t.me/nazarov_n914" target="_blank">
            <div className={styles.tg}>
              <img className={styles.img} src={tg} alt="error" />
            </div>
          </a>
        </div>
        <div className={styles.link}>
          <a href="https://www.facebook.com/abdulatif.advatif/" target="_blank">
            <div className={styles.facebook}>
              <img className={styles.img2} src={facebook} alt="" />
            </div>
          </a>
        </div>
        <div className={styles.link}>
          <a href="https://github.com/shang-chi0444" target="_blank">
          <div className={styles.github}>
            <img className={styles.img} src={github} alt="" />
          </div>
          </a>
        </div>
      </div>
      <div className={styles.swipe}>
        <button
          className={styles.btn}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img className={styles.btn_img} src={btn} alt="error" />
        </button>
      </div>
    </div>
  );
}

export default Contact;
