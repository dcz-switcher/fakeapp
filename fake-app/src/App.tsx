import { useEffect, useState } from 'react'
import './App.css'

import Navbar from "./partials/Navbar"
import HomeView from "./views/HomeView"
import MasDetailView from "./views/MasDetailView"
import MasHomeView from "./views/MasHomeView"


function App() {

  const [currentView, setCurrentView] = useState("HomeView");

  const [viewStack, setViewStack] = useState(["HomeView"]);


  const navTo = (viewName:string) => {
    console.log('navto ' + viewName);
  //setCurrentView(viewName);

  setViewStack(prev => [...prev, viewName]); // copie immuable
  }
  
  const onCloseView = () => {
    console.log('close view');
  setViewStack(prev => prev.slice(0, prev.length - 1)); // copie immuable
  }

  return (
    <>
      <div className="stack">
        <HomeView current={true} navTo={navTo}/>
        <MasDetailView stacked={viewStack.indexOf("MasDetailView") > 0} onClose={onCloseView}/>  
        <MasHomeView stacked={viewStack.indexOf("MasHomeView") > 0}/>
      </div>

      <Navbar/>
    </>
  )
}

export default App
