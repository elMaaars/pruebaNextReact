import * as React from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import { Box, Grid } from "@mui/material";

function MenuLinks() {
  return (
    <>
      <Link href="/cazuela" style={{ textDecoration: "none" }}><div>Link1</div></Link>
      <Link href="/cazuela" style={{ textDecoration: "none" }}><div>Link1</div></Link>
      <Link href="/cazuela" style={{ textDecoration: "none" }}><div>Link1</div></Link>
      <Link href="/cazuela" style={{ textDecoration: "none" }}><div>Link1</div></Link>
      <Link href="/cazuela" style={{ textDecoration: "none" }}><div>Link1</div></Link>
      <Link href="/cazuela" style={{ textDecoration: "none" }}><div>Link1</div></Link>
      <Link href="/cazuela" style={{ textDecoration: "none" }}><div>Link1</div></Link>
      <Link href="/cazuela" style={{ textDecoration: "none" }}><div>Link1</div></Link>
    </>
  );
}

function DesktopMenu() {
  return (
    <>
      <div className={styles.navigationbarD}>
        <MenuLinks />
      </div>
    </>
  );
}

function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className={styles.temporaryDrawer}>
      <Button onClick={toggleDrawer(true)} startIcon={<MenuIcon />}>
        <p>Menú</p>
      </Button>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <div className={styles.navigationbarM}>
          <MenuLinks />
        </div>
      </Drawer>
    </div>
  );
}

function MobileMenu() {
  return (
    <TemporaryDrawer />
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
  if (w <= 600) {
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

        {/* <div className={styles.grid}> */}
        <Box>
          <Grid container spacing={{ xs: 1, sm: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <Link href="/recetas/cazuela">
                  <CardActionArea>
                    <CardMedia>
                      <Image
                        src="/cazuela.jpeg"
                        width="400"
                        height="300"
                        alt="Cazuela"
                      />
                    </CardMedia>
                    <CardContent>
                      <h3>Cazuela</h3>
                      <p>Por favor no hagan cazuela en pleno verano</p>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <Link href="/recetas/sopaipillas">
                  <CardActionArea>
                    <CardMedia>
                      <Image
                        src="/sopaipillas.jpeg"
                        width="400"
                        height="300"
                        alt="Sopaipilla"
                      />
                    </CardMedia>
                    <CardContent>
                      <h3>Sopaipillas</h3>
                      <p>Ricas sopaipillas con ketchup</p>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <Link href="/recetas/calzonesRotos">
                  <CardActionArea>
                    <CardMedia>
                      <Image
                        src="/calzonesRotos.jpeg"
                        width="400"
                        height="300"
                        alt="Calzones Rotos"
                      />
                    </CardMedia>
                    <CardContent>
                      <h3>Calzones rotos</h3>
                      <p>AKA Broken underwear</p>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <Link href="/recetas/moteConHuesillo">
                  <CardActionArea>
                    <CardMedia>
                      <Image
                        src="/moteConHuesillo.jpeg"
                        width="400"
                        height="300"
                        alt="Mote con huesillo"
                      />
                    </CardMedia>
                    <CardContent>
                      <h3>Mote con huesillo</h3>
                      <p>OMG Chilean bobba</p>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>

          </Grid>
        </Box>


          {/*
          <div className={styles.card}>
            <Link href="/recetas/cazuela" style={{ textDecoration: "none" }}>
              <h3>Cazuela</h3>
              <p>Por favor no hagan cazuela en pleno verano</p>
              <Image
                src="/cazuela.jpeg"
                width={200}
                height={200}
                alt="Cazuela"
              />
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/recetas/sopaipillas" style={{ textDecoration: "none" }}>
              <h3>Sopaipillas</h3>
              <p>Ricas sopaipillas con ketchup</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/recetas/calzonesRotos" style={{ textDecoration: "none" }}>
              <h3>Calzones rotos</h3>
              <p>AKA Broken underwear</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/recetas/moteConHuesillo" style={{ textDecoration: "none" }}>
              <h3>Mote con huesillo</h3>
              <p>OMG Chilean bobba</p>
            </Link>
          </div>
        </div>
        */}
      </main>
    </>
  );
}
