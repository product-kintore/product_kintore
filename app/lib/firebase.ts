import { initializeApp, getApp, getApps } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import { User } from "@/app/types/types";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJET_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGER_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const initialiFirebaseApp = () => {
  !getApps().length ? initializeApp(firebaseConfig) : getApp();
};

export const upsertUserWhenSignin = async (docId: string, user: User) => {
  const docRef = doc(db, "users", docId);
  await setDoc(docRef, user, { merge: true });
};

// FIXME: do not use any
export const updateUser = async (docId: string, userParams: any) => {
  const docRef = doc(db, "users", docId);
  await setDoc(docRef, userParams, { merge: true });
}

export const fetchUser = async (docId: string) => {
  const docRef = doc(db, "users", docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    }
    // const user: User = {
    //   id: docSnap.id,
    //   name: docSnap.data().name,
    //   email: docSnap.data().email,
    //   photoUrl: docSnap.data().photoUrl,
    //   link: docSnap.data().link,
    // };
    // return user;
  }
  return null;
};

export const fetchUsers = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.docs.map((doc) => {
    const user: User = {
      id: doc.id,
      name: doc.data().name,
      email: doc.data().email,
      photoUrl: doc.data().photoUrl,
      link: doc.data().link,
    };
    return user;
  });
};

// FIXME: do not use any
export const addActivity = async (docId: string, params: any) => {
  params.createdAt = new Date();
  params.updatedAt = new Date();
  const collectionPath = collection(db, "users", docId, "activities");
  await addDoc(collectionPath, params);
  // await setDoc(doc(collectionPath), params, { merge: true });
}

// export const updateActivity = async (docId: string, activityId: string, params: any) => {
export const updateActivity = async (docId: string, params: any) => {
  params.updatedAt = new Date();
  const activityId = "l7FsF4VgcC3lUDf1SXMN";
  const docRef = doc(db, "users", docId, "activities", activityId);
  await setDoc(docRef, params, { merge: true });
}

export const fetchActivities = async (docId: string) => {
  const snapshot = await getDocs(collection(db, "users", docId, "activities"));
  return snapshot.docs.map((doc) => {
    const activity = {
      id: doc.id,
      ...doc.data(),
    };
    return activity;
  });
}
