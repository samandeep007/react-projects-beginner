import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import productsArray from './assets/products.json'
import Card from './components/Card'

function App() {
  const products = productsArray
  console.log(productsArray)

  return (
    <>
     <h1 className="bg-green-100 mb-10 font-semibold text-4xl p-5 rounded-xl shadow-lg">Animal Park</h1>
     <div className="gap-6 grid grid-cols-4">
     {
      products.map((product, index)=>{
        return (<Card key={index} title={product.title} description={product.description} image={product.image}/>)
      })
     }
     </div>

    </>
  )
}

export default App
