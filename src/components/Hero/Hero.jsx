import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.cont} id="viv">
      <section className={styles.container} id="hero">
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Raviteja Amancha</h1>
          <p className={styles.description}>
            A passionate software developer with expertise frontend
            technologies. Proficient in SQL, Python and Microsoft Azure.
            Certified in Azure Fundamentals and I am dedicated to continuous
            learning and delivering high-quality software solutions
          </p>
          {/* <ul className={styles.icons} >
            <li className={styles.linkedinIcon}>
              <a href="/">
              <img src={getImageUrl("hero/icons8-linkedin-48.png")} alt="linkdin" />
              </a>
            </li>
            <li className={styles.githubIcon}>
              <a href="/">
              <img src={getImageUrl("hero/icons8-github-24.png")} alt="Github" />
              </a>
            </li>
            <li className={styles.gmailIcon}>
              <a href="/">
              <img src={getImageUrl("hero/icons8-gmail-64.png")} alt="gmail" />
              </a>
            </li>
          </ul> */}
          <a
            href="mailto:amancharaviteja43@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/heroimg.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
      </section>
    </section>
  );
};
