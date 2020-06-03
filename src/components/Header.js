import React from 'react';

export default function Header({ children }) {
  // children: o conteúdo do meu componente
  return (
    <header>
      {children}
    </header>
  )
}