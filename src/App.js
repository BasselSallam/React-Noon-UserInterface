import logo from './logo.svg';
import './App.css';
import { Footer } from './component/footer/footer';
import Navbar from './component/navBar/navBar';
import Details from './component/details/Details';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Details />
        <Footer />
      </div>

    </>
  );
}

export default App;
