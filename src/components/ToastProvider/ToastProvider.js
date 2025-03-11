import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleDismissToast = React.useCallback((id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  const handleAddToast = React.useCallback((message, variant) => {
    setToasts((toasts) => [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ]);
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, handleDismissToast, handleAddToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
