import axios from "axios";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Api } from "../../utils/api";

import "./addCompany.scss";

export default function AddProduct() {
  const form = useRef(null);

  const [company, setCompanyName] = useState("");
  const [companycode, setCompanyCode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const inputs = {
      company,
      companycode,
      telephone,
      address,
    };

    await axios.post(Api + "/companies", inputs).then(function () {
      setError("");
      setCompanyName("");
      setCompanyCode("");
      setTelephone("");
      setAddress("");
      form.current.reset();
      navigate("/companies");
    });
  };

  return (
    <div>
      <div id="message" className="message">
        {error}
      </div>

      <form onSubmit={HandleSubmit} ref={form} className="company_form">
        <table cellSpacing="10" className="mainTable">
          <tbody>
            <tr>
              <th>
                <label>Company Name: </label>
              </th>
              <td>
                <input
                  type="text"
                  name="companyName"
                  onChange={(e) => setCompanyName(e.target.value)}
                  id="companyName"
                  className="form-control form-control-color"
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
                  type="number"
                  name="code"
                  onChange={(e) => setCompanyCode(e.target.value)}
                  id="code"
                  className="form-control"
                  required
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Phone: </label>
              </th>
              <td>
                <input
                  type="number"
                  name="phone"
                  onChange={(e) => setTelephone(e.target.value)}
                  id="phone"
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Address: </label>
              </th>
              <td>
                <input
                  type="text"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  className="form-control"
                  required
                />
              </td>
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
