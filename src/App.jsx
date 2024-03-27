import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="bg-[#FFEFE0]">
      <Header />
      <div className="h-20 lg:h-28 w-full"></div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
