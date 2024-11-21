import { productsCard } from "@/interfaces/home";
import SectionTitle from "../atoms/secctionTitle";
import { Container } from "../globals";
import ProductsCard from "../molecules/ProductsCard";
import ProductsModal from "../molecules/ProductModal";
import { useState } from "react";
import SectionTitleH1 from "../atoms/secctionTitleH1";

interface HomeProductsProps {
  title: string;
  subtitle: string;
  products_card: productsCard[];
}

const HomeProducts = ({
  title,
  subtitle,
  products_card,
}: HomeProductsProps) => {
  /* AGREGAR ACTIVAR Y OCULTAR MODAL */
  const [modalOpen, setModalOpen] = useState(false);
  const [modaltitle, setModalTitle] = useState("dulcecitos");
  const [modallist, setModalList] = useState("");
  const [modalColor, setModalColor] = useState("");

  const openModal = (title: string, list: string, color: string) => {
    setModalTitle(title);
    setModalList(list);
    setModalColor(color);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="homeProducts" data-section="/products">
      <SectionTitleH1
        className=""
        title={title}
        subtitle={subtitle}
      ></SectionTitleH1>
      <Container className="homeProducts-ctn">
        {products_card.map(
          (
            {
              title,
              image,
              text,
              modal_list,
              modal_title,
              modal_color,
              activar_lista,
              productIcon,
            },
            index
          ) => (
            <ProductsCard
              key={index}
              title={title}
              image={image}
              text={text}
              modal_list={modal_list}
              modal_title={modal_title}
              modal_color={modal_color}
              metodoOpen={openModal}
              activar_lista={activar_lista}
              productIcon={productIcon.url}
            />
          )
        )}
      </Container>

      {modalOpen && (
        <ProductsModal
          metodoClose={closeModal}
          title={modaltitle}
          list={modallist}
          color={modalColor}
        />
      )}
    </section>
  );
};

export default HomeProducts;
