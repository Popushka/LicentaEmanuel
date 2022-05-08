import React from "react";
import style from "../index.module.css";

const Header = ({ douleur }) => {
  return (
    <div className={style.text}>
      {douleur || "Selecteaza o parte a corpului"}
    </div>
  );
};

export default Header;
