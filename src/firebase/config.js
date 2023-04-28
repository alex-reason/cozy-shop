import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from 'firebase/auth';

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

// EXPORTS

//-- create userDoc --//
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

//--collections and adding documents--//
export const addCollectionsAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done')
};

//--retrieve specific category from collection--//
export const getCategoriesAndDocs = async (category) => {
    const collectionRef = collection(db, category);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapShot) => {
        const {title, items} = docSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;
}

//-- google sign in/ sign up -- //
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
// -- sign out -- //
export const signOutUser = async () => await signOut(auth);
// listen to auth changes
export const authChangeListener = (callback) => onAuthStateChanged(auth, callback);

export { db, auth };
