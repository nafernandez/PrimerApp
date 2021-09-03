import * as firebase from "firebase";

const config= {
    apiKey: "AIzaSyB-6hu7mWNU2B49Em9KmtHHHFLHMLCtTCQ",
    authDomain: "pruebaapp-5d354.firebaseapp.com",
    projectId: "pruebaapp-5d354",
    storageBucket: "pruebaapp-5d354.appspot.com",
    messagingSenderId: "785895416256",
    appId: "1:785895416256:web:e4d6d470611fc685dde825",
    measurementId: "G-FM2T1MPR3Y"
}

firebase.initializeApp(config);

export async function  loginUser(username:string, password:string) {
    const email = `${username}@nati.com`
    try{
        const res = await firebase.auth(). signInWithEmailAndPassword(email, password);
        console.log(res);
        return true;
    }catch(error){
        console.log(error);
        return false;
    }
}
