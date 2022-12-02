import { Link } from "react-router-dom";

export default function ProductNav() {
  return (
      <div className="ButtonContainer">
        <Link to="/addproduct" className="btn btn-primary btn-sm m-2">
          Add Product
        </Link>
        <Link to="/sold" className="btn btn-primary btn-sm m-2">
          Sold
        </Link>
      </div>
   
  );
}
