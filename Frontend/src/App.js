import { AllRoute } from './Allroutes/AllRoute';
import './App.css';
import Footer from './Home/Footer';
import Navbar from './Home/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;
