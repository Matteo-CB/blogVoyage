import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Asie</span>
          <h3 className={styles.postTitle}>
            🌉 Conseils pour Visiter Istanbul, entre Europe et Asie
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Matteo Biyikli</span>
            <span className={styles.date}> - 27/05/25</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>Asie</span>
          <h3 className={styles.postTitle}>
            🗾 Conseils pour Visiter Tokyo Sans Se Perdre dans la Mégalopole
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Matteo Biyikli</span>
            <span className={styles.date}> - 27/05/25</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Europe</span>
          <h3 className={styles.postTitle}>
            🇮🇹 Conseils Pratiques pour Visiter Rome Comme un(e) Local(e)
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Matteo Biyikli</span>
            <span className={styles.date}> - 27/05/25</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>France</span>
          <h3 className={styles.postTitle}>
            🗼 Conseils pour Visiter Paris Comme un(e) Pro
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Matteo Biyikli</span>
            <span className={styles.date}> - 27/05/25</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
