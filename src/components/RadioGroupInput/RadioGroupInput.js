import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function RadioGroupInput({ label, values, selectedValue, setSelectedValue }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {values.map((value, index) => (
          <RadioInput
            name={label.toLowerCase()}
            key={index}
            value={value}
            checked={value === selectedValue}
            setSelectedValue={setSelectedValue}
          >
            {value}
          </RadioInput>
        ))}
      </div>
    </div>
  );
}

function RadioInput({ setSelectedValue, children, ...delegated }) {
  const inputId = React.useId();
  return (
    <label htmlFor={inputId}>
      <input
        id={inputId}
        type="radio"
        onChange={(event) => {
          setSelectedValue(event.target.value);
        }}
        {...delegated}
      />
      {children}
    </label>
  );
}

export default React.memo(RadioGroupInput);
