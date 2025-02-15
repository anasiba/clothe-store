import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.util'

import './sign-up.styles.scss'

export default class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('passwords don\'t match')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (e) {
            console.log(e)
        }

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return (
            <div className='sign-up' >
                <h2 className='title'>I do not have an account</h2>
                <span>Sing up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required />

                    <FormInput
                        type='email'
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required />

                    <FormInput
                        type='password'
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required />

                    <FormInput
                        type='password'
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required />


                    <CustomButton type='submit'>Sign up</CustomButton>

                </form>
            </div>
        )
    }
}
