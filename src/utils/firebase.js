import { initializeApp } from "firebase/app";
import  {getAuth, createUserWithEmailAndPassword, 
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
onAuthStateChanged,
signOut
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch
, query, getDocs} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDbO9w6PwSeWd8s0EnHaF-uTKcbKBDnvRs",
    authDomain: "total-beauty-affairs.firebaseapp.com",
    projectId: "total-beauty-affairs",
    storageBucket: "total-beauty-affairs.appspot.com",
    messagingSenderId: "238006185351",
    appId: "1:238006185351:web:cda5bc8c0c6ecfa0413722"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//Giving the database a name
export const database = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters(
    {
        prompt: 'select_account'
    }
)

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    const userDocRef = doc(database, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {firstName, lastName, email} = userAuth;
        const createdAt = new Date();
    
    try {
        await setDoc(userDocRef, {firstName, lastName, email,  createdAt, ...additionalInformation});
    } catch (error) {
    }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password)
}

export const signInWithGooglePopup = async () => {
    return signInWithPopup(auth, googleProvider);
}

export const onAuthStateChangedListener = async (callback) => {
    onAuthStateChanged(auth, callback);
}

export const signOutUser = async () => {
    signOut(auth);
}



export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = collection(database, collectionKey);
    const batch = writeBatch(database);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.MainCategory);
        batch.set(docRef, object);
    })
    await batch.commit();
}

export const getCategoriesAndDocuments = async() => {
    const collectionRef = collection(database, "categories");
    const q = query(collectionRef);
    // Can also do this directly
    // const q = query(collection(database, "categories"))
    const querySnapshot = await getDocs(q);
    // querySnapshot.docs.map((docSnapshot, index) => console.log(index,"index",docSnapshot.data()));
    const categoriesArray = querySnapshot.docs.reduce((acc, doc, index) => {
        const {MainCategory, icon, subCategoriesList} = doc.data();
        acc[index] = {"MainCategory" : MainCategory, icon: icon, "subCategoriesList": subCategoriesList};
        return acc;
    }, []); 
    return categoriesArray
    
}

