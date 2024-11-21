import { Picture } from "@/interfaces/shared";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Button from "../atoms/Button";
import Enlace from "../atoms/Enlace";
import { useGenerals } from "@/context/generals.context";
interface ProductsCardProps {
  image: Picture;
  title: string;
  text: string;
  modal_title: string;
  modal_list: string;
  modal_color: string;
  activar_lista: boolean;
  productIcon: string;
  metodoOpen: (title: string, list: string, color: string) => void;
}
const ProductsCard = ({
  image,
  title,
  text,
  modal_list,
  modal_title,
  modal_color,
  activar_lista,
  productIcon,
  metodoOpen,
}: ProductsCardProps) => {
  const { multilanguage } = useGenerals();
  return (
    <div className="productsCard">
      <div className="productsCard__thumb">
        <Image src={image.url} alt={title} width={1500} height={1500} />
      </div>

      <div className="productsCard__tarjet">
        <div className="productsCard__tarjet__title">
          <div
            className="productsCard__tarjet__title-icon"
            style={{ backgroundImage: `url("${productIcon}")` }}
          ></div>
          <h3>{title}</h3>
        </div>

        <ReactMarkdown className="productsCard__tarjet-text">
          {text}
        </ReactMarkdown>

        {activar_lista ? (
          <button
            className="productsCard__tarjet__btn"
            onClick={() => metodoOpen(modal_title, modal_list, modal_color)}
          >
            {multilanguage.lbl_see_products}
          </button>
        ) : (
          <Enlace
            className="productsCard__tarjet__btn"
            text={multilanguage.lbl_contact_us}
            href="/contact"
          />
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
