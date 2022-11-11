//
"use client";
import { useEffect } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../firebase/initfirebase";
import ClientApplicationFiles from "../../../../components/ClientApplicationFiles";
import ClientApplicationInfo from "../../../../components/ClientApplicationInfo";
import Image from "next/image";

interface applicationPersonalInfoType {
  document: string;
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
    { document: "application_name", question: "Application Name", answer: docData?.application_name },
    { document: "email", question: "Email", answer: docData?.email },
    { document: "date_of_birth", question: "Date of Birth", answer: docData?.date_of_birth },
    { document: "pronouns", question: "Pronouns", answer: docData?.pronouns },
  ];
  const applicationFileInfo: applicationFileNameType[] = [
    { document: "doc_1", fileName: docData?.doc_1 },
    { document: "doc_2", fileName: docData?.doc_2 },
    { document: "doc_3", fileName: docData?.doc_3 },
  ];

  useEffect(() => {}, [docData !== undefined]);

  if (docData === undefined || docData === undefined) return <div>Loading...</div>;
  return (
    <div className="mw8 center pa2">
      <div className="flex justify-between">
        <h1 className="underline f2 bold mw9 fl">{docData?.name}</h1>
        <div className="dtc pv3  w3-ns v-mid fl">
          {docData.photoUrl[8] === "l" && (
            <Image
              width={100}
              height={100}
              alt={`${docData.name} with email ${docData.email}`}
              src={docData.photoUrl}
              className="ba b--black-10 db br-100 w3 h3"
            />
          )}
          {docData.photoUrl[8] !== "l" && (
            <img
              alt={`${docData.name} with email ${docData.email}`}
              src="/img/avatar.png"
              className="ba b--black-10 db br-100 w3 h3"
            />
          )}
        </div>
      </div>
      <ul className="list mw8 pl0 mt0 ">
        {applicationPersonalInfo.map((personalInfo, idx) => {
          return <ClientApplicationInfo key={idx} params={params} personalInfo={personalInfo} />;
        })}
        {applicationFileInfo.map((fileInfo, idx) => {
          return <ClientApplicationFiles key={idx} params={params} fileInfo={fileInfo} />;
        })}
      </ul>
    </div>
  );
}
