import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";
import { Layout } from "@/components/layouts";

export default function Home() {
  return (
    <>
      <Layout title="hola mundo">
        <Typography variant="h1" color="primary">
          hello
        </Typography>
      </Layout>
    </>
  );
}
