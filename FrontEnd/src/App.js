import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Footer from "./components/footer";
import EditProduct from "./pages/EditProduct";
import Salled from "./components/Sold/Sold";
import SoldDetail from "./components/Sold/SoldDetail";

import AddCompanies from "./pages/AddCompany";
import Companies from "./pages/Companies";

import { userName } from "./utils/login";

import Logo from "./img/sunrise.png"

import "./App.scss";

import HomePage from "./pages/HomePage.js"
import Navigation from "./components/Navigation";

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
              <Route path="/products" element={<Products />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/salled" element={<Saled />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/addcompanies" element={<AddCompanies />} />
              <Route path="/salled/:id" element={<SoldDetail />} />

              <Route
                path="/products/editproduct/:id"
                element={<EditProduct />}
              />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


const Saled = () => {
  return (
    <div>
      <Salled />
    </div>
  );
};
const Users = () => {
  return (
    <div>
      <CreateUser />
    </div>
  );
};
