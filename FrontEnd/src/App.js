import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navigation from "./components/Navigation";
import SoldDetail from "./components/Sold/SoldDetail";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage.js";
import Companies from "./pages/Companies";
import AddCompanies from "./pages/AddCompany";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Sold from "./pages/Sold";

import { userName } from "./utils/login";

import Logo from "./img/sunrise.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {userName === null ? (
            <Route path="/*" element={<HomePage />} />
          ) : (
            <Route>
              <Route path="/companies" element={<Companies />} />
              <Route path="/addcompanies" element={<AddCompanies />} />
              <Route path="/products" element={<Products />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route
                path="/products/editproduct/:id"
                element={<EditProduct />}
              />
              <Route path="/sold" element={<Sold />} />
              <Route path="/sold/:id" element={<SoldDetail />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
