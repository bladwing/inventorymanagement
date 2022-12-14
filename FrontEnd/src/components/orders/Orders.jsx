import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Api } from "../../utils/api";


import EmptyList from "../EmptyList";

export default function Companies() {


  useEffect(() => {
    setTimeout(() => {
    
    }, 1000);
  }, []);


  return (
    <div>
      <Link to="/createorder" className="btn btn-primary btn-sm m-2">
        Create Order
      </Link>
      <div className="productContainer">
        {Loading ? (
          <div className="loader-container ">
            <div className="spinner"></div>
          </div>
        ) : companies.length === 0 ? (
          ""
        ) : (
         ""
        )}
      </div>{" "}
    </div>
  );
}
