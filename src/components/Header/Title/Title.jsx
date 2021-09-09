import React from "react";
import s from "./Title.module.scss";

const Title = () => {
  return (
    <div className={s.headerTitle}>
      <img
        src="./assets/icons/leverx-group.svg"
        alt="icon: search"
        width="80px"
      />
      <img
        src="./assets/icons/employee-services.svg"
        alt="icon: search"
        width="150px"
      />
    </div>
  );
};

export default Title;
