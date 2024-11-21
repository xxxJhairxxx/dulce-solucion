import { useRouter } from "next/router";
// import { useGenerals } from '../../context/generals.context'
import { useNavbarContext } from "@/context/navbar.context";
import { useState } from "react";
import { Socials } from "../atoms/Social";
import { Logo } from "../atoms/Logo";
import { Navbar } from "../molecules/Navbar";
import { MenuIcon } from "../atoms/MenuIcon";
import Image from "next/image";
import EnlaceIcon from "../atoms/EnlaceIcon";
import { useGenerals } from "@/context/generals.context";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { asPath } = useRouter();
  const { isTopZero } = useNavbarContext();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.remove("no-scroll");
  };
  const { general } = useGenerals();

  return (
    <header
      className={`Header ${
        isTopZero ? "background-white" : "background-transparent "
      }
            ${asPath !== "/" ? "background-two" : "bakground-one"}`}
    >
      <div className="Header-ctn">
        <Logo className="Header-ctn-Logo" menuActive={isMenuOpen} />
        <EnlaceIcon
          className="Header-ctn-phone"
          text={general.phone}
          href={`tel:${general.phone}`}
        ></EnlaceIcon>
        <div className={`Header-menuIcon ${isMenuOpen && "isActive"}`}>
          <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
        </div>
        <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <div
          className={`Header-overlay ${isMenuOpen && "isActive"}`}
          onClick={closeMenu}
        />
      </div>
      <div className="line-green"> </div>
    </header>
  );
};
