import Image from "next/image";
import Link from "next/link";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

interface TopNavOptionsType {
  title: string;
  link: string;
}

const topNavArray: TopNavOptionsType[] = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Clients", link: "/dashboard/clients" },
  { title: "Add New User", link: "/dashboard/addnewuser" },
  { title: "Logout", link: "/dashboard" },
];

export default function TopNav() {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <Link className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
        <LocalShippingIcon />
      </Link>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        {topNavArray.map((topNavOptions, idx) => {
          return (
            <Link key={idx} className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href={topNavOptions.link} title={topNavOptions.title}>
              {topNavOptions.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
