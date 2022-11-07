//
"use client";
import { useEffect, useContext } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../firebase/initfirebase";
import { getStorage, ref as storageRef } from "firebase/storage";
import ClientApplicationFiles from "../../../../components/ClientApplicationFiles";
import ClientApplicationInfo from "../../../../components/ClientApplicationInfo";

interface applicationPersonalInfoType {
  question: string;
  answer: string;
}
interface applicationFileNameType {
  document: string;
  fileName: string;
}

export default function ClientPage({ params }: { params: { id: string } }) {
  const docRef = doc(getFirestore(firebaseApp), "users", params.id);
  const [docData, docDataLoading, docDataError] = useDocumentData(docRef);

  const applicationPersonalInfo: applicationPersonalInfoType[] = [
    { question: "Name to Apply As", answer: docData?.application_name },
    { question: "Date of Birth", answer: docData?.date_of_birth },
    { question: "Pronouns", answer: docData?.pronouns },
  ];
  const applicationFileInfo: applicationFileNameType[] = [
    { document: "doc_1", fileName: docData?.doc_1 },
    { document: "doc_2", fileName: docData?.doc_2 },
    { document: "doc_3", fileName: docData?.doc_3 },
  ];

  useEffect(() => {
    // console.log("docData:", docData);
  }, [docData !== undefined]);

  if (docData === undefined || docData === undefined) return <div>Loading...</div>;
  return (
    <>
      {applicationPersonalInfo.map((personalInfo, idx) => {
        return <ClientApplicationInfo key={idx} params={params} personalInfo={personalInfo} />;
      })}
      {applicationFileInfo.map((fileInfo, idx) => {
        return <ClientApplicationFiles key={idx} params={params} fileInfo={fileInfo} />;
      })}
    </>
  );
}

// Todo: display user info
// incorporate storage
