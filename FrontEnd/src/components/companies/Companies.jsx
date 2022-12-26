import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from "../../utils/api";

import { MdDelete } from "react-icons/md";
import { FcEditImage } from "react-icons/fc";
import EmptyList from "../EmptyList";

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      return getCompanies();
    }, 1000);
  }, []);

  const getCompanies = async () => {
    const response = await axios.get(Api + "/companies");
    setLoading(false);
    setCompanies(response.data);
  };

  const deleteCompany = async (id) => {
    await axios.delete(Api + `/companies/delteById/${id}`).then(function () {
      getCompanies();
    });
  };

  return (
    <div>
      <Link to="/addcompanies" className="btn btn-primary btn-sm m-2">
        Add Company
      </Link>
      <div className="productContainer">
        {Loading ? (
          <div className="loader-container ">
            <div className="spinner"></div>
          </div>
        ) : companies.length === 0 ? (
          <EmptyList />
        ) : (
          <table style={{ margin: "0 auto", width: "60%" }} className="table">
            <thead>
              <tr>
                <th>Companies</th>
                <th>Code</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            {companies.map((Company) => (
              <tbody key={Company.id}>
                <tr>
                  <th>{Company.company} </th>
                  <th>{Company.companycode}</th>

                  {Company.telephone === 0 ? (
                    <th>No Phone</th>
                  ) : (
                    <th>{Company.telephone}</th>
                  )}

                  <th>{Company.address}</th>
                  <th>
                    <Link to={`editcompany/${Company.id}`}>
                      <FcEditImage size={30} />
                    </Link>
                    <button
                      onClick={() => deleteCompany(Company.id)}
                      style={{
                        border: "none",
                        backgroundColor: "#fff",
                        color: "red",
                      }}
                    >
                      <MdDelete size={30} />
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>{" "}
    </div>
  );
}
