import { FC, PropsWithChildren } from "react";

import { Outfit, Quicksand } from "next/font/google";

import Footer from "../ui/Footer";
import { Header } from "../ui/Header";
import { InfoHeader } from "../ui/InfoHeader";
import { CustomHead } from "../globals";
// Import Swiper styles

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-quicksand",
});

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${outfit.variable} ${quicksand.variable}`}>
      <CustomHead />
      <InfoHeader />
      <Header />
      {/* <ObserverTop /> */}
      {children}
      <Footer />
    </div>
  );
};
