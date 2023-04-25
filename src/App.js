import './App.css';
import AppLayout from "./components/layouts/AppLayout";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <AppLayout>
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
