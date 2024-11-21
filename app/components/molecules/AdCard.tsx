import Button from "../atoms/Button";
import Image from "next/image";
import Enlace from "../atoms/Enlace";
import { useGenerals } from "@/context/generals.context";

interface AdCardProps {
  title: string;
  text: string;
  image: string;
}

const AdCard = ({ title, text, image }: AdCardProps) => {
  const { general, multilanguage } = useGenerals();
  return (
    <div className={`adCard ${ClassWord(title)}`}>
      <h2 className={"adCard__title "}>{title}</h2>
      <p className={"adCard__text "}>{text}</p>

      <Enlace
        className={"enlace "}
        href={
          ClassWord(title) === "ventas" ? `tel:${general.phone}` : `/contact`
        }
        text={
          ClassWord(title) === "ventas"
            ? general.phone
            : multilanguage.lbl_contact_us
        }
      />
      <Image src={image} width={1000} height={1000} alt={title}></Image>
    </div>
  );
};

export default AdCard;

const ClassWord = (word: string): string => {
  const palabras = word.split(" ");
  return palabras[0].toLowerCase().replace(/ñ/g, "n");
};
