import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { Intent } from "../../models";
import { ToastContainer } from "./ToastContainer";
import Toast from "./Toast";

// TODO: Pass in more options?
interface ToastOptions {
  intent?: Intent;
}

export function useToasts() {
  const toastsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let el = document.getElementById("jnpr-toastsRef");

    // Mount the ToastsContainer if one doesn't already exist
    if (!el) {
      const parentNode = document.createElement("div");
      document.body.appendChild(parentNode);
      ReactDOM.render(<ToastContainer />, parentNode);
      el = document.getElementById("jnpr-toastsRef");
    }

    // Grab the existing ToastsContainer and reference
    toastsRef.current = el;
  }, []);

  function handleMessageToast(message: string) {
    // TODO: Should we clean up these divs?
    // Need to add a new parent node to ensure not overwriting
    const parentNode = document.createElement("div");
    toastsRef.current?.appendChild(parentNode);
    ReactDOM.render(
      <Toast key={new Date().getTime()}>{message}</Toast>,
      parentNode,
    );
  }

  return { add: handleMessageToast };
}
