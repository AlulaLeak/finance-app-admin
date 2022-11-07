"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useClientList } from "../../../hooks/useClientList";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseApp } from "../../../firebase/initfirebase";

const sortBy: string[] = ["Name", "Email"];

export default function ClientList() {
  const [value, loading, error] = useCollection(collection(getFirestore(firebaseApp), "users"));

  const { initializeClientList, sortList, list, noPersonsFound } = useClientList();

  useEffect(() => {
    initializeClientList(value);
  }, [value !== undefined]);

  function renderList() {
    if (list[0] === undefined) return <div>Loading...</div>;
    if (noPersonsFound) return <div>No persons found</div>;
    return list?.map((val, idx) => {
      if (idx < 15)
        return (
          <article key={idx} className="dt w-100 bb b--black-05 pb2 mt2">
            <div className="dtc w2 w3-ns v-mid">
              <Image
                width={100}
                height={100}
                alt={`${val.name} with email ${val.email}`}
                src={val.photoUrl}
                className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
              />
            </div>
            <div className="dtc v-mid pl3">
              <h1 className="f6 f5-ns fw6 lh-title black mv0">{val.name}</h1>
              <h2 className="f6 fw4 mt0 mb0 black-60">{val.email}</h2>
            </div>
            <div className="dtc v-mid">
              <form className="w-100 tr">
                <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">
                  View Profile
                </button>
              </form>
            </div>
          </article>
        );
    });
  }

  return (
    <>
      <article className="cf">
        {sortBy.map((optionToSortBy, idx) => {
          return (
            <div key={idx} className="fl w-100 w-50-ns tc">
              <form className="pa4 black-80">
                <div className="measure">
                  <label className="f6 b db mb2">{optionToSortBy}</label>
                  <input
                    onChange={(e) => sortList(e, optionToSortBy)}
                    name="name"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    type="text"
                    aria-describedby="name-desc"
                  />
                  <small className="f6 black-60 db mb2">{`Search for a specific person by ${optionToSortBy.toLowerCase()}.`}</small>
                </div>
              </form>
            </div>
          );
        })}
      </article>
      <div className="mw8 center">{renderList()}</div>
    </>
  );
}

// TODO: Change navbar and make search collapse
// TODO: Create Specifc page
