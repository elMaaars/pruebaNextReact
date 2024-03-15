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
          <div><Link href="/cazuela" style={{ textDecoration: 'none' }}> Link1 </Link></div>
          <div><Link href="/cazuela" style={{ textDecoration: 'none' }}> Link2 </Link></div>
          <div><Link href="/cazuela" style={{ textDecoration: 'none' }}>Link3</Link></div>
          <div><Link href="/cazuela" style={{ textDecoration: 'none' }}>Link4</Link></div>
          <div><Link href="/cazuela" style={{ textDecoration: 'none' }}>Link5</Link></div>
          <div><Link href="/cazuela" style={{ textDecoration: 'none' }}>Link6</Link></div>
          <div><Link href="/cazuela" style={{ textDecoration: 'none' }}>Link7</Link></div>
          <div><Link href="/cazuela" style={{ textDecoration: 'none' }}>Link8</Link></div>
      </div>
    </>
  );
}

function MobileMenu() {
  return (
    <>
      <div>
        <h3>Vista móvil pendiente</h3>
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
    </>
  );
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Menu />
        <Title />

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/cazuela" style={{ textDecoration: 'none' }}>
            <h3>Cazuela</h3>
            <p>Por favor no hagan cazuela en pleno verano</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/cazuela" style={{ textDecoration: 'none' }}>
            <h3>Sopaipillas</h3>
            <p>Ricas sopaipillas con ketchup</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/cazuela" style={{ textDecoration: 'none' }}>
            <h3>Calzones rotos</h3>
            <p>AKA Broken underwear</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/cazuela" style={{ textDecoration: 'none' }}>
            <h3>Mote con huesillo</h3>
            <p>OMG Chilean bobba</p>
            </Link>
          </div>

          
          
        </div>
      </main>
    </>
  );
}