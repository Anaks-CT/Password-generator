import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { SavedPasswords } from "./pages/SavedPasswords";
import ErrorBoundary from "./error/ErrorBoundary";

function App() {

  return (
    <BrowserRouter>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/passwords" element={<SavedPasswords/>} />
        <Route path="*" element={<Navigate to="/" replace="true" />} />
      </Routes>
      <Toaster />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
