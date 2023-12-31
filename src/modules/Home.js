import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import FeatureCard from '../components/FeatureCard'
import StatCard from '../components/StatCard'

const Home = () => {
const [products1, setProducts1]=useState([])
    useEffect(()=>{
       const fetchProducts=async ()=>{
         const response= await fetch('https://fakestoreapi.com/products?limit=12')
         const data=await response.json()
         console.log(data)
         setProducts1(data)
       }
       fetchProducts()
    }, [])

  return (
    <>
     <Hero/>
     <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR CARDS</h1>
      </div>

      {
        products1.length>0 ?
        <Products products1={products1} />
        :
        <div>Loading</div>
      }

     <Products/>
     <FeatureCard/>
     <StatCard/>
    </>
     
  )
}

export default Home
