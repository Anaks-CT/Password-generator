import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { SavedPasswords } from "./pages/SavedPasswords";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/passwords" Component={SavedPasswords} />
        <Route path="*" element={<Navigate to="/" replace="true" />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
