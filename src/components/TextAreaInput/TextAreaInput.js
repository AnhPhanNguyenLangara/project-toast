import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function TextAreaInput({ label, content, setContent }) {
  const inputId = React.useId();
  return (
    <div className={styles.row}>
      <label
        htmlFor={inputId}
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          value={content}
          id={inputId}
          className={styles.messageInput}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TextAreaInput;
