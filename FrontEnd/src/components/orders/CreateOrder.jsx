import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./orders.scss";

import { Api } from "../../utils/api";

export default function Createorder() {
  const form = useRef(null);

  const [error, setError] = useState(false);
  const [piecesView, setPiecesView] = useState("none");


//  const [orderNumber, setOrderNumber] = useState("");
 const [ordcompanyname, setOrdcompanyname] = useState("");
 const [ordproductname, setOrdproductname] = useState("");
 const [ordproductpieces, setOrdproductpieces] = useState("");
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
    setOrdcompanyname("")
    setOrdproductname("")
    setOrdproductpieces("")
    form.current.reset();
    navigate("/orders");
    console.log(inputs)
  });
};


  return (
    <div>
      <div id="message" className="message">
        {error}
      </div>

      <form ref={form} className="order_form" onSubmit={HandleSubmit}>
        <table cellSpacing="10" className="mainTable">
          <tbody>
            <tr>
              <th>
                <label>Order: </label>
              </th>
              <td>
                <input type="text" placeholder="Order Number" onChange={(e) => setOrdcompanyname(e.target.value)}/>
              </td>
            </tr>

            <tr>
              <th>
                <label>Company: </label>
              </th>
              <td>
              <input type="text" placeholder="Order Number" onChange={(e) => setOrdproductname(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <th>
                <label>Product: </label>
              </th>
              <td>
              <input type="number" placeholder="Order Number" onChange={(e) => setOrdproductpieces(e.target.value)}/>
              </td>
              <td>
                 
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
