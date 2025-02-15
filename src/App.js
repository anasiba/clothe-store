import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import {createStructuredSelector} from 'reselect'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAdnUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import CheckoutPage from './pages/checkout/checkout.component';


import { setCurrentUser } from './redux/user/user.actions'

import './App.css';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route path='/signin' 
                 render={()=>this.props.currentUser ? (<Redirect to='/' />):(<SignInAdnUpPage/>)} />
        </Switch>
      </div>
    );
  }

}

const mapStatToProps =createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStatToProps, mapDispatchToProps)(App);
