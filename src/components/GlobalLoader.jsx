import React, { useState, useEffect } from "react";
import Loadpage from "./Loadpage";

export default function GlobalLoader({ children }) {
  // null = not decided yet
  const [showLoader, setShowLoader] = useState(null);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("techeraLoaderShown");

    if (!alreadyShown) {
      setShowLoader(true); // show loader

      setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("techeraLoaderShown", "true");
      }, 10000); // loader duration
    } else {
      setShowLoader(false); // don't show loader
    }
  }, []);

  // If we haven't decided yet, render nothing (prevents flash)
  if (showLoader === null) return null;

  if (showLoader) return <Loadpage />;

  return <>{children}</>;
}
