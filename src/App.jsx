import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CollectionsPage from "./pages/CollectionsPage";
import CollectionDetail from "./pages/CollectionDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/collections"
          element={<CollectionsPage />}
        />

        <Route
          path="/collections/:slug"
          element={<CollectionDetail />}
        />
      </Routes>
    </>
  );
}

export default App;