import React from 'react';

export default function MenuGrid({ children }) {
  return (
    <>
      <h1>Dessert</h1>
      <div className='menu-grid'>{children}</div>
    </>
  );
}
