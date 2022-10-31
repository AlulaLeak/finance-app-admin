import axios from "axios";
import Image from "next/image";
import { use } from "react";
import InputFieldBox from "./InputFieldBox";

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
  const list = use(getData());
  return (
    <article>
      <div className="flex">
        <div className="w-50 pa3 mr2">
          <h2 className="f3 fw4 pa3 mv0">Albums</h2>
        </div>
        <div className="w-50 pa3 mr2">
          <InputFieldBox />
        </div>
      </div>
      <div className="cf pa2">
        {list.map((val: ListType, idx: number) => {
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
                    src={val.thumbnail}
                    alt="Frank Ocean Blonde Album Cover"
                    className={`w-100 db outline black-100`}
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
