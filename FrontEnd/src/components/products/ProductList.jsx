import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../utils/api";
import EmptyList from "../EmptyList";
import "./productlist.scss";

import { FcEditImage } from "react-icons/fc";
import { MdDelete } from "react-icons/md";

export default function ProductList() {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      return getProducts();
    }, 1000);
  }, []);

  const InStock = Products.filter((product) => product.sold !== false);
  const getProducts = async () => {
    const response = await axios.get(Api + "/products");
    setLoading(false);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    await axios.delete(Api + `/products/delteById/${id}`).then(function () {
      getProducts();
    });
  };

  return (
    <div className="productContainer">
      {Loading ? (
        <div className="loader-container ">
          <div className="spinner"></div>
        </div>
      ) : Products.length === 0 ? (
       <EmptyList/>
      ) : (
        <table cellPadding={15} className="table table-striped">
          <thead
            className="tableLabel"
            style={{
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Document</th>
              <th scope="col">Piece price</th>
              <th scope="col">Amount</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {InStock.map((product) => (
            <tbody key={product.id}>
              <tr>
                <th scope="row">{product.sku}</th>

                <th scope="row">{product.name}</th>

                <th scope="row" style={{width: "20px"}}>
                  {product.document !== false ? (
                    <h6
                      style={{
                        backgroundColor: "green",
                        color: "green",
                        margin: "0 auto",
                        width: "18px",
                        borderRadius: "10px",
                      }}
                    >
                      .
                    </h6>
                  ) : (
                    <h6
                      style={{
                        backgroundColor: "red",
                        color: "red",
                        margin: "0 auto",
                        width: "18px",
                        borderRadius: "10px",
                      }}
                    >
                      .
                    </h6>
                  )}
                </th>

                <th scope="row">{product.price} ₾</th>

                <th scope="row">
                  {product.length !== null && product.length !== 0 ? (
                    <>{product.length} Meter</>
                  ) : (
                    []
                  )}
                  {product.pieces !== null && product.pieces !== 0 ? (
                    <>{product.pieces} Pieces</>
                  ) : (
                    []
                  )}
                  <br />
                </th>

                <th scope="row">
                  {product.pieces !== null
                    ? product.pieces * product.price
                    : product.length !== null
                    ? product.length * product.price
                    : []}
                  ₾
                </th>

                <th scope="row">
                  <Link to={`editproduct/${product.id}`}>
                    <FcEditImage size={30} />
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    style={{
                      border: "none",
                      backgroundColor: "none",
                      color: "red",
                    }}
                  >
                    <MdDelete size={30} />
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
}
