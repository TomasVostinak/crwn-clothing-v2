import { initializeApp } from "firebase/app";
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4nHcAwncjPkT9uBiz9hoiovbImPluLMU",
    authDomain: "crwn-clothing-db-849af.firebaseapp.com",
    projectId: "crwn-clothing-db-849af",
    storageBucket: "crwn-clothing-db-849af.firebasestorage.app",
    messagingSenderId: "501733881347",
    appId: "1:501733881347:web:5535debac7f1022748c036"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef;
}