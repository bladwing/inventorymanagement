import Auth from "../components/auth/Auth";
import Guide from "../components/guide/Guide";
import { userName } from "../utils/login";
import profile from "../utils/profile.json";

const HomePage = () => {
  return (
    <div className="Container">
      {userName !== null ? (
        <div className="homePage">
          <table
            cellSpacing={10}
            style={{
              margin: "2% auto",
              textAlign: "left",
            }}
          >
           
            {profile.map((info) => {
              return (
              <thead key={info.companyName}>
                <tr>
                  <th>Company Name:</th>
                  <td>{info.companyName}</td>
                </tr>
                <tr>
                  <th>Company Code:</th>
                  <td>{info.CompanyCode}</td>
                </tr>
                <tr>
                  <th>Bank Account:</th>
                  <td>{info.BankAccount}</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>{info.Address}</td>
                </tr>
              </thead>)
            })}
          
          </table>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default HomePage;
