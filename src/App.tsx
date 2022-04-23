import React from "react";
import { Routes, Route } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

// Components
import Landing from "./Pages/Landing";
import PartnerLanding from "./Pages/PartnerLanding";
import AdminLanding from "./Pages/AdminLanding";
import Counter from "./Features/CounterApp/Counter";
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
import Settings from "./Pages/Settings";

import 'antd/dist/antd.variable.min.css';


export default function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/dashboard/" element={<Dashboard />} > 
          <Route path="summary" element={<Summary />} />
          <Route path="friends" element={<Friends />} />  
          <Route path="groups" element={<Groups />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="cars" element={<Cars />} />  
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/partner" element={<PartnerLanding />}> 

        </Route>
        <Route path="/admin" element={<AdminLanding />}>

        </Route>
        <Route path="/example" element={<Counter />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}
