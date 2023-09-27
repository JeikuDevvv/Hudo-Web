import React, { useState, useEffect } from "react";
import "./App.css";

import { Navbar } from "./components";
import { Home, Admin } from "./pages";

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  let content = null;

  switch (route) {
    case "/Home":
      content = <Home />;
      break;
    case "/Admin":
      content = <Admin />;
      break;
    default:
      content = <Home />;
  }

  return (
    <div>
      <Navbar />
      {content}
    </div>
  );
}

export default App;
