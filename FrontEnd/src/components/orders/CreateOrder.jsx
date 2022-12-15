import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./orders.scss";

export default function Createorder() {
  const form = useRef(null);

  const [error, setError] = useState(false);
  const [piecesView, setPiecesView] = useState("none");

  const PiecesTemp = (e) => {
    setPiecesView(e.target.value);
    console.log(piecesView);
  };

  return (
    <div>
      <div id="message" className="message">
        {error}
      </div>

      <form ref={form} className="order_form">
        <table cellSpacing="10" className="mainTable">
          <tbody>
            <tr>
              <th>
                <label>Order: </label>
              </th>
              <td>
                <input type="text" placeholder="Order Number" />
              </td>
            </tr>

            <tr>
              <th>
                <label>Company: </label>
              </th>
              <td>
                <select>
                  <option>Choose Company</option>
                  <option></option>
                </select>
              </td>
            </tr>
            <tr>
              <th>
                <label>Product: </label>
              </th>
              <td>
                <select onChange={PiecesTemp}>
                  <option value="none">Choose product</option>
                  <option value={1}></option>
                </select>
              </td>
              <td>
                  <input type="text" placeholder="pieces" />
                </td>
            </tr>

            
      
          </tbody>
        </table>
        <div className="addPageButton">
          <button className="btn btn-primary btn-sm m-2">Save</button>
          <Link to="/orders" className=" btn btn-danger btn-sm m-2">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
