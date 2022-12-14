import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Createorder() {
  const form = useRef(null);

  const [error, setError] = useState(false);
  return (
    <div>
      <div id="message" className="message">
        {error}
      </div>

      <form ref={form} className="company_form">
        <table cellSpacing="10" className="mainTable">
          <tbody>
            <tr>
              <th>
                <label>Company: </label>
              </th>
              <td></td>
            </tr>

            <tr>
              <th>
                <label>Product: </label>
              </th>
              <td></td>
            </tr>
            <tr>
              <th>
                <label>Phone: </label>
              </th>
              <td></td>
            </tr>
            <tr>
              <th>
                <label>Address: </label>
              </th>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="addPageButton">
          <button className="btn btn-primary btn-sm m-2">Save</button>
          <Link to="/companies" className=" btn btn-danger btn-sm m-2">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
