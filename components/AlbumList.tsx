import axios from "axios";
import { use } from "react";

interface ListType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

async function getData(): Promise<ListType[]> {
  const data = await axios.get("https://dummyjson.com/products");
  return data.data.products;
}

export default function AlbumList() {
  const list: ListType[] = use(getData());
  return (
    <article>
      <h2 className="f3 fw4 pa3 mv0">Albums</h2>
      <div className="cf pa2">
        {list.map((val: ListType, idx: number) => {
          if (idx < 15)
            return (
              <div key={idx} className="fl w-50 w-25-m w-20-l pa2">
                <a
                  href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
                  className="db link dim tc"
                >
                  <img
                    src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png"
                    alt="Frank Ocean Blonde Album Cover"
                    className={`w-100 db outline black-${
                      idx % 2 == 0 ? 10 : 100
                    }`}
                  />
                  <dl className="mt2 f6 lh-copy">
                    <dt className="clip">Title</dt>
                    <dd className="ml0 black truncate w-100">{val.title}</dd>
                    <dt className="clip">Artist</dt>
                    <dd className="ml0 gray truncate w-100">
                      {val.description}
                    </dd>
                  </dl>
                </a>
              </div>
            );
        })}
      </div>
    </article>
  );
}
