import React, { useState, useEffect } from "react";
import "./App.css";

import { Navbar } from "./components";
import {
  Home,
  Admin,
  Benselcom,
  CommunityOrganizer,
  CommunityMortage,
  Demolition,
} from "./pages";

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
    case "/Benselcom":
      content = <Benselcom />;
      break;
    case "/CommunityMortage":
      content = <CommunityMortage />;
      break;
    case "/CommunityOrganizer":
      content = <CommunityOrganizer />;
      break;
    case "/Demolition":
      content = <Demolition />;
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
