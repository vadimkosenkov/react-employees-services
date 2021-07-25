import React from "react";
import s from "./wideColumn.module.scss";
import {
  getDateString,
  getDateCalendar,
  sendRequest,
} from "./../../../utilities/utilities.js";

class WideColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  sendEditRequest = (e) => {
    e.preventDefault();
    sendRequest(
      `https://nodejs-ps143.herokuapp.com/api/employees/${this.state.userId}`,
      this.reRenderEmployeeData,
      "PATCH",
      this.state
    );
  };

  cancelEditRequest = (e) => {
    e.preventDefault();
    sendRequest(
      `https://nodejs-ps143.herokuapp.com/api/employees/${this.state.userId}`,
      this.reRenderEmployeeData,
      "PATCH",
      null
    );
  };

  cancel = (e) => {
    e.preventDefault();
  };

  reRenderEmployeeData = (data, error) => {
    if (!error) {
      this.props.setEditState(false);
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps.employee });
  }

  setEdit = () => {
    this.setState({ isEdit: true });
    this.props.setEditState(true);
  };

  getInputValue(value, stateParamName) {
    return (
      <input
        className={s.editInput}
        type="text"
        value={value}
        onChange={(event) => {
          this.setState({ [stateParamName]: event.target.value });
        }}
      />
    );
  }
  getInputCalendarValue(value) {
    return <input className={s.editInput} type="date" value={value} />;
  }

  render() {
    return (
      <div className={s.wideColumn}>
        <form>
          <div className={s.profileSections}>
            <div className={s.profileSection}>
              <div className={s.headerOfProfileSection}>
                <div className={s.profileSectionName}>General info</div>
                <div
                  className={this.state.isEdit ? s.hidden : s.editLinkHidden}>
                  <div className={s.editLinkContainer} onClick={this.setEdit}>
                    <div className={s.editLink}>edit details</div>
                  </div>
                </div>
                <div className={this.state.isEdit ? "" : s.hidden}>
                  <div className={s.changeContainer}>
                    <button
                      className={s.cancelChangesBtn}
                      onClick={(e) => {
                        this.cancelEditRequest(e);
                      }}>
                      cancel
                    </button>
                    <button
                      className={s.saveChangesBtn}
                      onClick={(e) => {
                        this.sendEditRequest(e);
                      }}>
                      save
                    </button>
                  </div>
                </div>
              </div>
              <div className={this.state.isEdit ? "" : s.hidden}>
                <div className={s.profileSectionDescription}>
                  <img src="/assets/icons/user.svg" alt="icon: user" />
                  <div className={s.profileDataName}>Gender</div>
                  <div className={s.genderInputContainer}>
                    <input
                      className={s.genderInputMr}
                      type="radio"
                      name="gender"
                      value="mr"
                      checked={this.state?.gender === "mr"}
                      onChange={(event) => {
                        this.setState({ gender: event.target.value });
                      }}
                    />
                    <span>Mr</span>
                    <input
                      className={s.genderInputMs}
                      type="radio"
                      name="gender"
                      value="ms"
                      checked={this.state?.gender === "ms"}
                      onChange={(event) => {
                        this.setState({ gender: event.target.value });
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
                      value={this.state?.firstName}
                      onChange={(event) => {
                        this.setState({ firstName: event.target.value });
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
                      value={this.state?.lastName}
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
                      value={this.state?.firstNameNative}
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
                      value={this.state?.middleNameNative}
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
                      value={this.state?.lastNameNative}
                    />
                  </div>
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img
                  src="/assets/icons/department.svg"
                  alt="icon: department"
                />
                <div className={s.profileDataName}>Department</div>
                <div className={s.profileSectionData}>
                  {this.state.isEdit
                    ? this.getInputValue(this.state?.department)
                    : this.state?.department}
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/room.svg" alt="icon: room" />
                <div className={s.profileDataName}>Room</div>
                <div className={s.profileSectionData}>
                  {this.state.isEdit
                    ? this.getInputValue(this.state?.roomNumber)
                    : this.state?.roomNumber}
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
                  {this.state.isEdit
                    ? this.getInputValue(this.state?.internalPhone)
                    : this.state?.internalPhone}
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img
                  src="/assets/icons/mobile-phone.svg"
                  alt="icon: Mobile phone"
                />
                <div className={s.profileDataName}>Mobile phone</div>
                <div className={s.profileSectionData}>
                  {this.state.isEdit
                    ? this.getInputValue(this.state?.mobilePhone)
                    : this.state?.mobilePhone}
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/email.svg" alt="icon: Email" />
                <div className={s.profileDataName}>Email</div>
                <div className={s.profileSectionData}>
                  {this.state.isEdit
                    ? this.getInputValue(this.state?.email)
                    : this.state?.email}
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/skype.svg" alt="icon: Skype ID" />
                <div className={s.profileDataName}>Skype ID</div>
                <div className={s.profileSectionData}>
                  {this.state.isEdit
                    ? this.getInputValue(this.state?.skype)
                    : this.state?.skype}
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/c-number.svg" alt="icon: C-Number" />
                <div className={s.profileDataName}>C-Number</div>
                <div className={s.profileSectionData}>
                  {this.state.isEdit
                    ? this.getInputValue(this.state?.cNumber)
                    : this.state?.cNumber}
                </div>
              </div>
            </div>
            <div className={s.profileSection}>
              <div className={s.profileSectionName}>Profile info</div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/calendar.svg" alt="icon: Hire date" />
                <div className={s.profileDataName}>Hire date</div>
                <div className={s.profileSectionData}>
                  {this.state.isEdit
                    ? this.getInputValue(getDateCalendar(this.state?.dateHired))
                    : getDateString(this.state?.dateHired)}
                </div>
              </div>
              <div className={s.profileSectionDescription}>
                <img src="/assets/icons/status.svg" alt="icon: Status" />
                <div className={s.profileDataName}>Status</div>
                <div className={s.profileSectionData}>
                  {this.state.isEdit
                    ? this.getInputValue(
                        this.state?.isActive ? "Active" : "Fired"
                      )
                    : this.state?.isActive
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
                  {this.state.isEdit
                    ? this.getInputValue(
                        this.state?.vacation?.status ? "Enabled" : "Disabled"
                      )
                    : this.state?.vacation?.status
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
                  {this.state.isEdit
                    ? this.getInputValue(
                        this.state?.addressBookRedesign ? "Enabled" : "Disabled"
                      )
                    : this.state?.addressBookRedesign
                    ? "Enabled"
                    : "Disabled"}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default WideColumn;
