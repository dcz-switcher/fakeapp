import { useEffect, useState } from 'react'
import './App.css'

import Navbar from "./partials/Navbar"
import HomeView from "./views/HomeView"
import MasDetailView from "./views/UniversView"
import MasHomeView from "./views/ProductView"


function App() {

  const [currentView, setCurrentView] = useState("HomeView");

  const [viewStack, setViewStack] = useState(["HomeView"]);


  const navTo = (viewName:string) => {
    console.log('navto ' + viewName);
    setCurrentView(viewName);

    let newStack = viewStack;
    newStack.push(viewName);
    console.log(newStack);
    setViewStack(newStack);
  }

  const onCloseView = () => {
    console.log('close view')
    let newStack = viewStack.slice(0, viewStack.length - 1);
    console.log(newStack);

    setViewStack(newStack);
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
