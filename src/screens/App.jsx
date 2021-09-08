import "../styles/index.scss"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "../components/Navbar/NavbarElement"
import LandingPageScreen01 from "./01-LandingPage-Screen/01-LandingPage-Screen"
const App = () => {
    return (
        <>
            <Router>
               <Navbar />
               <Switch>
                  <Route path="/" >
                      <LandingPageScreen01/>
                  </Route>
               </Switch>
            </Router>        
        </>
    )
}
export default App