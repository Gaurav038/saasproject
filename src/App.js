import './App.css';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className=" App">
      <SideNav />
      <div>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
