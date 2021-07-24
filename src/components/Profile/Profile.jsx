import React from "react";
import "../../App.scss";
import s from "./Profile.module.scss";
import NarrowColumn from "./NarrowColumn/NarrowColumn.jsx";
import WideColumn from "./WideColumn/WideColumn.jsx";
import { withRouter } from "react-router";
import { sendRequest } from "./../../utilities/utilities.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.location.search.split("=")[1],
    };
  }

  setEdit = (isEdit) => {
    this.setState({ isEdit: isEdit });
  };

  componentWillMount() {
    this.mounted = true;
    sendRequest(
      `https://nodejs-ps143.herokuapp.com/api/employees/${this.state.userId}`,
      this.renderProfile,
      "GET"
    );
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  renderProfile = (data, error) => {
    if (!error && this.mounted) {
      this.setState({ ...data });
    }
  };

  render() {
    return (
      <main className={s.main}>
        <div className={s.mainContainer}>
          <NarrowColumn employee={this.state} />
          <WideColumn setEditState={this.setEdit} employee={this.state} />
        </div>
      </main>
    );
  }
}

export default withRouter(Profile);
