import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import ShoppingPage from "./pages/shopping page/ShoppingPage"
import CartPage from "./pages/cart page/CartPage"
import ShoppingCartProvider from "./context/shopContext"


function App() {
  

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ShoppingPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
