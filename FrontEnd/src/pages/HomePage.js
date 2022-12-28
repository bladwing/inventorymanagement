import Auth from "../components/auth/Auth";
import { userName } from "../utils/login";
import CompanyInfo from "../components/companyinfo/CompanyInfo";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="Container">
      {userName !== null ? (
        <div className="homePage">
          <CompanyInfo />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default HomePage;
