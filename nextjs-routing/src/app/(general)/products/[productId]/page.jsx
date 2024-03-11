import React from 'react'
import { notFound } from 'next/navigation'


function ProductDetailPage({ params }) {

  if(params.productId > 1000) {
    notFound()
  }



  return (
    <div>
      <h1>
        Product Detail of product {params.productId}
      </h1>

      <h2>Reviews</h2>
      <p>Review 1 *****</p>
      <p>Review 2 ***</p>
      <p>Review 3 *</p>
    </div>
  )
}

export default ProductDetailPage