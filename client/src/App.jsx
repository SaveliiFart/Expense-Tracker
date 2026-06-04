import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Expenses from "./pages/Expences.jsx"
import Overview from "./pages/Overview.jsx"
import Layout from "./components/Layout.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import "./global.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/overview" element={<Overview />} />
          <Route path="/expenses" element={<Expenses />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App