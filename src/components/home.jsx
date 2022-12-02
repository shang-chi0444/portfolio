import React from "react";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home} id="home">
      <div className={styles.hero_heading}>
        <h1>Hello, I am Nurmukhammad</h1>
        <h1>a Front-End web developer</h1>
      </div>
    </div>
  );
}

export default Home;
