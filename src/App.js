import "./App.css";
import Navi from "./components/navbar";
import React from "react";
import Carrousel from "./components/Carrousel";
import Librar from "./components/Library";
function App() {
  return (
    <div>
      <Navi/>
      <Carrousel/>
      <Librar/>
      
       </div>
  );
}

export default App;
