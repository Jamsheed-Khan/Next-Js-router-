import React from 'react'

export default function ProductPageLayout({children}) {
  return (
    <div>
        {children}

        <h2>Featured Products</h2>
        <h3>Featured Product 1</h3>
        <h3>Featured Product 2</h3>
        <h3>Featured Product 3</h3>
    </div>
  )
}
