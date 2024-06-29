import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() { //Layout component is used to wrap the Header, Footer and Outlet components. Outlet component is used to render the child components of the parent component. Outlet comes from the react-router-dom package.
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
