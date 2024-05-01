import { Route, Routes } from 'react-router-dom';

import Layout from './layout/layout';
import AuthCallback from './pages/AuthCallback';
import HomePage from './pages/HomePage';

import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallback />} />
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfilePage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
