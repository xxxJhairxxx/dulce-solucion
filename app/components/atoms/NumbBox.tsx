import { useGenerals } from "@/context/generals.context";
import Image from "next/image";
import Link from "next/link";

interface NumbBoxProps {
  className?: string;
}

const NumbBox = ({ className }: NumbBoxProps) => {
  const { general } = useGenerals();
  return (
    <Link className={`numbBox ${className}`} href={`tel:${general.phone}`}>
      <div className="numbBox__thumb">
        <Image
          src="/images/phoneIcon.png"
          width={100}
          height={100}
          alt={"logo phone"}
        ></Image>
      </div>
      <div className={`numbBox__text `}>
        <h3>{general.phone}</h3>
      </div>
    </Link>
  );
};

export default NumbBox;
