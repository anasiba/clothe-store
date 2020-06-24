import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { singInWithGoogleAccount } from '../../firebase/firebase.util'

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

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }

    render() {
        return (
            <div className='sign-in' onSubmit={this.handleSubmit}>
                <h2 className='title'>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form>
                    <FormInput
                        name="email"
                        type='email'
                        value={this.state.email}
                        label="email"
                        onChange={this.handleChange}
                        required />

                    <FormInput
                        name="password"
                        type='password'
                        label='password'
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
