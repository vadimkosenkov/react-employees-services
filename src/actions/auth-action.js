import { parseJwt, setToLocalStorage } from "../utilities/utilities";

export function logIn(e, post) {
  e.preventDefault();

  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://nodejs-ps143.herokuapp.com/auth/login",
        {
          body: JSON.stringify(post),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      const tokenData = parseJwt(json.token.split(" ")[1]);
      setToLocalStorage("userInfo", tokenData);
      dispatch({ type: "LOG_IN", payload: true });
    } catch (e) {
      dispatch({ type: "LOG_IN", payload: false });
      dispatch(
        showAlert("Email or password is incorrect. Please check and try again.")
      );
    }
  };
}

export function showAlert(message) {
  alert(message);
}
