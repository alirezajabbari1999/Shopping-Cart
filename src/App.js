import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './custom.css'
import productContext from './Context/ProductContext';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import AddNotif from './Components/AddNotif/AddNotif';
import Sidebar from './Components/Sidebar/Sidebar';



export default function App() {
  const [showNotif,setShowNotif] = useState(false)
  const [showSidebar,setShowSidebar] = useState(false)
  const [basketCount , setBasketCount] = useState(0) // مربوط به عدد کنار سبد خرید
  const [userShoppingBasket , setUserShoppingBasket] = useState([]) // مربوطبه سبد خریدی که در ساید بار نمایش داده میشه



  return (
    <productContext.Provider value={{
      showNotif,
      setShowNotif,
      showSidebar,
      setShowSidebar,
      basketCount,
      setBasketCount,
      userShoppingBasket,
      setUserShoppingBasket
    }}>
      <div>
        <Navbar />
        <Main />
        <AddNotif />
        <Sidebar />
      </div>
    </productContext.Provider>
  )
}

