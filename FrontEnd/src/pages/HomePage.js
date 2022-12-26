import Auth from "../components/auth/Auth";
import Guide from "../components/guide/Guide";
import { userName } from "../utils/login";
import CompanyInfo from "../components/CompanyInfo";




const HomePage = () => {
  return (
    <div className="Container">
      {userName !== null ? (
        <div className="homePage">
    
           <CompanyInfo/>
            
         
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default HomePage;
