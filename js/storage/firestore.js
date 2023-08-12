import { initializeApp, } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

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

async function main() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
}

main();



// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();


// // This will trigger a full page redirect away from your app

// // After returning from the redirect when your app initializes you can obtain the result
// const result = await getRedirectResult(auth);
// if (result) {
//   // This is the signed-in user
//   // const user = result.user;
//   // // This gives you a Facebook Access Token.
//   // const credential = GoogleAuthProvider.credentialFromResult(auth, result);
//   // const token = credential.accessToken;
//   const db = getFirestore(app);
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// } else {
//   await signInWithRedirect(auth, provider);
// }
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


