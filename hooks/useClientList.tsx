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
    let list: DocumentData[] = [];
    value?.docs.map((doc) => {
      list.push(doc.data());
    });
    setList(list);
    setOGList(list);
  }

  function sortList(e: React.ChangeEvent<HTMLInputElement>, sortyBy: string) {
    setNoPersonsFound(false);
    let newList: DocumentData[] = [];
    if (e.target.value === "") {
      setList(ogList);
      return;
    } else {
      ogList.map((val) => {
        if (
          val[sortyBy.toLowerCase()]
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
          newList.push(val);
      });
    }

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
