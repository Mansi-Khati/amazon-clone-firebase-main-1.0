// // v9 compat packages are API compatible with v8 code
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDfAQVO-afVwThOs9DpBmFYYPgtk7W8MXc",
//   authDomain: "e-clone-95439.firebaseapp.com",
//   projectId: "e-clone-95439",
//   storageBucket: "e-clone-95439.appspot.com",
//   messagingSenderId: "1056653075822",
//   appId: "1:1056653075822:web:b037d120c680529ffacd7f",
//   measurementId: "G-3QLTDY15DG",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
// Import the functions you need from the SDKs you need
//------------------------------------------------------------------------------------------

// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDfAQVO-afVwThOs9DpBmFYYPgtk7W8MXc",
//   authDomain: "e-clone-95439.firebaseapp.com",
//   projectId: "e-clone-95439",
//   storageBucket: "e-clone-95439.appspot.com",
//   messagingSenderId: "1056653075822",
//   appId: "1:1056653075822:web:b037d120c680529ffacd7f",
//   measurementId: "G-3QLTDY15DG",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

//-------------------------------------------------------------------------------------------
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAEoV9gQgA1vcU9aRCa0y5puX74Fg1CQt0",
  authDomain: "clone-b40e2.firebaseapp.com",
  projectId: "clone-b40e2",
  storageBucket: "clone-b40e2.appspot.com",
  messagingSenderId: "685343958225",
  appId: "1:685343958225:web:8ceaad40b579188bf5d1f0",
  measurementId: "G-4HDW85TYKM"
};

  // apiKey: "AIzaSyAEoV9gQgA1vcU9aRCa0y5puX74Fg1CQt0",
  // authDomain: "clone-b40e2.firebaseapp.com",
  // projectId: "clone-b40e2",
  // storageBucket: "clone-b40e2.appspot.com",
  // messagingSenderId: "685343958225",
  // appId: "1:685343958225:web:8ceaad40b579188bf5d1f0",
  // measurementId: "G-4HDW85TYKM"
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
