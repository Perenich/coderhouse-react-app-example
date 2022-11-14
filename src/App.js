import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemListContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/checkOut/CheckOut";
import CartContextProvider from "./context/CartContext";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider>
      
  
        <NavBar/>
          <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/products' element={<ItemListContainer/>}/>
          <Route exact path='/products/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/products/item/:id' element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          </Routes>
          </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;