import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7Ul1_9-uNvhPpTfNE1TG67X7vgwAyxTU",
    authDomain: "finance-tracker-68266.firebaseapp.com",
    projectId: "finance-tracker-68266",
    storageBucket: "finance-tracker-68266.appspot.com",
    messagingSenderId: "529233377635",
    appId: "1:529233377635:web:6cc68566ff4c462d9fbb56"
};

//initialize firebase
initializeApp(firebaseConfig);

// initialize firestore and auth
const db = getFirestore();
const auth = getAuth();

// google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

// create userDoc
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userDocRef;
}

//exports
//--google sign in/ sign up-- //
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
//-- sign in/ sign up with email/password-- //
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}
//sign out
export const signOutUser = async () => await signOut(auth);
// listen to auth changes
export const authChangeListener = (callback) => onAuthStateChanged(auth, callback);

export { db, auth };
