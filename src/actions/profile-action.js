export const getEmployeeData = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees/${userId}`
      );
      const json = await response.json();
      dispatch({ type: "GET_EMPLOYEE_DATA", payload: { ...json } });
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

export const updateEmployee = (data, userId) => {
  const sendData = { ...data, dateHired: new Date(data.dateHired).getTime() };
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees/${userId}`,
        {
          body: JSON.stringify(sendData),
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      dispatch({ type: "UPDATE_EMPLOYEE_DATA", payload: { ...json } });
      dispatch({ type: "SET_EDIT_VIEW", payload: false });
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

export function showAlert(message) {
  alert(message);
}

export function changeEditView(isEditView) {
  return { type: "SET_EDIT_VIEW", payload: isEditView };
}
