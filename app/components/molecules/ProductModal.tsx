import { useEffect } from "react";
import { Logo } from "../atoms/Logo";
import { Container } from "../globals";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useGenerals } from "@/context/generals.context";

interface ProductModalProps {
  metodoClose: () => void;
  list: string;
  title: string;
  color: string;
}

const ProductsModal = ({
  metodoClose,
  list,
  title,
  color,
}: ProductModalProps) => {
  const { multilanguage } = useGenerals();
  console.log(title, color, title);
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "visible";
    };
  }, []);
  return (
    <>
      <div className="productModal " onClick={metodoClose}></div>
      <div className="PaddingWhite">
        <div className={`productModal-main ${color}`}>
          <div className="productModal-main__header">
            <Logo className="productModal-main__header-logo" />

            <div className="productModal-main__header-text">
              <h2 className="productModal-main__header-text-title">
                {multilanguage.lbl_list_products}
              </h2>
              <h3 className="productModal-main__header-text-subtitle">
                {multilanguage.lbl_year}
              </h3>
            </div>
          </div>
          <div className="productModal-main__contain">
            <div className="productModal-main__contain-title">
              <h2>{title}</h2>
            </div>

            <ReactMarkdown>{list}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsModal;
