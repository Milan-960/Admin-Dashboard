import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="overview" element={<Blank />} />
          <Route path="policy" element={<Blank />} />
          <Route path="reports" element={<Blank />} />
          <Route path="company" element={<Blank />} />
          <Route path="useraccount" element={<Blank />} />
          <Route path="history" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
