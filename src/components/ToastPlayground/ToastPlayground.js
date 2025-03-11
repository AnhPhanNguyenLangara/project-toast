import React from "react";

import Button from "../Button";

import RadioGroupInput from "../RadioGroupInput";

import styles from "./ToastPlayground.module.css";
import TextAreaInput from "../TextAreaInput";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");
  const { handleAddToast } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf></ToastShelf>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddToast(message, variant);
          setMessage("");
          setVariant(VARIANT_OPTIONS[0]);
        }}
        className={styles.controlsWrapper}
      >
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
      </form>
    </div>
  );
}

export default ToastPlayground;
