import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 p-12 rounded shadow">
      {children}
    </div>
  );
}
export default Card;
