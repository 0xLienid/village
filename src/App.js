import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import DividerImage from "./components/DividerImage/DividerImage";
import BelowFold from "./components/BelowFold/BelowFold";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <MainContent />
        <DividerImage />
        <BelowFold />
        <DividerImage />
      </body>
    </div>
  );
}

export default App;
