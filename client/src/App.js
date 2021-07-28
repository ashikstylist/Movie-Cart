import React from 'react'
import { DataProvider } from './context/DataContext'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Search from './components/Search/Search';
import Detail from './components/Detail/Detail';

function App() {
  
  return (
    <div>
      <DataProvider>
          <Router>
            <Header />
              <Switch >
                <Redirect exact from="/" to="moviecart" />
                  <Route exact path = "/moviecart" >
                      <Search />
                      <Cart />
                  </Route>
                  <Route path = "/moviecart/:id/details" >
                      <Detail />
                  </Route>
              </Switch>  
          </Router>
      </DataProvider>
    </div>
  )
}

export default App
