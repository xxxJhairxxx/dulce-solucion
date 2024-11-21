import React from "react";
import { Socials } from "../atoms/Social";
import { useGenerals } from "@/context/generals.context";

const Footer = () => {
  const { general, multilanguage } = useGenerals();
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list__li ">
          <p className="footer__list__li-title">UBICACIÓN</p>
          <a
            href={general.address_url}
            target="_blank"
            className={"footer__list__li-enlace address "}
          >
            {general.address}
          </a>
        </li>
        <li className="footer__list__li">
          <span className="footer__list__li-title">EMAIL</span>
          <a
            href={`mailto:${general.email}`}
            className={"footer__list__li-enlace"}
          >
            {general.email}
          </a>
        </li>
        <li className="footer__list__li">
          <p className="footer__list__li-title">TELÉFONO </p>
          <a
            className={"footer__list__li-enlace"}
            href={`tel:${general.phone}`}
          >
            {general.phone}
          </a>
        </li>

        <li className="footer__list__li">
          <p className="footer__list__li-title">HORARIO</p>
          <a className={"footer__list__li-enlace schedule"}>
            {general.schedule}
          </a>
        </li>
        <li className="footer__list__li">
          <p className="footer__list__li-title">SÍGUENOS:</p>

          <Socials className="footer__icons" />
        </li>
      </ul>

      <div className="footer__copyright">
        <p className="footer__copyright-text">{multilanguage.lbl_rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
