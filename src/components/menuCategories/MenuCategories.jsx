import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=france"
        className={`${styles.categoryItem} ${styles.france}`}
      >
        France
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.Europe}`}>
        Europe
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.asie}`}>
        Asie
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.amerique}`}
      >
        Amérique
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.afrique}`}>
        Afrique
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.oceanie}`}>
        Océanie
      </Link>
    </div>
  );
};

export default MenuCategories;
