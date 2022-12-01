import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  style,
  inputType,
  maxLength,
}) => {
  return (
    <div className={styles.input_container}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={style}
        className={`${inputType === "outlined" && styles.outlined}`}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;
