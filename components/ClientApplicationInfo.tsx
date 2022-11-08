import React from "react";

interface applicationPersonalInfoType {
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
  return (
    <li className="ph3 pv3 bb b--light-silver">
      <h2>{personalInfo.question}: </h2>
      <p>{personalInfo.answer}</p>
      <div className="w-100 tr">
        <button
          // onClick={() => openFileSelector()}
          className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
        >
          Edit
        </button>
      </div>
    </li>
  );
}
