import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Box from '@mui/material/Box';


export default function Cazuela() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1> Cazuela </h1>
        <h2> Por favor no hagan cazuela en pleno verano </h2>
      </div>
    
      <div className={styles.recipeeCard}>
      <div>
        <h1>
          Ingredientes:
        </h1>
        <ul>
          <li>Agua</li>
          <li>Papa</li>
          <li>Choclo</li>
          <li>Zapallo</li>
          <li>Carne</li>
        </ul>
      </div>
        <Image
          src="/cazuela.jpeg"
          width={600}
          height={600}
          alt="Cazuela"
        />
      </div>
    </div>
  );
}
