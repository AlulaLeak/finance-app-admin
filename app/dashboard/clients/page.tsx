"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useClientList } from "../../../hooks/useClientList";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseApp } from "../../../firebase/initfirebase";

const sortBy: string[] = ["Name", "Email"];

export default function ClientList() {
  const [value, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "users")
  );

  const { initializeClientList, sortList, list, noPersonsFound } =
    useClientList();

  useEffect(() => {
    initializeClientList(value);
  }, [value !== undefined]);

  function renderList() {
    if (list[0] === undefined) return <div>Loading...</div>;
    if (noPersonsFound) return <div>No persons found</div>;
    return list?.map((val, idx) => {
      if (idx < 15)
        return (
          <div key={idx} className="fl w-50 w-25-m w-20-l pa2">
            <a
              href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
              className="db link dim tc"
            >
              <Image
                width={1000}
                height={200}
                src={val.photoUrl}
                alt="Frank Ocean Blonde Album Cover"
                className={`w-100 db outline black-100`}
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Name</dt>
                <dd className="ml0 black truncate w-100">{val.name}</dd>
                <dt className="clip">Email</dt>
                <dd className="ml0 gray truncate w-100">{val.email}</dd>
              </dl>
            </a>
          </div>
        );
    });
  }

  return (
    <article>
      <div className="flex">
        {/* <div className="w-50 pa3 mr2">
          <h2 className="f3 fw4 pa3 mv0">Clients</h2>
        </div> */}
        {sortBy.map((optionToSortBy, idx) => {
          return (
            <div key={idx} className="w-50 pa3 mr2">
              <form className="pa4 black-80">
                <div className="measure">
                  <label className="f6 b db mb2">
                    {optionToSortBy}
                    {/* <span className="normal black-60">(optional)</span> */}
                  </label>
                  <input
                    onChange={(e) => sortList(e, optionToSortBy)}
                    name="name"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    type="text"
                    aria-describedby="name-desc"
                  />
                  <small className="f6 black-60 db mb2">
                    {`Search for a specific person by ${optionToSortBy.toLowerCase()}.`}
                  </small>
                </div>
              </form>
            </div>
          );
        })}
      </div>
      <div className="cf pa2">{renderList()}</div>
    </article>
  );
}
