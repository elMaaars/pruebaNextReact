import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Box from '@mui/material/Box';


export default function Cazuela() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1> Mote con Huesillo </h1>
        <h2> OMG Chilean bobba </h2>
      </div>
    
      <div className={styles.recipeeCard}>
      <div>
        <h1>
          Ingredientes:
        </h1>
        <ul>
          <li>Agua</li>
          <li>Huesillos</li>
          <li>Mote</li>
          <li>Azúcar</li>
          <li>Canels</li>
        </ul>
      </div>
        <Image
          src="/moteConHuesillo.jpeg"
          width={600}
          height={600}
          alt="Mote con huesillo"
        />
      </div>
    </div>
  );
}
