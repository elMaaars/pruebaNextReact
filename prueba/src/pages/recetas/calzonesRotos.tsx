import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";

export default function Cazuela() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1> Calzones rotos </h1>
        <h2> AKA Broken underwear </h2>
      </div>

      <div className={styles.recipeeCard}>
        <div>
          <h1>
            Ingredientes:
          </h1>
          <ul>
            <li>Agua</li>
            <li>Harina</li>
            <li>Levadura</li>
            <li>Aceite</li>
            <li>Azúcar flor</li>
          </ul>
        </div>
        <Image
          src="/calzonesRotos.jpeg"
          width={600}
          height={600}
          alt="Calzones Rotos"
        />
      </div>
    </div>
  );
}
