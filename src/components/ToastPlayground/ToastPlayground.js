import React from "react";

import Button from "../Button";

import RadioGroupInput from "../RadioGroupInput";

import styles from "./ToastPlayground.module.css";
import TextAreaInput from "../TextAreaInput";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        setShowToast(true);
      }}
    >
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <Toast
        showing={showToast}
        setShowing={setShowToast}
        variant={variant}
        content={message}
      ></Toast>

      <div className={styles.controlsWrapper}>
        <TextAreaInput
          label="Message"
          content={message}
          setContent={setMessage}
        ></TextAreaInput>

        <RadioGroupInput
          label="Variant"
          values={VARIANT_OPTIONS}
          selectedValue={variant}
          setSelectedValue={setVariant}
        ></RadioGroupInput>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
