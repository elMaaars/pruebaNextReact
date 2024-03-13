import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.navigationbar}>
          <ul>
            <li><a href="">Link1</a></li>
            <li><a href="">Link2</a></li>
            <li><a href="">Link3</a></li>
            <li><a href="">Link4</a></li>
            <li><a href="">Link5</a></li>
            <li><a href="">Link6</a></li>
            <li><a href="">Link7</a></li>
            <li><a href="">Link8</a></li>
          </ul>
        </div>
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

          <a
            href="/sopaipilla"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Sopaipilla</h3>
            <p>Ricas sopaipillas con ketchup</p>
          </a>

          <a
            href="/calzones-rotos"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Calzones rotos</h3>
          </a>

          <a
            href="/mote-con-huesillo"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Mote con huesillo</h3>
          </a>
        </div>
      </main>
    </>
  );
}
