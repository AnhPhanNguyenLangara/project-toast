import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function RadioGroupInput({ name, values, selectedValue, setSelectedValue }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {values.map((value, index) => (
          <RadioInput
            name={name}
            key={index}
            value={value}
            checked={value === selectedValue}
          >
            {value}
          </RadioInput>
        ))}
      </div>
    </div>
  );
}

function RadioInput({ setSelectedValue, ...delegated }) {
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
      {delegated.value}
    </label>
  );
}

export default RadioGroupInput;
