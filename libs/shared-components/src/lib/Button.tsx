import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href: string;
  text: string;
}

const Button = ({ href, text }: ButtonProps) => {
  return (
    <Link
      to={href}
      className="px-4 py-2  text-black rounded hover:bg-blue-700 transition pointer"
    >
      {text}
    </Link>
  );
};

export default Button;
