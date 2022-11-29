import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Api } from "../../utils/api";

import "./sold.scss"

const SoldDetail = () => {
  const [Products, setProducts] = useState([]);
  const [sold] = useState(10);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
    async function getProductById() {
      const response = await axios.get(Api + `/products/${id}`);
      setProducts(response.data);
    }
  }, [id]);

  const updateProduct = async () => {
    (await axios.patch(Api + `/products/${id}`, {
      sold: sold,
    })) && navigate("/salled");
  };

  return (
    <div>
      <button
        onClick={() => updateProduct()}
        className="btn btn-danger btn-sm m-2"
      >
        Return Item
      </button>
      <button
        onClick={() => navigate("/salled")}
        className="btn btn-warning btn-sm m-2"
      >
        Cancel
      </button>

      <div className="productContainer">
        <table cellPadding={10}>
          <thead
            className="tableLabel"
            style={{
              backgroundColor: "#eeecec",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            <tr>
              <th>Name</th>
              <td> {Products.name}</td>
            </tr>
            <tr>
              <th>Code</th>
              <td>{Products.sku}</td>
            </tr>
            <tr>
              <th>Document</th>
              <td>
                {Products.document !== false ? (
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
              </td>
            </tr>
            <tr>
              <th>Seller</th>
              <td>{Products.buyfromcompany}</td>
            </tr>
            <tr>
              <th>Buy price</th>
              <td>{Products.price} ₾</td>
            </tr>
            <tr>
              <th>Pieces</th>
              <td>{Products.pieces}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{Products.price * Products.pieces} ₾</td>
            </tr>
            <tr>
              <th>Customer</th>
              <td>{Products.soldtocompany}</td>
            </tr>
            <tr>
              <th>Sell Price</th>
              <td>{Products.soldprice} ₾</td>
            </tr>
            <tr>
              <th>Pieces</th>
              <td>{Products.pieces}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{Products.soldprice * Products.pieces} ₾</td>
            </tr>
            <tr>
              <th>Income</th>
              <td style={{ color: "red" }}>
                {Products.soldprice * Products.pieces -
                  Products.price * Products.pieces} ₾
              </td>
            </tr>
            <tr>
              <th>Sell Date</th>
              <td>{Products.updatedAt}</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldDetail;
