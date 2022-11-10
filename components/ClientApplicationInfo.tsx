import { useState } from "react";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase/initfirebase";

interface applicationPersonalInfoType {
  document: string;
  question: string;
  answer: string;
}

export default function ClientApplicationInfo({
  params,
  personalInfo,
}: {
  params: { id: string };
  personalInfo: applicationPersonalInfoType;
}) {
  const userDocRef = doc(db, "users", params.id);

  const [newValueToInput, setNewValueToInput] = useState<string>();

  const uploadNewName = async () => {
    if (newValueToInput) {
      await updateDoc(userDocRef, {
        [personalInfo.document]: newValueToInput,
      });
      if (!personalInfo.answer) {
        await updateDoc(userDocRef, {
          step: increment(1),
        });
      }
      setNewValueToInput(undefined);
    }
  };

  return (
    <li className="ph3 pv3 bb b--light-silver">
      <h2>{personalInfo.question}: </h2>
      <p>{personalInfo.answer}</p>
      <div className="w-100 tr">
        <button onClick={uploadNewName} className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60">
          Edit
        </button>
      </div>
      <input
        className="f6 button-reset bg-white ba b--black-10 pointer pv1 black-60"
        type="text"
        onChange={(e) => {
          setNewValueToInput(e.currentTarget.value);
        }}
        value={newValueToInput !== undefined ? newValueToInput : `Enter a New ${personalInfo.question} Here`}
        onKeyPress={(e) => e.key === "Enter" && uploadNewName()}
        onFocus={(e) => setNewValueToInput("")}
      />
    </li>
  );
}
