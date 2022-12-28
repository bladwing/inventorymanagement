import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Api } from "../../utils/api";

const EditCompany = () => {
  const [comapny, setComapny] = useState("");
  const [companycode, setСompanycode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getCompanyById()
    async function getCompanyById() {
      const response = await axios.get(Api + `/companies/${id}`);
      setComapny(response.data.company);
      setСompanycode(response.data.companycode);
      setTelephone(response.data.telephone);
      setAddress(response.data.address);
    }
  }, [id]);

  const updateCompany = async (e) => {
    e.preventDefault();
    await axios.patch(Api + `/companies/${id}`, {
    comapny: comapny,
    companycode: companycode,
    telephone: telephone,
    address: address,
      
    });
    navigate("/companies");
  };

  return (
      <form onSubmit={updateCompany} className="product_form">
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
                  value={comapny}
                  onChange={(e) => setComapny(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Code: </label>
              </th>
              <td>
                <input
                  className="form-control form-control-color"
                  type="text"
                  value={companycode}
                  onChange={(e) => setСompanycode(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Telephone: </label>
              </th>
              <td>
                <input
                  className="form-control form-control-color"
                  type="text"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Address: </label>
              </th>
              <td>
                <input
                  className="form-control form-control-color"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>      
        <div className="addPageButton">
          <button className="btn btn-primary btn-sm m-2">Save</button>
          <Link to="/companies" className="btn btn-danger btn-sm m-2">
            Cancel
          </Link>
        </div>
      </form>

  );
};

export default EditCompany;
