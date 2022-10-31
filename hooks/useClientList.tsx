import { useState } from "react";
import axios from "axios";

interface ListType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export function useClientList() {
  const [ogList, setOGList] = useState([]);
  const [list, setList] = useState([]);
  const [noPersonsFound, setNoPersonsFound] = useState(false);

  async function initializeClientList(): Promise<void> {
    const data = await axios.get("https://dummyjson.com/products");
    setList(data.data.products);
    setOGList(data.data.products);
  }

  function sortList(e) {
    setNoPersonsFound(false);
    let newList = [];
    if (e.target.value === "") {
      setList(ogList);
      return;
    } else
      ogList.map((val) => {
        if (
          val.description.toLowerCase().includes(e.target.value.toLowerCase())
        )
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
