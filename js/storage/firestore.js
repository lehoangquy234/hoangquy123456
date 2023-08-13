import { initializeApp, } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import{doc, setDoc}from"firebase/firestore";

var firebaseConfig = {
  // apiKey: "AIzaSyDpLmM79mUqbMDBexFtOQOkSl0glxCW_ds",
  // authDomain: "lfasdfkjkjlkjl.firebaseapp.com",
  // databaseURL: "https://lfasdlkjkjlkjl.firebaseio.com",
  // projectId: "lfasdlkjkjlkjl",
  // storageBucket: "lfasdlkjkjlkjl.appspot.com",
  // messagingSenderId: "616270824980",
  // appId: "1:616270824990:web:40c8b177c6b9729cb5110f",
  apiKey: "AIzaSyBzsTmZO6gB1H3QcQB7Q5KCdfTxM_snovk",
  authDomain: "quydp123-1cb9d.firebaseapp.com",
  projectId: "quydp123-1cb9d",
  storageBucket: "quydp123-1cb9d.appspot.com",
  messagingSenderId: "770784304422",
  appId: "1:770784304422:web:b5c161890cc4e04f1335e7",
  measurementId: "G-JG7HSGSW5T"

};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addUser(user){
  console.log(user)

  // collection(db, "users").doc(user.firstName).set({
  //   Id:user.firstName,
  //   FirstName: user.firstName,
  //   LastName: user.lastName
  // })
  // .then(() => {
  //     console.log("Document successfully written!");
  // })
  // .catch((error) => {
  //     console.error("Error writing document: ", error);
  // });
    const userDoc = doc(db, "users", user.firstName);
    await setDoc(userDoc,{
    Id:user.firstName,
    FirstName: user.firstName,
    LastName: user.lastName
      
    })
  }

  export async function getUsers(){

    const users = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(doc => users.push(doc.data()));
    return users;

  }




