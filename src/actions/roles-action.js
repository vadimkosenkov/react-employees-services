export const getEmployeeData = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees`
      );
      const json = await response.json();
      dispatch({ type: "GET_EMPLOYEES_ROLES", payload: [...json] });
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

export function sendRole(userId, role) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/role/${userId}`,
        {
          body: JSON.stringify({ role }),
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      dispatch({ type: "SET_ROLE", payload: { ...json } });
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
}

export const getFilterEmployees = (searchValue) => {
  console.log(searchValue);
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees?search=${searchValue}`
      );
      const json = await response.json();
      dispatch({ type: "GET_FILTER_EMPLOYEES_ROLES", payload: [...json] });
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

export function showAlert(message) {
  alert(message);
}
