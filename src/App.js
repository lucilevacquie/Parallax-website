import React, { useEffect } from "react"
import './App.css';
import Background from "./components/background";

const App = () => {
  //unable the normal scroll event (x=0, y=0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <Background/>
}

export default App;
