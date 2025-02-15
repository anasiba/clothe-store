import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { auth } from '../../firebase/firebase.util'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../asserts/logo.svg'

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>

    <div className="options">
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
         </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
          :
          <Link className='option' to='/signin'>SING IN</Link>
      }

      <CartIcon />

    </div>
    {
      hidden ? null : <CartDropdown />
    }

  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);