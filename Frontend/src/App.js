import Admin from './Admin_Ajaya/Admin';
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
      {/* <Admin/> */}
    </div>
  );
}

export default App;
