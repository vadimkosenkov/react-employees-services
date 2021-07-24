import React, { useState, useEffect } from "react";
import s from "./wideColumn.module.scss";
import {
  getDateString,
  getDateCalendar,
  sendRequest,
  getFromLocalStorage,
} from "./../../../utilities/utilities.js";

const WideColumn = (props) => {
  const [employee, employeeState] = useState({});
  const [edit, editState] = useState(false);
  const userInfo = getFromLocalStorage("userInfo");

  useEffect(() => {
    editState(props.edit);
    employeeState({ ...props.data });
  }, [props]);

  const sendEditRequest = (e) => {
    e.preventDefault();
    sendRequest(
      `https://nodejs-ps143.herokuapp.com/api/employees/${props.data.id}`,
      reRenderEmployeeData,
      "PATCH",
      employee
    );
  };

  const cancelEditRequest = (e) => {
    e.preventDefault();
    props.setEditState(false);
  };

  const reRenderEmployeeData = (data, error) => {
    if (!error) {
      props.setEditState(false);
    }
  };

  const setEdit = () => {
    editState(true);
    props.setEditState(true);
  };

  const getInputValue = (value, stateParamName) => {
    return (
      <input
        className={s.editInput}
        type="text"
        value={value}
        onChange={(event) => {
          employeeState({ [stateParamName]: event.target.value });
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
                  edit || userInfo?.role === "user"
                    ? s.hidden
                    : s.editLinkHidden
                }>
                <div className={s.editLinkContainer} onClick={setEdit}>
                  <div className={s.editLink}>edit details</div>
                </div>
              </div>
              <div className={edit ? "" : s.hidden}>
                <div
                  className={
                    s.changeContainer +
                    " " +
                    (userInfo?.role === "user" ? s.hidden : "")
                  }>
                  <button
                    className={s.cancelChangesBtn}
                    onClick={(e) => {
                      cancelEditRequest(e);
                    }}>
                    cancel
                  </button>
                  <button
                    className={s.saveChangesBtn}
                    onClick={(e) => {
                      sendEditRequest(e);
                    }}>
                    save
                  </button>
                </div>
              </div>
            </div>
            <div className={edit ? "" : s.hidden}>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/user.svg" alt="icon: user" />
                <div className={s.profileDataName}>Gender</div>
                <div className={s.genderInputContainer}>
                  <input
                    className={s.genderInputMr}
                    type="radio"
                    name="gender"
                    value="mr"
                    checked={employee?.gender === "mr"}
                    onChange={(event) => {
                      employeeState({ gender: event.target.value });
                    }}
                  />
                  <span>Mr</span>
                  <input
                    className={s.genderInputMs}
                    type="radio"
                    name="gender"
                    value="ms"
                    checked={employee?.gender === "ms"}
                    onChange={(event) => {
                      employeeState({ gender: event.target.value });
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
                    value={employee?.firstName}
                    onChange={(event) => {
                      employeeState({ firstName: event.target.value });
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
                    value={employee?.lastName}
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
                    value={employee?.firstNameNative}
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
                    value={employee?.middleNameNative}
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
                    value={employee?.lastNameNative}
                  />
                </div>
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/department.svg" alt="icon: department" />
              <div className={s.profileDataName}>Department</div>
              <div className={s.profileSectionData}>
                {edit
                  ? getInputValue(employee?.department)
                  : employee?.department}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/room.svg" alt="icon: room" />
              <div className={s.profileDataName}>Room</div>
              <div className={s.profileSectionData}>
                {edit
                  ? getInputValue(employee?.roomNumber)
                  : employee?.roomNumber}
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
                {edit
                  ? getInputValue(employee?.internalPhone)
                  : employee?.internalPhone}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img
                src="/assets/icons/mobile-phone.svg"
                alt="icon: Mobile phone"
              />
              <div className={s.profileDataName}>Mobile phone</div>
              <div className={s.profileSectionData}>
                {edit
                  ? getInputValue(employee?.mobilePhone)
                  : employee?.mobilePhone}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/email.svg" alt="icon: Email" />
              <div className={s.profileDataName}>Email</div>
              <div className={s.profileSectionData}>
                {edit ? getInputValue(employee?.email) : employee?.email}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/skype.svg" alt="icon: Skype ID" />
              <div className={s.profileDataName}>Skype ID</div>
              <div className={s.profileSectionData}>
                {edit ? getInputValue(employee?.skype) : employee?.skype}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/c-number.svg" alt="icon: C-Number" />
              <div className={s.profileDataName}>C-Number</div>
              <div className={s.profileSectionData}>
                {edit ? getInputValue(employee?.cNumber) : employee?.cNumber}
              </div>
            </div>
          </div>
          <div className={s.profileSection}>
            <div className={s.profileSectionName}>Profile info</div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/calendar.svg" alt="icon: Hire date" />
              <div className={s.profileDataName}>Hire date</div>
              <div className={s.profileSectionData}>
                {edit
                  ? getInputValue(getDateCalendar(employee?.dateHired))
                  : getDateString(employee?.dateHired)}
              </div>
            </div>
            <div className={s.profileSectionDescription}>
              <img src="/assets/icons/status.svg" alt="icon: Status" />
              <div className={s.profileDataName}>Status</div>
              <div className={s.profileSectionData}>
                {edit
                  ? getInputValue(employee?.isActive ? "Active" : "Fired")
                  : employee?.isActive
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
                {edit
                  ? getInputValue(
                      employee?.vacation?.status ? "Enabled" : "Disabled"
                    )
                  : employee?.vacation?.status
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
                {edit
                  ? getInputValue(
                      employee?.addressBookRedesign ? "Enabled" : "Disabled"
                    )
                  : employee?.addressBookRedesign
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
