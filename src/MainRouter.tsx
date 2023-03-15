import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from './pages/Home'
import Items from "./pages/Items"
import Publish from './pages/Publish'
import SignUp from './pages/Signup'
import Catagory from "./pages/Catagory"
import Error from "./pages/Error"



export default function MainRouter() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/publish' element={<Publish/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/items" element={<Items/>}/>
        <Route path="/items/:catagory" element={<Catagory/>}/>
    </Routes>
    </>
  )
}
