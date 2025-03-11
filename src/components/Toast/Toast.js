import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ showing = false, setShowing, variant = "notice", content }) {
  if (!(variant in ICONS_BY_VARIANT)) {
    throw new Error(
      `Variant ${variant} not supported. Please use one of the variants ${Object.keys(
        ICONS_BY_VARIANT
      )}`
    );
  }

  return (
    showing && (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Info size={24} />
        </div>
        <p className={styles.content}>{content}</p>
        <button
          className={styles.closeButton}
          onClick={() => setShowing(false)}
        >
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </div>
    )
  );
}

export default Toast;
