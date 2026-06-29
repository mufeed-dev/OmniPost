import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import AIComposer from "./pages/AIComposer";
import Scheduler from "./pages/Scheduler";

import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/ai-composer" element={<AIComposer />} />
          <Route path="/schedule" element={<Scheduler />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
