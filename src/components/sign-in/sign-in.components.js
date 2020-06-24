import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, singInWithGoogleAccount } from '../../firebase/firebase.util'

import './sign-in.styles.scss'

export default class SignIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error)

        }
    }

    render() {
        return (
            <div className='sign-in' >
                <h2 className='title'>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type='email'
                        value={this.state.email}
                        label="Email"
                        onChange={this.handleChange}
                        required />

                    <FormInput
                        name="password"
                        type='password'
                        label='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />

                    <div className="buttons">
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={singInWithGoogleAccount} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
