import { Favicon } from "@/components/globals";
import { Layout } from "@/components/layouts/Layout";
import { GeneralsProvider } from "@/context/generals.context";
import { NavbarProvider } from "@/context/navbar.context";
import { fetchSitemaps } from "@/services/sitemaps";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    fetchSitemaps();
  });
  return (
    <>
      <Head>
        <title>Dulce Solucion</title>
        <Favicon />
      </Head>
      <GeneralsProvider generals={pageProps.generals}>
        <NavbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavbarProvider>
      </GeneralsProvider>
    </>
  );
}
