import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Footer from '../../common/Footer';
import { Header } from '../../common/Header'
import ContactUs from '../../contactUs/ContactUs';
import Details from '../details/Details';
import Home from '../Home';
  

const Pages = () => {
  return (
    <>
     <Router>
        <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/cart/:id'>
                    <Details />
                </Route>
                <Route exact path='/Contact'>
                    <ContactUs />
                </Route>
            </Switch>
        <Footer />
     </Router>
    </>
  )
}

export default Pages