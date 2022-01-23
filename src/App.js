import "./App.css";
import Navi from "./components/navbar";
import React from "react";
import Carrousel from "./components/Carrousel";
import Librar from "./components/Library";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navi />
      <Carrousel />
      <Librar />
      <Footer />
    </div>
  );
}

export default App;
/* // --openssl-legacy-provider
  --openssl-legacy-provider// */
