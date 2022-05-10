import {
  ToastContainer,
  toast as rawToast,
  ToastOptions,
  ToastContent,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function toast(message: ToastContent<unknown>, options?: ToastOptions) {
  return rawToast(message, {
    position: "bottom-right",
    pauseOnHover: true,
    pauseOnFocusLoss: false,
    theme: "dark",
    ...options,
  });
}

export { ToastContainer };
