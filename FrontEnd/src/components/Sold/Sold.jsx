import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../utils/api";
import EmptyList from "../EmptyList";

const Sold = () => {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      return getProducts();
    }, 1000);
  }, []);

  const getProducts = async () => {
    const response = await axios.get(Api + "/products");
    setLoading(false);
    setProducts(response.data);
  };

  const SoldProduct = Products.filter((product) => product.sold === false);

  return (
    <div className="soldProductContainer">
      
        {Loading ? (
          <div className="loader-container ">
            <div className="spinner"></div>
          </div>
        ) : (
          <div>
            {Products.sold === 10 ? (
          <EmptyList/>
            ) : (
              <table cellPadding={15} className="table table-striped">
                <thead
                  className="tableLabel"
                  style={{
                    backgroundColor: "#eeecec",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Document</th>
                    <th>Seller</th>
                    <th>Buyer</th>
                  </tr>
                </thead>

                {SoldProduct.map((product) => (
                  <tbody key={product.id}>
                    <tr>
                      <th>{product.sku}</th>

                      <th>
                        <Link to={`${product.id}`}>{product.name}</Link>
                      </th>

                      <th>
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
                      <th>{product.buyfromcompany}</th>

                      <th>{product.soldtocompany}</th>
                    </tr>
                  </tbody>
                ))}
              </table>
            )}
          </div>
        )}
      </div>
  );
};

export default Sold;
