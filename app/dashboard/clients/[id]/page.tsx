//
"use client";
import { useEffect, useContext } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../firebase/initfirebase";

export default function ClientPage({ params }: { params: { id: string } }) {
  const docRef = doc(getFirestore(firebaseApp), "users", params.id);
  const [value, loading, error] = useDocumentData(docRef);

  useEffect(() => {}, [value !== undefined]);

  if (value === undefined) return <div>Loading...</div>;
  return (
    <>
      <p>{params.id}</p>
    </>
  );
}
