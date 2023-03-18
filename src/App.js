import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Main />
        <Footer />
    </div>
  );
}

export default App;