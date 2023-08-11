// import firebase from 'firebase/app';
// import 'firebase/firestore';


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
  // firebase.initializeApp(firebaseConfig);
  document = { Names: value };
  collection = [{ firstname: quy  }, { lastname: le }];
  const db = firebase.firestore();
  const lehoangquyRef = firebase.firestore().collection('lehoangquy')
  .firestore()
  .collection("lehoangquy")
  .onSnapshot(snapshot) 
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  //   console.log("All data in 'lehoangquy' collection", data);
  // });
  function resign(names)
{
    
    alert("hello " + names);
    return names;
}
 

