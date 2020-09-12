import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAx708bDz0uvPC1atDbQbByfu5dys_bvNQ",
    authDomain: "chattest-20275.firebaseapp.com",
    databaseURL: "https://chattest-20275.firebaseio.com",
    projectId: "chattest-20275",
    storageBucket: "chattest-20275.appspot.com",
    messagingSenderId: "377782534287",
    appId: "1:377782534287:web:1ced6779b0d59142ecb0fa"
}
firebase.initializeApp(config)
export const auth = firebase.auth;
export const db = firebase.database();
