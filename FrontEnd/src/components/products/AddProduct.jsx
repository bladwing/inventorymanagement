import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Api } from "../../utils/api";
import "./addProducts.scss";

export default function AddProduct() {
  const form = useRef(null);

  const [ShowPiece, setShowPiece] = useState(false);
  const [ShowMeter, setShowMeter] = useState(false);

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [length, setLength] = useState(null);
  const [pieces, setPieces] = useState(null);
  const [document, setDocument] = useState("");
  const [sold] = useState(10);
  const [buyfromcompany, setBuyfromcompany] = useState("");

  const [Products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const [sizeError, setSizeError] = useState(false);
  const [pieceError, setPieceError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    GetProducts();
  }, []);

  const GetProducts = async () => {
    const response = await axios.get(Api + "/products");
    setProducts(response.data);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const inputs = {
      name,
      buyfromcompany,
      sku,
      price,
      pieces,
      length,
      document,
      sold,
    };
    const skuChecker = Products.some((products) => products.sku === sku);

    ShowPiece === true && pieces === null
      ? setError("შეიყვანეთ რაოდენობა") || setPieceError(true)
      : ShowMeter === true && length === null
      ? setError("შეიყვანეთ სიგრძე") || setSizeError(true)
      : skuChecker
      ? setError("პროდუქტი ეგეტი კოდით უკვე არსებობს...") ||
        setweightError(false) ||
        setSizeError(false)
      : await axios.post(Api + "/products", inputs).then(function () {
          setError("");
          setSku("");
          setName("");
          setPrice("");
          setPieces(null);
          setLength(null);
          setShowPiece(false);
          setShowMeter(false);
          form.current.reset();
          navigate("/products");
        });
  };

  const HandleSelectType = (e) => {
    const lenghtValue = e.target.value;
    const piecevalue = e.target.value;

    lenghtValue === "meter" ? setShowMeter(true) : setShowMeter(false);
    piecevalue === "piece" ? setShowPiece(true) : setShowPiece(false);
  };

  return (
   
      <div className="product_form">
        <div id="message" className="message">
          {error}
        </div>
        <form onSubmit={HandleSubmit} id="product_form" ref={form}>
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
                    placeholder="Alta"
                    onChange={(e) => setBuyfromcompany(e.target.value)}
                    required
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label>Code: </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="sku"
                    placeholder="JVC200123"
                    onChange={(e) => setSku(e.target.value)}
                    id="sku"
                    className="form-control form-control-color"
                    required
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label>Name: </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="Acme DISK"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Price (₾): </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="price"
                    placeholder="1.00"
                    onChange={(e) => setPrice(e.target.value)}
                    id="price"
                    className="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Document: </label>
                </th>
                <td>
                  <input
                    type="checkbox"
                    name="document"
                    onChange={(e) =>
                      e.target.checked === true
                        ? setDocument("10")
                        : setDocument("0")
                    }
                    id="checkbox"
                    className="form-control"
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label>Type: </label>
                </th>
                <td>
                  <select
                    id="productType"
                    onChange={HandleSelectType}
                    className="form-control"
                    required
                  >
                    <option value="">Choose</option>
                    <option value="piece">Piece</option>
                    <option value="meter">Meter</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="AditionalContainer">
            <table
              id="divDisk"
              className="divDisk"
              name="piece"
              style={{ display: ShowPiece ? "block" : "none" }}
            >
              <tbody>
                <tr>
                  <th>
                    <label>Piece:</label>
                  </th>
                  <td>
                    <input
                      id="size"
                      onChange={(e) => setPieces(e.target.value)}
                      type="number"
                      name="size"
                      className="form-control"
                      style={{
                        border: pieceError === true ? "1px solid red" : "",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <h6>Please input Pieces</h6>
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              id="divBook"
              className="divBook"
              style={{ display: ShowMeter ? "block" : "none" }}
            >
              <tbody>
                <tr>
                  <th>
                    <label>Meter</label>
                  </th>
                  <td>
                    <input
                      id="weight"
                      onChange={(e) => setLength(e.target.value)}
                      type="number"
                      name="meter"
                      className="form-control"
                      style={{
                        border: sizeError === true ? "1px solid red" : "",
                        
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <th></th>
                  <td>
                    <h6>Please input Length</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="addPageButton">
            <button className="btn btn-primary btn-sm m-2">Save</button>
            <Link to="/products" className="btn btn-danger btn-sm m-2">
              Cancel
            </Link>
          </div>
        </form>
      </div>
  
  );
}
