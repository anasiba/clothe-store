import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCGARPaoD8aBkfNyK49S22jtxEXRHT6Jpw",
    authDomain: "crwn-db-a2943.firebaseapp.com",
    databaseURL: "https://crwn-db-a2943.firebaseio.com",
    projectId: "crwn-db-a2943",
    storageBucket: "crwn-db-a2943.appspot.com",
    messagingSenderId: "206685511083",
    appId: "1:206685511083:web:faf324063d96e2d0"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    
    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const singInWithGoogleAccount = () => auth.signInWithPopup(provider)

export default firebase;