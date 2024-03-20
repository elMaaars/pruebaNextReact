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

function CardGrid(props) {
  const urlname = props.urlname;
  const imagename = props.imagename;
  const alt = props.alt;
  const header = props.header;
  const desc = props.desc;

  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <Link href={"/recetas/" + urlname}>
            <CardActionArea>
              <CardMedia sx={{ position: "relative", width: "auto", height: "300px" }}>
                <Image
                  src={"/" + imagename + ".jpeg"}
                  fill
                  objectFit="cover"
                  alt={alt}
                />
              </CardMedia>
              <CardContent>
                <h3>{header}</h3>
                <p>{desc}</p>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
    </>
  );
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Menu />
        <Title />
        <Box>
          <Grid container spacing={{ xs: 1, sm: 2 }}>
            <CardGrid
              urlname="cazuela"
              imagename="cazuela"
              alt="Cazuela"
              header="Cazuela"
              desc="Por favor no hagan cazuela en pleno verano"
            />
            <CardGrid
              urlname="sopaipillas"
              imagename="sopaipillas"
              alt="Sopaipillas"
              header="Sopaipillas"
              desc="Ricas sopaipillas con ketchup"
            />
            <CardGrid
              urlname="calzonesRotos"
              imagename="calzonesRotos"
              alt="Calzones rotos"
              header="Calzones rotos"
              desc="AKA Broken underwear"
            />
            <CardGrid
              urlname="moteConHuesillo"
              imagename="moteConHuesillo"
              alt="Mote con huesillo"
              header="Mote con huesillo"
              desc="OMG Chilean bobba"
            />
          </Grid>
        </Box>
      </main>
    </>
  );
}
