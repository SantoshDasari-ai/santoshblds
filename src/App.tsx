import "./index.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";
import { allRoutes } from "./config/routes";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Layout>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {allRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Suspense>
          </div>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
