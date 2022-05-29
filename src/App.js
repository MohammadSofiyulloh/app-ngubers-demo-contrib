import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="h-max max-w-full bg-white p-1">
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Beranda />} />
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
