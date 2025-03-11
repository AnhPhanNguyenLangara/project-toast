import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleDismissAll = React.useCallback(() => {
    setToasts([]);
  }, []);

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
      value={{ toasts, handleDismissToast, handleAddToast, handleDismissAll }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
