import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/plane.svg" alt="lama blog" width={40} height={40} />
          <h1 className={styles.logoText}>travel idea</h1>
        </div>
        <p className={styles.desc}>
          Que vous soyez un globe-trotter passionné ou simplement en quête
          d'inspiration pour votre prochaine aventure, Travel Idea vous propose
          une multitude de destinations à explorer, découvrez des guides et des
          conseils pour nourrir votre soif de voyage!!
        </p>
        <div className={styles.icons}>
          <Image
            src="/facebook.svg"
            alt="facebook logo footer"
            width={18}
            height={18}
          />
          <Image
            src="/instagram.svg"
            alt="instagram logo footer"
            width={18}
            height={18}
          />
          <Image
            src="/pinterest.svg"
            alt="pinterest logo footer"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Accueil</Link>
          <Link href="https://dlkdigitalagency.com/legal">
            Mentions légales
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Europe</Link>
          <Link href="/">France</Link>
          <Link href="/">Asie</Link>
          <Link href="/">Afrique</Link>
          <Link href="/">Amérique</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Pinterest</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
