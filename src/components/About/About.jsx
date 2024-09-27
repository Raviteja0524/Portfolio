import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/edu1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>B.Tech</h3>
              <h3>Kaktiya Unversity</h3>
              <p>
                Electrical And Electronics Engineering
              </p>
              <p>
                CGPA : 9.00
              </p>
              <p>
                Sep 2021 - Jun 2024
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Diploma</h3>
              <h3>VMR Polytechnic</h3>
              <p>
                Electrical And Electronics Engineering
              </p>
              <p>
                CGPA : 9.71
              </p>
              <p>
                July 2018 - May 2021
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>SSC</h3>
              <h3>Sahasra Concept School</h3>
              <p>
                CGPA : 9.00
              </p>
              <p>
                May 2018
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
