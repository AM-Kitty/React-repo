import React from "react"
import {BrowserRouter} from "react-router-dom"
import Route from "react-router-dom/Route"
import Home from './components/Home/home'  //Home Page
import Header from './components/System/Header'


class Router extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/head" component={Header}></Route>
                </div>
            </BrowserRouter>
        )
    }
}
export default Router;