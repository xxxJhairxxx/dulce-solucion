import Image from "next/image";
import Link from "next/link";
import React, { Children, FC, PropsWithChildren } from "react";

interface EnlaceProps {
  className?: string;
  href: string;
  text: string;
  otherPage?: string;
}

const EnlaceIcon = ({ className, text, href, otherPage }: EnlaceProps) => {
  return (
    <Link className={`enlaceIcon ${className}`} href={href} target={otherPage}>
      <Image src={"/images/phone.png"} alt={text} width={20} height={20} />{" "}
      <p>{text}</p>
    </Link>
  );
};

export default EnlaceIcon;
