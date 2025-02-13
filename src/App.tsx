/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/dashboard";
import Header from "./components/header";
import { Toaster } from "sonner";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/details/Details";

function App() {
  return (
    <>
      {/* <CssBaseline />
      <Header />
      <Dashboard />
      <Toaster /> */}
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={ <Dashboard /> } />
          <Route path="/:department_name/:type/:id" element={ <Details /> } />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
