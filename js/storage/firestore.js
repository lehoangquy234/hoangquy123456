import { initializeApp, } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBhhC2wXY-ATpOoG3aKHqhuwShbbQxeFX0",
  authDomain: "myproject-b342c.firebaseapp.com",
  projectId: "myproject-b342c",
  storageBucket: "myproject-b342c.appspot.com",
  messagingSenderId: "906406743938",
  appId: "1:906406743938:web:8b63555ec6a50206a0899b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// This will trigger a full page redirect away from your app

// After returning from the redirect when your app initializes you can obtain the result
const result = await getRedirectResult(auth);
if (result) {
  // This is the signed-in user
  const user = result.user;
  // This gives you a Facebook Access Token.
  const credential = GoogleAuthProvider.credentialFromResult(auth, result);
  const token = credential.accessToken;}
 else {
  await signInWithRedirect(auth, provider);
}
// firstname = { string: quy }
// lastname = {string: le}
// collection = [{ firstname: 123 }, { lastname: 1234 }] 

//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// signInWithRedirect(auth, provider)
//   .then((result) => {
//     debugger;
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     debugger;
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

// const db = getFirestore(app);
// const citiesCol = collection(db, 'lehoangquy');
// const citySnapshot = await getDocs(citiesCol);
// const list = citySnapshot.docs.map(doc => doc.data());
// console.log("All data in 'lehoangquy' collection", list);
// document = { Names: value };
// collection = [{ firstname: quy }, { lastname: le }];

// const lehoangquyRef = firebase.firestore().collection('lehoangquy')
//   .firestore()
//   .collection("lehoangquy")
//   .onSnapshot(snapshot)
// const data = snapshot.docs.map((doc) => ({
//   id: doc.id,
//   ...doc.data(),
// }));
//     console.log("All data in 'lehoangquy' collection", data);
//   });


