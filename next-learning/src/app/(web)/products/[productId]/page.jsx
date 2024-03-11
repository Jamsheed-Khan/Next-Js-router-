import { notFound } from 'next/navigation'
import React from 'react'

export const generateMetadata = async ({ params }) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`)
    },1000)
  })

  return {
    title: `Product ${title}`
  }
}


function ProductDetailPage({ params }) {

  if (params.productId > 2000) {
    notFound()
  }
  return (
    <div>
      <h1>Product {params.productId} detail page</h1>
    </div>
  )
}

export default ProductDetailPage