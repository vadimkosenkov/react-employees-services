export const getEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees`
      );
      const json = await response.json();
      dispatch({ type: "GET_EMPLOYEES", payload: [...json] });
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

export const getFilterEmployees = (searchValue) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees?search=${searchValue}`
      );
      const json = await response.json();
      dispatch({ type: "GET_FILTER_EMPLOYEES", payload: [...json] });
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

export const showAlert = (message) => {
  alert(message);
};

export const changeCardView = (isRowView) => {
  return { type: "CHANGE_CARD_VIEW", payload: isRowView };
};
