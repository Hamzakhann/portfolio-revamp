import React from "react";
import styles from "./Textarea.module.scss";

const Textarea = ({ placeholder, onChange, value, style, inputType, rows }) => {
  return (
    <div className={styles.textarea_container}>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={style}
        className={`${inputType === "outlined" && styles.outlined}`}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
