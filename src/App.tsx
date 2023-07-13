import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import "./Common.css"
import "./App.css"

import Header from "./components/Header/Header"
import Character from "./components/Character/Character"
import City from "./components/City/City"
import Footer from "./components/Footer/Footer"
import History from "./components/History/History";
import Home from "./components/Home/Home"
import Log from "./components/Log/Log";
import Nav from "./components/Nav/Nav"

function App() {
    return (
        <Router>
            <Header />
            <div className="main-flex-container">
                <aside className='main-aside'>
                    <Nav />
                    <Log />
                </aside>

                <Switch>
                    <Route path="/" exact>
                        <Character />
                    </Route>

                    <Route path="/home" exact>
                        <Home />
                    </Route>

                    <Route path="/city" exact>
                        <City />
                    </Route>
                    <Route path="/history" exact>
                        <History />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

 // const hi:string = "Hello! I am F_T_R Game ver 0.0.0.0.1.2"