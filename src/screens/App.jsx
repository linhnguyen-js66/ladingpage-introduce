import "../styles/index.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "../components/Navbar/NavbarElement"
import HomePageScreen01 from "./01-HomePage-Screen/01-HomePage-Screen"
import IntroduceScreen02 from "./02-Introduce-Screen/02-Introduce-Screen"
const App = () => {
    return (
        <>
            <Router>
               <Navbar/>
               <Switch>
                  <Route path="/" exact component={HomePageScreen01}/>
                  <Route path="/introduce" exact component={IntroduceScreen02}/>
               </Switch>
            </Router>        
        </>
    )
}
export default App