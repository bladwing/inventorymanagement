import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Api } from "../../utils/api";

const CompanyInfo = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTlephone] = useState("");
  const navigate = useNavigate();
  const InfoData = {
    name: name,
    code: code,
    account: account,
    address: address,
    telephone: telephone,
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(Api + `/info/1`, InfoData);
    navigate("/");
  };

  return (
    <div className="homePage">
      <form onSubmit={updateProduct}>
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Code</td>
              <td>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Bank Account</td>
              <td>
                <input
                  type="text"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Telephone</td>
              <td>
                <input
                  type="text"
                  value={telephone}
                  onChange={(e) => setTlephone(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn btn-primary btn-sm m-2">Update</button>
                <Link to="/" className="btn btn-warning btn-sm m-2">
                  Cancel
                </Link>
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};
export default CompanyInfo;
