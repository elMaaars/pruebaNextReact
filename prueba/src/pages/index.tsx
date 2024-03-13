import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

function DesktopMenu() {
  return (
    <>
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
    </>
  );
}

function MobileMenu() {
  return (
    <>
      <div>
        <h3>Vista móvil pendiente</h3>
        <h4>HOLA</h4>
      </div>
    </>
  );
}

/* https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app */
const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

function Menu() {
  const [w, h] = useDeviceSize();
  if (w <= 700) {
    return (<MobileMenu />);
  }
  return (<DesktopMenu />);
}

function Title() {
  return (
    <>
      <div className={styles.title}>
        <h1> Recetario </h1>
        <h2> Intento de responsive design </h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.grid}>
                <div className={styles.card}>
                  <Link href="/cazuela" style={{ textDecoration: 'none' }}>
                  <h3>Cazuela</h3>
                  <p>Por favor no hagan cazuela en pleno verano</p>
                  </Link>
                </div>
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
