import Link from "next/link";
import React, { Children, FC, PropsWithChildren } from "react";

interface EnlaceProps {
  className?: string;
  href: string;
  text: string;
  otherPage?: string;
}

const Enlace = ({ className, text, href, otherPage }: EnlaceProps) => {
  return (
    <Link className={`enlace ${className}`} href={href} target={otherPage}>
      {text}
    </Link>
  );
};

export default Enlace;
