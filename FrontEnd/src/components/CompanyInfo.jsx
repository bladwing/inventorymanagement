import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from "../utils/api";

const CompanyInfo = () => {
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTlephone] = useState("");

  useEffect(() => {
    setTimeout(() => {
      return getCompanyInfo();
    }, 1000);
  }, [id]);

  const getCompanyInfo = async () => {
    const response = await axios.get(Api + `/info`);
    setInfo(response.data);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(Api + `/info/1`, {
      name: name,
      code: code,
      account: account,
      address: address,
      telephone: telephone,
    });
  };

  return (
    <form action="" onSubmit={updateProduct}>
      <table
        cellSpacing={10}
        style={{
          margin: "2% auto",
          textAlign: "left",
        }}
      >
        <thead key={info.id}>
          {info.name}

          <tr>
            <td>
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              <label>Code</label>
              <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              <label>Bank Account</label>
              <input type="text" onChange={(e) => setAccount(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              <label>Address</label>
              <input type="text" onChange={(e) => setAddress(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              <label>Telephone</label>
              <input type="text" onChange={(e) => setTlephone(e.target.value)} />
            </td>
          </tr>
        </thead>
      </table>
      <button>Update</button>
    </form>
  );
};
export default CompanyInfo;
