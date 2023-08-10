import { initializeApp, } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


var firebaseConfig = {
  apiKey: "AIzaSyDpLmM79mUqbMDBexFtOQOkSl0glxCW_ds",
  authDomain: "lfasdfkjkjlkjl.firebaseapp.com",
  databaseURL: "https://lfasdlkjkjlkjl.firebaseio.com",
  projectId: "lfasdlkjkjlkjl",
  storageBucket: "lfasdlkjkjlkjl.appspot.com",
  messagingSenderId: "616270824980",
  appId: "1:616270824990:web:40c8b177c6b9729cb5110f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesCol = collection(db, 'lehoangquy');
const citySnapshot = await getDocs(citiesCol);
const list = citySnapshot.docs.map(doc => doc.data());
console.log("All data in 'lehoangquy' collection", list);
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
  //   console.log("All data in 'lehoangquy' collection", data);
  // });


