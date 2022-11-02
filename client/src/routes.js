import React from 'react'
import {BrowserRouter ,Routes,Route} from "react-router-dom"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/">
                <div>Home</div>
            </Route>
            <Route path="/register">
                <div>Register</div>
            </Route>
            <Route path="/login">
                <div>Login</div>
            </Route>
            <Route path="/customer">
                <div>Customer</div>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router