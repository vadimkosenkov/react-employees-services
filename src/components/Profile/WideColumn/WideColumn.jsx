import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./wideColumn.module.scss";
import {
  changeEditViewAction,
  updateEmployeeAction,
} from "../../../toolkitSlice/profileSlice";
import {
  getDateString,
  getDateCalendar,
  getFromLocalStorage,
  showAlert,
} from "./../../../utilities/utilities.js";

const updateEmployee = (data, userId) => {
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
      dispatch(updateEmployeeAction({ ...json }));
      dispatch(changeEditViewAction(false));
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

const WideColumn = () => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.profile.employee);
  const isEdit = useSelector((state) => state.profile.isEdit);
  const userInfo = getFromLocalStorage("userInfo");

  const [sendEmployeeData, setSendEmployeeData] = useState({ ...employee });

  useEffect(() => {
    setSendEmployeeData({ ...employee });
  }, [employee, isEdit]);

  const sendRequest = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(sendEmployeeData, employee.id));
  };

  const cancelEditRequest = (e) => {
    e.preventDefault();
    dispatch(changeEditViewAction(false));
  };

  const setEditView = (e) => {
    e.preventDefault();
    dispatch(changeEditViewAction(true));
  };

  const getInputValue = (value, stateParamName, type = "text") => {
    return (
      <input
        key={stateParamName}
        className={s.editInput}
        type={type}
        value={value}
        onChange={(event) => {
          setSendEmployeeData({
            ...sendEmployeeData,
            [stateParamName]: event.target.value,
          });
        }}
      />
    );
  };

  return (
    <div className={s.wideColumn}>
      <form>
        <div className={s.profileSections}>
          <div className={s.profileSection}>
            <div className={s.headerOfProfileSection}>
              <div className={s.profileSectionName}>General info</div>
              <div
                className={
                  isEdit || userInfo?.role === "user"
                    ? s.hidden
                    : s.editLinkHidden
                }>
                <div className={s.editLinkContainer} onClick={setEditView}>
                  <div className={s.editLink}>edit details</div>
                </div>
              </div>
              <div className={isEdit ? "" : s.hidden}>
                <div
                  className={
                    s.changeContainer +
                    " " +
                    (userInfo?.role === "user" ? s.hidden : "")
                  }>
                  <button
                    className={s.cancelChangesBtn}
                    onClick={cancelEditRequest}>
                    cancel
                  </button>
                  <button
                    className={s.saveChangesBtn}
                    onClick={(e) => sendRequest(e)}>
                    save
                  </button>
                </div>
              </div>
            </div>
            <div className={isEdit ? "" : s.hidden}>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/user.svg" alt="icon: user" />
                <div className={s.profileDataName}>Gender</div>
                <div className={s.genderInputContainer}>
                  <input
                    className={s.genderInputMr}
                    type="radio"
                    name="gender"
                    value="mr"
                    checked={sendEmployeeData?.gender === "mr"}
                    onChange={(event) => {
                      setSendEmployeeData({
                        ...sendEmployeeData,
                        gender: event.target.value,
                      });
                    }}
                  />
                  <span>Mr</span>
                  <input
                    className={s.genderInputMs}
                    type="radio"
                    name="gender"
                    value="ms"
                    checked={sendEmployeeData?.gender === "ms"}
                    onChange={(event) => {
                      setSendEmployeeData({
                        ...sendEmployeeData,
                        gender: event.target.value,
                      });
                    }}
                  />
                  <span>Ms</span>
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/user.svg" alt="icon: user" />
                <div className={s.profileDataName}>First name *</div>
                <div className={s.profileSectionData}>
                  <input
                    className={s.editInput}
                    type="text"
                    value={sendEmployeeData?.firstName}
                    onChange={(event) => {
                      setSendEmployeeData({
                        ...sendEmployeeData,
                        firstName: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/user.svg" alt="icon: user" />
                <div className={s.profileDataName}>Last name *</div>
                <div className={s.profileSectionData}>
                  <input
                    className={s.editInput}
                    type="text"
                    value={sendEmployeeData?.lastName}
                    onChange={(event) => {
                      setSendEmployeeData({
                        ...sendEmployeeData,
                        lastName: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/user.svg" alt="icon: user" />
                <div className={s.profileDataName}>First name native *</div>
                <div className={s.profileSectionData}>
                  <input
                    className={s.editInput}
                    type="text"
                    value={sendEmployeeData?.firstNameNative}
                    onChange={(event) => {
                      setSendEmployeeData({
                        ...sendEmployeeData,
                        firstNameNative: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/user.svg" alt="icon: user" />
                <div className={s.profileDataName}>Middle name native *</div>
                <div className={s.profileSectionData}>
                  <input
                    className={s.editInput}
                    type="text"
                    value={sendEmployeeData?.middleNameNative}
                    onChange={(event) => {
                      setSendEmployeeData({
                        ...sendEmployeeData,
                        middleNameNative: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/user.svg" alt="icon: user" />
                <div className={s.profileDataName}>Last name native *</div>
                <div className={s.profileSectionData}>
                  <input
                    className={s.editInput}
                    type="text"
                    value={sendEmployeeData?.lastNameNative}
                    onChange={(event) => {
                      setSendEmployeeData({
                        ...sendEmployeeData,
                        lastNameNative: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/department.svg" alt="icon: department" />
              <div className={s.profileDataName}>Department</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(sendEmployeeData?.department, "department")
                  : sendEmployeeData?.department}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/room.svg" alt="icon: room" />
              <div className={s.profileDataName}>Room</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(sendEmployeeData?.roomNumber, "roomNumber")
                  : sendEmployeeData?.roomNumber}
              </div>
            </div>
          </div>
          <div className={s.profileSection}>
            <div className={s.profileSectionName}>Contacts</div>
            <div className={s.profileSectionDescription}>
              <img
                src="/assets/icons/internal-phone.svg"
                alt="icon: Internal phone"
              />
              <div className={s.profileDataName}>Internal phone</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(
                      sendEmployeeData?.internalPhone,
                      "internalPhone"
                    )
                  : sendEmployeeData?.internalPhone}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img
                src="/assets/icons/mobile-phone.svg"
                alt="icon: Mobile phone"
              />
              <div className={s.profileDataName}>Mobile phone</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(sendEmployeeData?.mobilePhone, "mobilePhone")
                  : sendEmployeeData?.mobilePhone}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/email.svg" alt="icon: Email" />
              <div className={s.profileDataName}>Email</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(sendEmployeeData?.email, "email")
                  : sendEmployeeData?.email}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/skype.svg" alt="icon: Skype ID" />
              <div className={s.profileDataName}>Skype ID</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(sendEmployeeData?.skype, "skype")
                  : sendEmployeeData?.skype}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/c-number.svg" alt="icon: C-Number" />
              <div className={s.profileDataName}>C-Number</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(sendEmployeeData?.cNumber, "cNumber")
                  : sendEmployeeData?.cNumber}
              </div>
            </div>
          </div>
          <div className={s.profileSection}>
            <div className={s.profileSectionName}>Profile info</div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/calendar.svg" alt="icon: Hire date" />
              <div className={s.profileDataName}>Hire date</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(
                      getDateCalendar(sendEmployeeData?.dateHired),
                      "dateHired",
                      "date"
                    )
                  : getDateString(sendEmployeeData?.dateHired)}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/status.svg" alt="icon: Status" />
              <div className={s.profileDataName}>Status</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(
                      sendEmployeeData?.isActive ? "Active" : "Fired",
                      "isActive"
                    )
                  : sendEmployeeData?.isActive
                  ? "Active"
                  : "Fired"}
              </div>
            </div>
          </div>
          <div className={s.profileSection}>
            <div className={s.profileSectionName}>Additional modules</div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/vacation.svg" alt="icon: Vacation" />
              <div className={s.profileDataName}>Vacation</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(
                      sendEmployeeData?.vacation?.status
                        ? "Enabled"
                        : "Disabled",
                      "status"
                    )
                  : sendEmployeeData?.vacation?.status
                  ? "Enabled"
                  : "Disabled"}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img
                src="/assets/icons/redesign.svg"
                alt="icon: Adress book redesign"
              />
              <div className={s.profileDataName}>Adress book redesign</div>
              <div className={s.profileSectionData}>
                {isEdit
                  ? getInputValue(
                      sendEmployeeData?.addressBookRedesign
                        ? "Enabled"
                        : "Disabled",
                      "addressBookRedesign"
                    )
                  : sendEmployeeData?.addressBookRedesign
                  ? "Enabled"
                  : "Disabled"}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WideColumn;
