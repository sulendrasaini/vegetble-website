
import './App.css'
import Home from './components/Home'
import DairyProduct from './components/dairy/DairyProduct'
import Fruits from './components/fruits/Fruits'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import SeaFood from './components/seaFood/SeaFood'
import AllProduct from './components/allProduct/AllProduct'
import ShopNow from './components/shopNow/ShopNow'
import Layout from './components/layOut/Layout'


function App() {

  const router = createBrowserRouter([
    {path:"/", element: <Layout/>, children:[
    {path:"/", element:<Home/>},
    {path:"/fruits", element: <Fruits/>},
    {path:"/dairyProduct", element: <DairyProduct/>},
    {path:"/seaFood", element: <SeaFood/>},
    {path:"/allProduct", element: <AllProduct/>},
    {path:"/shopNow", element: <ShopNow/>}]},
    
  ])
 
  return <RouterProvider router={router}/>
}

export default App;
