import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="h-max max-w-full bg-white p-1">
      <Navbar />
      <Beranda />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
