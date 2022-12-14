import React from "react";
import ItemDetailContainer from "./Components/ItemDetails/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar"
import Cart from "./Components/Cart/Cart"
import Form from "./Components/Form/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomProvider from './Components/Context/CartContext';
import Footer from "./Components/Footer/Footer";
import Faq from "./Components/Faq/Faq";

const App = () => {
  return (
    <BrowserRouter>
  
      <CustomProvider>

        <NavBar />
        <Routes>
          <Route path="/" element={< ItemListContainer />}></Route >
          <Route path="/:categoryName" element={< ItemListContainer />}></Route >
          <Route path="/item/:id" element={< ItemDetailContainer />}></Route >
          <Route path="/preguntas-frecuentes" element={< Faq />}></Route >
          <Route path="/cart" element={< Cart />}></Route >
          <Route path="/form" element={< Form />} />
        </Routes>
        <Footer />
        
      </CustomProvider>

    </BrowserRouter>
  )
}

export default App;
