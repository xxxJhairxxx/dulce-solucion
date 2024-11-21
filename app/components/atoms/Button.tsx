import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  metodo?: () => void;
}

const Button = ({ text, className, metodo }: ButtonProps) => {
  return (
    <button className={`Btn ${className}`} onClick={metodo}>
      {text}
    </button>
  );
};

export default Button;
