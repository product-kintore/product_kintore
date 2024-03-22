import { initializeApp, getApp, getApps } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  getDocs,
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  query,
  where,
  and,
  or,
  collectionGroup,
  initializeFirestore,
} from "firebase/firestore";
import { Activity, User } from "@/app/types/types";
import {
  ActivityParams,
  UserParams,
  UserParamsWhenSignin,
  UserSearchParams,
} from "@/app/types/schema";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJET_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGER_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

initializeFirestore(app, {
  ignoreUndefinedProperties: true,
})

const db = getFirestore(app);

export const initialiFirebaseApp = () => {
  !getApps().length ? initializeApp(firebaseConfig) : getApp();
};

export const upsertUserWhenSignin = async (
  docId: string,
  params: UserParamsWhenSignin,
) => {
  const docRef = doc(db, "users", docId);
  await setDoc(
    docRef,
    { ...params, createdAt: serverTimestamp(), updatedAt: serverTimestamp() },
    { merge: true },
  );
};

export const updateUser = async (docId: string, params: UserParams) => {
  const docRef = doc(db, "users", docId);
  await updateDoc(docRef, { ...params, updatedAt: serverTimestamp() });
};

export const fetchUser = async (docId: string) => {
  const docRef = doc(db, "users", docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const user: User = {
      id: docSnap.id,
      name: docSnap.data().name,
      email: docSnap.data().email,
      company: docSnap.data().company,
      role: docSnap.data().role,
      experiencePeriod: docSnap.data().experiencePeriod,
      selfIntroduction: docSnap.data().selfIntroduction,
      photoUrl: docSnap.data().photoUrl,
      socialMedia: docSnap.data().socialMedia,
      communityJoinedBackground: docSnap.data().communityJoinedBackground,
      communityInterestedActivities:
        docSnap.data().communityInterestedActivities,
      updatedAt: docSnap.data().updatedAt,
    };
    return user;
  }
  return null;
};

export const fetchUsers = async (params?: UserSearchParams) => {
  const usersRef = collection(db, "users");
  const queryResult = query(usersRef, buildQueryConstrains(params));
  const snapshot = await getDocs(queryResult);
  return snapshot.docs.map((doc) => {
    const user: User = {
      id: doc.id,
      name: doc.data().name,
      email: doc.data().email,
      company: doc.data().company,
      role: doc.data().role,
      experiencePeriod: doc.data().experiencePeriod,
      selfIntroduction: doc.data().selfIntroduction,
      photoUrl: doc.data().photoUrl,
      socialMedia: doc.data().socialMedia,
      communityJoinedBackground: doc.data().communityJoinedBackground,
      communityInterestedActivities: doc.data().communityInterestedActivities,
      updatedAt: doc.data().updatedAt,
    };
    return user;
  });
};

const buildQueryConstrains = (params?: UserSearchParams) => {
  const constrains = [];
  if (params?.role) {
    constrains.push(where("role", "==", params.role));
  }
  if (params?.experiencePeriodSince) {
    console.log(typeof params.experiencePeriodSince);
    constrains.push(
      where("experiencePeriod", ">=", Number(params.experiencePeriodSince)),
    );
  }
  if (params?.experiencePeriodTill) {
    constrains.push(
      where("experiencePeriod", "<=", Number(params.experiencePeriodTill)),
    );
  }
  if (params?.communityInterestedActivity) {
    constrains.push(
      where("communityInterestedActivities", "array-contains", [
        params.communityInterestedActivity,
      ]),
    );
  }
  if (params?.name) {
    constrains.push(
      or(
        where("name", ">=", params.name),
        where("name", "<=", params.name + "\uf8ff"),
      ),
    );
  }
  if (params?.company) {
    constrains.push(
      or(
        where("company", ">=", params.company),
        where("company", "<=", params.company + "\uf8ff"),
      ),
    );
  }
  return and(...constrains);
};

export const addActivity = async (docId: string, params: ActivityParams) => {
  const collectionPath = collection(db, "users", docId, "activities");
  await addDoc(collectionPath, {
    ...params,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

export const updateActivity = async (
  docId: string,
  activityId: string,
  params: ActivityParams,
) => {
  const docRef = doc(db, "users", docId, "activities", activityId);
  await updateDoc(docRef, { ...params, updatedAt: serverTimestamp() });
};

export const fetchActivity = async (docId: string, activityId: string) => {
  const docRef = doc(db, "users", docId, "activities", activityId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const activity: Activity = {
      id: docSnap.id,
      title: docSnap.data().title,
      date: docSnap.data().date,
      description: docSnap.data().description,
    };
    return activity;
  }
  return null;
};

export const fetchActivitiesByUser = async (docId: string) => {
  const snapshot = await getDocs(collection(db, "users", docId, "activities"));
  return snapshot.docs.map((doc) => {
    const activity: Activity = {
      id: doc.id,
      title: doc.data().title,
      date: doc.data().date,
      description: doc.data().description,
    };
    return activity;
  });
};

export const fetchActivities = async () => {
  const activities = collectionGroup(db, "activities");
  const snapshot = await getDocs(activities);
  return snapshot.docs.map((doc) => {
    const activity: Activity = {
      id: doc.id,
      title: doc.data().title,
      date: doc.data().date,
      description: doc.data().description,
    };
    return activity;
  });
};
