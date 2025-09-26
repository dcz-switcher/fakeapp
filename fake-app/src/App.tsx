import { useEffect, useState } from 'react'
import './App.css'

import Navbar from "./partials/Navbar"
import HomeView from "./views/HomeView"
import UniversView from "./views/UniversView"
import ProductView from "./views/ProductView"


function App() {


  const [viewStack, setViewStack] = useState(["HomeView"]);


  const navTo = (viewName:string, arg:any) => {
    console.log('navto ' + viewName);

    setViewStack(prev => [...prev, viewName]); // copie immuable
  }
  
  const onCloseView = () => {
    console.log('close view');
    setViewStack(prev => prev.slice(0, prev.length - 1)); // copie immuable
  }

  return (
    <div className='app'>
      <div className="stack">
        <HomeView current={true} navTo={navTo}/>
        <UniversView stacked={viewStack.indexOf("UniversView") > 0} navTo={navTo} onClose={onCloseView}/>  
        <ProductView stacked={viewStack.indexOf("ProductView") > 0} onClose={onCloseView}/>  
      </div>

      <Navbar/>
    </div>
  )
}

export default App
