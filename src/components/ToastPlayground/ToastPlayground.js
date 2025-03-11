import React from "react";

import Button from "../Button";

import RadioGroupInput from "../RadioGroupInput";

import styles from "./ToastPlayground.module.css";
import TextAreaInput from "../TextAreaInput";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]);

  // React.useEffect(() => {
  //   console.log(toasts);
  // }, [toasts]);

  const handleDismiss = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
        setMessage("");
        setVariant(VARIANT_OPTIONS[0]);
      }}
    >
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss}>
        {message}
      </ToastShelf>

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
