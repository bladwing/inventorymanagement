import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Api } from "../../utils/api";

const CompanyInfo = () => {
  const [info, setInfo] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      return getCompanyInfo();
    }, 1000);
  }, []);

  const getCompanyInfo = async () => {
    const response = await axios.get(Api + "/info");
    setInfo(response.data)
    setLoading(false)
  };

  return (
    <div>
      {Loading ? (
        <div className="loader-container" style={{width: "30%", marginTop: "4%" }}>
          <div className="spinner"></div>
        </div>
      ) : (
        <table className="table">
          {info.map((inf) => (
            <thead key={inf.id}>
              <tr>
                <td>Company:</td>

                <td>{inf.name}</td>
              </tr>

              <tr>
                <td>Code:</td>

                <td>{inf.code}</td>
              </tr>

              <tr>
                <td>Bank Account:</td>
                <td>{inf.account}</td>
              </tr>

              <tr>
                <td>Address:</td>

                <td>{inf.address}</td>
              </tr>

              <tr>
                <td>Telephone:</td>

                <td>{inf.telephone}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link to="/editinfo" className="btn btn-primary btn-sm m-2">
                    Edit
                  </Link>
                </td>
              </tr>
            </thead>
          ))}
        </table>
      )}
    </div>
  );
};
export default CompanyInfo;
