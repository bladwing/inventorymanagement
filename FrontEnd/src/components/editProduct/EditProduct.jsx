import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Api } from "../../utils/api";
import "./editProduct.scss";

const EditProduct = () => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pieces, setPieces] = useState("");
  const [length, setLength] = useState("");
  const [document, setDocument] = useState("");
  const [sold, setSold] = useState("");
  const [soldprice, setSoldprice] = useState("");
  const [buyfromcompany, setBuyfromcompany] = useState("");
  const [soldtocompany, setSoldtocompany] = useState("");

  const [companies, setCompanies] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProductById() && getCompanies();
    async function getProductById() {
      const response = await axios.get(Api + `/products/${id}`);
      setSku(response.data.sku);
      setName(response.data.name);
      setPrice(response.data.price);
      setLength(response.data.length);
      setPieces(response.data.pieces);
      setDocument(response.data.document);
      setSold(response.data.sold);
      setSoldprice(response.data.soldprice);
      setSoldtocompany(response.data.soldtocompany);
      setBuyfromcompany(response.data.buyfromcompany);
    }
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(Api + `/products/${id}`, {
      sku: sku,
      name: name,
      price: price,
      pieces: pieces,
      length: length,
      document: document,
      sold: sold,
      soldtocompany: soldtocompany,
      soldprice: soldprice,
    });
    navigate("/products");
  };
  const getCompanies = async () => {
    const response = await axios.get(Api + "/companies");
    setCompanies(response.data);
  };

  return (
  
      <form onSubmit={updateProduct} className="product_form">
        <table cellSpacing="10" className="mainTable">
          <tbody>
            <tr>
              <th>
                <label>Company</label>
              </th>
              <td>
                <input
                  type="text"
                  className="form-control form-control-color"
                  value={buyfromcompany}
                  onChange={(e) => setBuyfromcompany(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Product Code: </label>
              </th>
              <td>
                <input
                  className="form-control form-control-color"
                  type="text"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Product Name: </label>
              </th>
              <td>
                <input
                  className="form-control form-control-color"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Price (₾): </label>
              </th>
              <td>
                <input
                  className="form-control form-control-color"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Pieces: </label>
              </th>
              <td>
                <input
                  className="form-control form-control-color"
                  type="number"
                  value={pieces}
                  onChange={(e) => setPieces(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Document: </label>
              </th>
              <td>
                <select onChange={(e) => setDocument(e.target.value)}>
                  <option>{document === 10 ? "Yes" : "No"}</option>
                  <option value={"10"}>Yes</option>
                  <option value={0}>No</option>
                </select>
              </td>
            </tr>

            {length !== null ? (
              <tr>
                <th>
                  <label>Meter: </label>
                </th>
                <td>
                  <input
                    className="input"
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </td>
              </tr>
            ) : (
              []
            )}
          </tbody>
        </table>
        <Link
          className="btn btn-primary btn-sm m-2"
          onClick={() => setSold("0")}
        >
          Sell
        </Link>
        <Link
          className="btn btn-warning btn-sm m-2"
          onClick={() => setSold(10)}
          style={{ visibility: sold === "0" ? "visible" : "hidden" }}
        >
          Cancel
        </Link>
        <table
          style={{
            display: sold === "0" || 0 ? "block" : "none",
            marginRight: "-277px",
          }}
        >
          <thead>
            <tr>
              <th>
                <label>Costumer</label>
              </th>
              <td>
                <select
                  onChange={(e) => setSoldtocompany(e.target.value)}
                  className="form-control form-control-color"
                >
                  <option value={soldtocompany}>{soldtocompany}</option>
                  {companies.map((Company) => (
                    <option value={Company.company} key={Company.id}>
                      {Company.company}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <Link to="/addcompanies" className="btn btn-primary btn-sm m-2">
                  Add Company
                </Link>
              </td>
            </tr>

            <tr>
              <th>
                <label>Sell Price</label>
              </th>
              <td>
                <input
                  type="number"
                  value={soldprice == null ? "" : soldprice}
                  onChange={(e) => setSoldprice(e.target.value)}
                  className="form-control form-control-color"
                />
              </td>
            </tr>
          </thead>
        </table>
        <div className="addPageButton">
          <button className="btn btn-primary btn-sm m-2">Save</button>
          <Link to="/products" className="btn btn-danger btn-sm m-2">
            Cancel
          </Link>
        </div>
      </form>

  );
};

export default EditProduct;
