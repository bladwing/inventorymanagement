import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from "../utils/api";

const CompanyInfo = () => {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTlephone] = useState("");

  useEffect(() => {
    setTimeout(() => {
      return getCompanyInfo();
    }, 1000);
  }, []);

  const getCompanyInfo = async () => {
    const response = await axios.get(Api + "/info");
    setInfo(response.data);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(Api + `/info`, {
      name: name,
      code: code,
      account: account,
      address: address,
      telephone: telephone,
    });
    navigate("/");
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
        <thead key={info.id}>{info.name}</thead>
      </table>
      <button>Update</button>
    </form>
  );
};
export default CompanyInfo;
