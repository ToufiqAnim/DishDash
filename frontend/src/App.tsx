import { Route, Routes } from 'react-router-dom';

import Layout from './layout/layout';
import AuthCallback from './pages/AuthCallback';
import HomePage from './pages/HomePage';
import UserProfileForm from './forms/user-profile-form/UserProfileForm';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallback />} />
      <Route path="/user-profile" element={<UserProfileForm />} />
    </Routes>
  );
}

export default App;
