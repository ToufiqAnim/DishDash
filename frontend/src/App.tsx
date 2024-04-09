import { Route, Routes } from 'react-router-dom';

import Layout from './layout/layout';
import AuthCallback from './pages/AuthCallback';
import HomePage from './pages/HomePage';

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
    </Routes>
  );
}

export default App;
