import { useGenerals } from "@/context/generals.context";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
  className?: string;
  menuActive?: boolean;
}

export const Logo: FC<LogoProps> = ({ className, menuActive }) => {
  const { general } = useGenerals();

  return (
    <Link href={"/"} className={"logoCont " + className}>
      {general.logo.url && (
        <Image
          priority
          src={general.logo.url}
          width={200}
          height={130}
          alt="Dulce Solucion"
        />
      )}
    </Link>
  );
};
