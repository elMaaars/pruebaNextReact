import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";

export default function Cazuela() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1> Sopaipilla </h1>
        <h2> Ricas sopaipillas con ketchup </h2>
      </div>

      <div className={styles.recipeeCard}>
        <div>
          <h1>
            Ingredientes:
          </h1>
          <ul>
            <li>Harina</li>
            <li>Manteca</li>
            <li>Sal</li>
            <li>Aceite</li>
            <li>Levadura</li>
          </ul>
        </div>
        <Image
          src="/sopaipillas.jpeg"
          width={600}
          height={600}
          alt="Sopaipillas"
        />
      </div>
    </div>
  );
}
