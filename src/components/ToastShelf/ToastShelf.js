import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

import useEscapeKey from "../../hooks/useEscape";

function ToastShelf() {
  const { toasts, handleDismissToast, handleDismissAll } =
    React.useContext(ToastContext);
  useEscapeKey(handleDismissAll);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            handleDismiss={() => {
              handleDismissToast(id);
            }}
            variant={variant}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
