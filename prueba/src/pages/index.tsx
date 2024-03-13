import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.title}>
        <h1> Recetario </h1>
        <h2> Intento de responsive design </h2>
      </div>
      <div className={styles.grid}>
        <a
          href="/cazuela"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Cazuela</h3>
          <p>Por favor no hagan cazuela en pleno verano</p>
        </a>


        <div className={styles.card}>
          <h3>Sopaipilla</h3>
          <p>Ricas sopaipillas con ketchup</p>
        </div>
        <div className={styles.card}>
          <h3>Calzones rotos</h3>
        </div>
        <div className={styles.card}>
          <h3>Mote con huesillo</h3>
        </div>

      </div>

    </div>


    </>
  );
}
