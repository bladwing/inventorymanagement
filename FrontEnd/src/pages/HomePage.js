import Auth from "../components/auth/Auth";
import { userName } from "../utils/login";

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
              <thead>
                <tr>
                  <th>Company Name:</th>
                  <td>Sunrise</td>
                </tr>
                <tr>
                  <th>Company Code:</th>
                  <td>404404404</td>
                </tr>
                <tr>
                  <th>Bank Account:</th>
                  <td>GE01TB0101010101010011</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>
                    New York str.1
                  </td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        ) : (
          <Auth />
        )}
      </div>
    );
  };

  export default HomePage;