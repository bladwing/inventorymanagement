import ProductList from "../components/products/ProductList";
import ProductNav from "../components/products/ProductNav";

const Products = () => {
  return (
    <div className="Container">
      <div className="TopContainer">
        <h4 className="PageTitle">Company Stock</h4>
        <ProductNav />
      </div>
      <ProductList />
    </div>
  );
};

export default Products;
