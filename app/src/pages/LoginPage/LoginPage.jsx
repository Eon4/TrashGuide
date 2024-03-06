
import { useContext, useState } from "react";
import style from "./LoginPage.module.scss";
// import { UserContext } from "../../context/UserContext";

// Functional component for the login page
export const LoginPage = () => {
  // State to manage login message
  const [message, setMessage] = useState("Indtast login oplysninger");
  // Destructure setUserData and userData from UserContext

//   const { setUserData, userData } = useContext(UserContext);

  // Function to handle user login
  async function handleLogin(event) {
    event.preventDefault();

    // API endpoint for login
    const url = "http://localhost:3000/login";

    // Validation: Check if username is provided
    if (event.target.username.value === "") {
      setMessage("Venligst indtast dit brugernavn");
      return;
    }

    // Validation: Check if password is provided
    if (event.target.password.value === "") {
      setMessage("Venligst indtast dit password");
      return;
    }

    // Create URLSearchParams with username and password
    let body = new URLSearchParams();
    body.append("username", event.target.username.value);
    body.append("password", event.target.password.value);

    // Set options for the fetch request
    let options = {
      method: "POST",
      body: body,
    };

    try {
      // Make a POST request to the login endpoint
      let res = await fetch(url, options);
      let data = await res.json();

      console.log(data);

      // Check if access_token is present in the response
      if (data?.access_token) {
        // setUserData(data);

// Inside your LoginPage component where you set the message
setMessage(
    <div style={{ textAlign: 'center', fontSize: '1.5em', margin: '30px' }}>
      Velkommen. Du er nu logget ind som {data.user.firstname}
    </div>
  );    } else {
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

      {/* Conditionally render the login form or welcome message */}
      {/* {!userData ? ( */}
        <form
          className={style.loginFormStyle}
          onSubmit={(event) => handleLogin(event)}
        >
          {/* Display login message */}
          {message && <b>{message}</b>}

          {/* Input fields for username and password */}
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          {/* Submit button */}
          <input type="submit" value="Log ind" />
                {/* selete button */}
                {/* <input type="delete" value="delete" /> */}
        </form>
      {/* ) : ( */}
        {/* <div>
          <p>{message}</p>
        </div> */}
      {/* )} */}
    </>
  );
};


