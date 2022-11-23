import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Api } from "../../utils/api";
import "./auth.scss";

const Auth = () => {
  const [Login, setLogin] = useState([]);
  const [users, setUsers] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [Password, setPassword] = useState();
  const [Error, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const LoginChecker = () => {
      const userName = JSON.parse(localStorage.getItem("Login"));
      userName === null ? setError("") : setIsLogged(true);
    };
    LoginChecker() || getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(Api + "/users");
    setUsers(response.data);
  };

  const LocalStorage = () => {
    localStorage.setItem("Login", JSON.stringify([Login, Password]));
  };

  const Submit = (e) => {
    e.preventDefault();

    const CheckerLogin = users.find((user) => user.name === Login);
    const CheckerPwd = users.find((user) => user.pwd === Password);

    CheckerLogin && CheckerPwd
      ? setIsLogged(true) ||
        LocalStorage() ||
        navigate("/") ||
        window.location.reload(true)
      : setError("Login or Password not correct");
  }


  return (
    <div className="AuthForm">
      <h3>Please Sign In</h3>
      <h5 style={{ height: "10px", color: "red" }}>{Error}</h5>

      {isLogged === true ? (
        <div className="profile"></div>
      ) : (
        <form onSubmit={Submit}>
          <table className="AuthFormTbl">
            <tbody>
              <tr>
                <td>
                  <input
                    name="name"
                    placeholder="Login"
                    type="text"
                    onChange={(e) => setLogin(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="pass"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-primary">Enter</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
};

export default Auth;
