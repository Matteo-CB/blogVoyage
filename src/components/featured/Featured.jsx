import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello, envie d’ailleurs ?</b> Laisse-moi te montrer où aller demain.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/paysage.jpg"} alt="" height={500} width={700} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>🎯 Clairs et informatifs</h1>
          <p className={styles.postDesc}>
            Bienvenue sur notre guide de voyage ! Chaque article vous offre des
            conseils pratiques, des bons plans locaux et des idées de visites
            organisées par ville. Lisez, explorez, et laissez-vous inspirer pour
            préparer votre séjour facilement et sereinement.
          </p>
          <button className={styles.button}>Voir les articles</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
