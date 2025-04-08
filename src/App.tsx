import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import UsersListPage from "./pages/UsersListPage/UsersListPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";

function App() {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <Routes>
        <Route path="/" element={<UsersListPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
