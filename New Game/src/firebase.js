import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAyMMGRb5IXt2GpQm-ATXuqjef1f3lXmxo',
  authDomain: 'cubs-consulting.firebaseapp.com',
  projectId: 'cubs-consulting',
  storageBucket: 'cubs-consulting.appspot.com',
  messagingSenderId: '36675469793',
  appId: '1:36675469793:web:8a078e1a33ffee013d12a0',
  measurementId: 'G-TS78RSMGRZ',
})

const auth = getAuth(firebaseApp)
// const db = getFirestore(firebaseApp)

// Detect auth state
console.log(auth)

onAuthStateChanged(auth, (user) => {
  // console.log(user)
  if (user != null) {
    console.log('Logged in!')
  } else {
    console.log('No user!')
  }
})
