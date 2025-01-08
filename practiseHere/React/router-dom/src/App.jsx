import React, { Suspense } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./Component/Dashboard"));
//Remember you need to use <Suspense fallback ={'loading...}> inside routes if you are using lazy loading
const LandingPage = React.lazy(() => import("./Component/LandingPage"));
import { NavigateButtons } from "./Component/Navigatebuttons";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigateButtons />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"Loading..."}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
