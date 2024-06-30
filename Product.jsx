import React from 'react'
import Layout from '../components/Layout'
import { product } from '../data/data'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
   <Layout>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">
   {product.products.map((x)=>{
    return(
      <div className="xl:w-1/4 md:w-1/4 w-full p-4 text-center items-center">
      <div className="bg-gray-100 p-6 rounded-lg">
   <Link to={`/product/${x.id}`}><img className="h-40 rounded w-full object-cover object-center mb-6" src={x.thumbnail} alt="content" /></Link>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{x.title.slice(0,10)}</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
<div className='flex justify-between'>
<p className="leading-relaxed text-base">Original Price:<span className='line-through'>${x.price}</span></p>
<p className="leading-relaxed text-base">Discount_P:<span className='ml-2'>${Math.round(x.price*(1-x.discountPercentage/100))}</span></p>
</div>
      </div>
    </div>
    )
   })}
    </div>
  </div>
</section>

   </Layout>
  )
}

export default Product
