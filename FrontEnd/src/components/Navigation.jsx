import { Link } from "react-router-dom";
import { LogOut, userName } from "../utils/login";

const Navigation = () => {
  return (
    <div>
      {userName ? (
        <div>
          <Link to="/" className="btn btn-primary btn-sm m-2">
            Profile
          </Link>
          <Link to="/companies" className="btn btn-primary btn-sm m-2">
            Companies
          </Link>
          <Link to="/products" className="btn btn-primary btn-sm m-2">
            Stock
          </Link>
          <button onClick={LogOut} className="btn btn-danger btn-sm m-2">
            LogOut
          </button>
        </div>
      ) : (
        []
      )}
    </div>
  );
};

export default Navigation;
