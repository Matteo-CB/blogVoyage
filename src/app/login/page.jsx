"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirige l'utilisateur vers la page d'accueil dès qu'il est authentifié
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  // Affiche un message de chargement pendant le chargement de la session
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Bouton pour se connecter avec Google */}
        <button
          className={styles.socialButton}
          onClick={() => signIn("google")}
          aria-label="Sign in with Google"
        >
          Sign in with Google
        </button>
        {/* Bouton pour se connecter avec Github */}
      </div>
    </div>
  );
};

export default LoginPage;
