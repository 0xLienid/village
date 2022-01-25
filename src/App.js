import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import DividerImage from "./components/DividerImage/DividerImage";
import BelowFold from "./components/BelowFold/BelowFold";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <DividerImage />
      <BelowFold />
      <DividerImage />
      <Footer />
    </div>
  );
}

export default App;
