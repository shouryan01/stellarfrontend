import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Components
import Landing from "./Pages/Landing";
import PartnerLanding from "./Pages/PartnerLanding";
import AdminLanding from "./Pages/AdminLanding";
import Counter from "./Features/counter/Counter";
import Loading from "./Components/Loading";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Components/Container";

// Dashboard pages
import Summary from "./Pages/Summary";
// Social
import Friends from "./Pages/Friends";
import Groups from "./Pages/Groups";
// Offers
import Insurance from "./Pages/Insurance";
import Cars from "./Pages/Cars";
// Settings
import Settings from "./Pages/Setting";

import Counter from "./Features/counter/Counter";

function App(): JSX.Element {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
