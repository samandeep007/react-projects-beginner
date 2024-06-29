import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitHubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([  //createBrowserRouter is used to create a router object. It takes an array of route objects as an argument. Each route object contains a path and an element. The path is the URL path and the element is the component that will be rendered when the path is matched.
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       }, 
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements( //createRoutesFromElements is used to create a router object using elements as an argument. Each route element is a Route component that contains a path and an element.

    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:id" element={<User/>}/>
      <Route
      loader={gitHubInfoLoader} //loader is used to load data from an external source. It takes a function as an argument that returns a promise. The promise is resolved when the data is loaded. It works similar to the useEffect hook.
      path="github" 
      element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
    {/* RouterProvider is used to provide the router object to the child components. It takes a router object as an argument. */}
  </React.StrictMode>,
)
