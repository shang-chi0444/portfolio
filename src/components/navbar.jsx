import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.link_group}>
        <li className={styles.link}>
          <Link to="home" smooth={true} duration={800} offset={-100}>
            home
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="about" smooth={true} duration={800} offset={30}>
            about
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="skills" smooth={true} duration={800} offset={-120}>
            skills
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="contact" smooth={true} duration={800}>
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
