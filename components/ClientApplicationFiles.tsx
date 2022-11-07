import { getStorage, ref as storageRef } from "firebase/storage";
import { firebaseApp } from "../firebase/initfirebase";
import { useDownloadURL } from "react-firebase-hooks/storage";

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
  return <div>{downloadableFile?.toString()}</div>;
}
