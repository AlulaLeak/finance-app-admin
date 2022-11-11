import { ref as storageRef } from "firebase/storage";
import { doc, increment, updateDoc, FieldValue } from "firebase/firestore";
import { storage, db } from "../firebase/initfirebase";
import { useDownloadURL, useUploadFile } from "react-firebase-hooks/storage";
import Link from "next/link";
import { useEffect, useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css";

interface applicationFileNameType {
  document: string;
  fileName: string;
}

export default function ClientApplicationFiles({
  params,
  fileInfo,
}: {
  params: { id: string };
  fileInfo: applicationFileNameType;
}) {
  const [selectedFile, setSelectedFile] = useState<File>();
  const storeRef = storageRef(storage, `${params.id}/${fileInfo.document}/${selectedFile?.name}`);
  const userDocRef = doc(db, "users", params.id);
  const [downloadableFile, downloadableFileLoading] = useDownloadURL(
    storageRef(storage, `${params.id}/${fileInfo.document}/${fileInfo.fileName}`)
  );
  const [uploadFile, uploading, snapshot, error] = useUploadFile();

  const upload = async () => {
    if (selectedFile) {
      const result = await uploadFile(storeRef, selectedFile);
      alert(`Result: ${JSON.stringify(result)}`);
      await updateDoc(userDocRef, {
        [fileInfo.document]: selectedFile.name,
      });
      if (!fileInfo.document) {
        await updateDoc(userDocRef, {
          step: increment(1),
        });
      }
    }
  };
  useEffect(() => {}, [snapshot?.metadata]);

  if (downloadableFileLoading) return <div>Loading...</div>;
  return (
    <>
      <li className="ph3 pv3 bb b--light-silver">
        <h3>{fileInfo.document}:</h3>
        <Link href={`${downloadableFile}`}>{fileInfo.fileName}</Link>
        <div className="w-100 tr">
          <button onClick={upload} className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60">
            Upload New File
          </button>
        </div>
        <input
          className="f6 button-reset bg-white ba b--black-10 pointer pv1 black-60"
          type="file"
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : undefined;
            setSelectedFile(file);
          }}
        />
        {error && <strong>Error: {error.message}</strong>}
        {uploading && <span>Uploading file...</span>}
        {snapshot && <span>Snapshot: {JSON.stringify(snapshot.state)}</span>}
      </li>
    </>
  );
}
