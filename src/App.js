import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="authorization">
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
