import React from 'react'
import { useParams } from 'react-router-dom'


export default function User() {
    const {id} = useParams();
  return (
   <>
   <h1 className='text-center bg-gray-600 text-3xl text-white p-4'>User: {id} </h1>
   </>
  )
}
