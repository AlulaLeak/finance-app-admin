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
    <>
      <h3>{personalInfo.question} ?</h3>
      <p>{personalInfo.answer}</p>
    </>
  );
}
