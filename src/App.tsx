/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/dashboard";
import Header from "./components/header";
import { Toaster } from "sonner";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/details/Details";
import NewDashboard from "./components/new-dashboard/NewDashboard";
import ListDetails from "./components/new-dashboard/ListDetails";

function App() {
  return (
    <>
      {/* <CssBaseline />
      <Header />
      <Dashboard />
      <Toaster /> */}
      {/* <Header /> */ }
      <Router>
        <Routes>
          <Route path="/" element={ <NewDashboard /> } />
          <Route path="/:department_name/:type/:id" element={ <Details /> } />
          <Route path="/candidate-details" element={ <ListDetails /> } />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
