import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, placeholder, onChange, value, style, inputType }) => {
  return (
    <div className={styles.input_container}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={style}
        className={`${inputType === "outlined" && styles.outlined}`}
      />
    </div>
  );
};

export default Input;
