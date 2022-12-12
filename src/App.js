import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Appointment from './components/Appointment';
import Best from './components/Best';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Appointment />
      <Best />

    </div>
  );
}

export default App;
