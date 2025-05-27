import "./index.css";
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";
import { initPreloading } from "./utils/preloadResources";
import { initServiceWorker } from "./utils/serviceWorker";
import { allRoutes } from "./config/routes";

function App() {
  // Initialize preloading of critical resources and service worker
  useEffect(() => {
    initPreloading();
    initServiceWorker();
  }, []);

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
