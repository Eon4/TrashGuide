//LoginPage.jsx 
import { useContext, useState } from "react";
import style from "./LoginPage.module.scss";
import { UserContext } from "../../context/userContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";


// Functional component for the login page
export const LoginPage = () => {
  // State to manage login message
  const [message, setMessage] = useState("Indtast login oplysninger");
  // Destructure setUserData and userData from UserContext

  const { setUserData, userData } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);


  async function handleLogin(event) {
    event.preventDefault();
  
    const url = "http://localhost:3000/login";
  
    if (event.target.username.value === "") {
      setMessage("Venligst indtast dit brugernavn");
      return;
    }
  
    if (event.target.password.value === "") {
      setMessage("Venligst indtast dit password");
      return;
    }
  
    let body = new URLSearchParams();
    body.append("username", event.target.username.value);
    body.append("password", event.target.password.value);
  
    let options = {
      method: "POST",
      body: body,
    };
  
    try {
      let res = await fetch(url, options);
  
      if (res.status === 401) {
        setMessage("Forkert brugernavn eller password");
        return;
      }
  
      let data = await res.json();

  //Got data?
      console.log(data);
  
      if (data?.access_token) {
        setUserData(data);
  
        setMessage(
          <div style={{ textAlign: 'center', fontSize: '1.5em', margin: '30px' }}>
            Velkommen. Du er nu logget ind som {data.user.firstname}
          </div>
        );
      } else {
        setMessage("Der opstod en fejl - prøv igen");
      }
    } catch (err) {
      console.error(err);
    }
  }
  

  // Render component
  return (
    <>
      {/* Display the title using the Title component */}

      {/* {!userData ? ( */}
        <form
          className={style.loginFormStyle}
          onSubmit={(event) => handleLogin(event)}
        >
          {/* Display login message */}
          {message && <b>{message}</b>}

          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
        Password:
        <div className={style.passwordInputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
          />
          <div
            className={style.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ?  <FaEye /> :  <FaEyeSlash />}
          </div>
        </div>
      </label>
          {/* Submit button */}
          <input type="submit" value="Log ind" />
        </form>
       {/* ) : ( 
         <div>
          <p>{message}</p>
        </div> 
       )}  */}
    </>
  );
};


