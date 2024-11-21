// import { LanguageSwitcher, Socials } from "@/components/atoms";

import { FC } from "react";
import { Container } from "../globals";
import Image from "next/image";
import { useGenerals } from "@/context/generals.context";

export const InfoHeader: FC = () => {
  const { general } = useGenerals();
  return (
    <div className="infoHeader">
      <Container className="infoHeader-container">
        <ul className="infoHeader-container-info">
          <li className="infoPhone">
            <a href={`tel:${general.phone}`} target="_blank">
              <i className="icon-phone"></i>
              {general.phone}
            </a>
          </li>
          <li>
            <a href={general.address_url} target="_blank">
              <i className="icon-mail"></i>
              {general.address}
            </a>
          </li>
        </ul>
        <ul className="infoHeader-container-info2">
          <li>
            <i className="icon-schedule"></i>
            {general.schedule}
          </li>
          <li>
            <a href={`mailto:${general.email}`} target="_blank">
              <i className="icon-gps"></i>
              {general.email}
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};
