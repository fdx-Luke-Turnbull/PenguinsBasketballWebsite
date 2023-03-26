import React from "react";
import "./App.css";

import ErrorBoundary from "./Components/error_boundary/error_boundary";


import Navigation from "./Components/Navigation/Navigation";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <React.StrictMode>
          <ErrorBoundary>
            <Navigation />
            <Main />
            <Footer />
          </ErrorBoundary>  
        </React.StrictMode>

    </div>
  );
}

export default App;