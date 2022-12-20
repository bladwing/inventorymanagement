import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./orders.scss";

import { Api } from "../../utils/api";

export default function Createorder() {
  useEffect(() => {
    setTimeout(() => {
      return getCompanies() && getProducts();
    }, 1000);
  }, []);

  const form = useRef(null);

  const [error, setError] = useState(false);

  const [ordcompanyname, setOrdcompanyname] = useState("");
  const [ordproductname, setOrdproductname] = useState("");
  const [ordproductpieces, setOrdproductpieces] = useState("");
  const [companies, setCompanies] = useState([]);
  const [Products, setProducts] = useState([]);
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const inputs = {
      ordcompanyname,
      ordproductname,
      ordproductpieces,
    };

    await axios.post(Api + "/orders", inputs).then(function () {
      setError("");
      setOrdcompanyname("");
      setOrdproductname("");
      setOrdproductpieces("");
      form.current.reset();
      navigate("/orders");
      console.log(inputs);
    });
  };

  const getCompanies = async () => {
    const response = await axios.get(Api + "/companies");
    setCompanies(response.data);
  };

  const getProducts = async () => {
    const response = await axios.get(Api + "/products");
    setProducts(response.data);
  };

  return (
    <div>
      <div id="message" className="message">
        {error}
      </div>

      <form onSubmit={HandleSubmit} ref={form} className="order_form">
        <table cellSpacing="10" className="mainTable">
          <tbody>
            <tr>
              <th>
                <label>Company: </label>
              </th>
              <td>
                <select
                  name=""
                  id=""
                  onChange={(e) => setOrdcompanyname(e.target.value)}
                >
                  {companies.map((name) => (
                    <option value={name.company} key={name.id}>
                      {name.company}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th>
                <label>Product: </label>
              </th>
              <td>
                <select
                  name=""
                  id=""
                  onChange={(e) => setOrdproductname(e.target.value)}
                >
                  {Products.map((product) => (
                    <option value={product.name} key={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th>
                <label>Pieces: </label>
              </th>
              <td>
                <input
                  type="number"
                  placeholder="Order Number"
                  onChange={(e)=> setOrdproductpieces(e.target.value)}
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="addPageButton">
          <button className="btn btn-primary btn-sm m-2">Save</button>
          <Link to="/orders" className="btn btn-danger btn-sm m-2">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
