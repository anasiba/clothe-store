import React from 'react'
import SignIn from '../../components/sign-in/sign-in.components'
import SignUp from '../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up-page.styles.scss'

const SignInAdnUpPage = () =>
  (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )


export default SignInAdnUpPage
