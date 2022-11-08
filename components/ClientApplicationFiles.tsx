import { getStorage, ref as storageRef } from "firebase/storage";
import { firebaseApp } from "../firebase/initfirebase";
import { useDownloadURL } from "react-firebase-hooks/storage";
import Link from "next/link";

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
  const storage = getStorage(firebaseApp);

  const [downloadableFile, downloadableFileLoading, downloadableFileError] = useDownloadURL(
    storageRef(storage, `${params.id}/${fileInfo.document}/${fileInfo.fileName}`)
  );

  if (downloadableFileLoading) return <div>Loading...</div>;
  return (
    <li className="ph3 pv3 bb b--light-silver">
      <h3>{fileInfo.document}:</h3>
      <Link href={`${downloadableFile}`}>{fileInfo.fileName}</Link>
      <div className="w-100 tr">
        <button
          // onClick={() => router.push(`/dashboard/clients/${val.uid}`)}
          className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
        >
          Upload New File
        </button>
      </div>
    </li>
  );
}
