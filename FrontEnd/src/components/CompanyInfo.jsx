import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from "../utils/api";




const  CompanyInfo = () => {

const [info, setInfo] = useState([]);

  const getCompanyInfo = async () => {
    const response = await axios.get(Api + "/companies");
    setLoading(false);
    setInfo(response.data);
  };

return (
  <table
  cellSpacing={10}
  style={{
    margin: "2% auto",
    textAlign: "left",
  }}
>

  </table>
)



  
}
export default CompanyInfo;