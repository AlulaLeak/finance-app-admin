"use client";
import { useState } from "react";
import { QuerySnapshot, DocumentData } from "firebase/firestore";

export function useClientList() {
  const [ogList, setOGList] = useState<DocumentData[]>([]);
  const [list, setList] = useState<DocumentData[]>([]);
  const [noPersonsFound, setNoPersonsFound] = useState<boolean>(false);

  async function initializeClientList(
    value: QuerySnapshot<DocumentData> | undefined
  ): Promise<void> {
    var returnArr: any[] = [];
    value?.docs.map((doc) => {
      returnArr.push(doc.data());
    });
    setList(returnArr);
    setOGList(returnArr);
  }

  function sortList(e: React.ChangeEvent<HTMLInputElement>) {
    setNoPersonsFound(false);
    let newList: DocumentData[] = [];
    if (e.target.value === "") {
      setList(ogList);
      return;
    } else
      ogList.map((val) => {
        if (val.name.toLowerCase().includes(e.target.value.toLowerCase()))
          newList.push(val);
      });

    if (newList[0] === undefined) {
      setNoPersonsFound(true);
      return;
    } else {
      setList(newList);
      return;
    }
  }

  return { initializeClientList, sortList, list, noPersonsFound };
}
