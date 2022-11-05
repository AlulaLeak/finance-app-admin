import Link from "next/link";

interface SideNavOptionsType {
  title: string;
  icon: string;
  link: string;
}

const sideNavArray: SideNavOptionsType[] = [
  { title: "Dashboard", icon: "home", link: "/dashboard" },
  { title: "Clients", icon: "class", link: "/dashboard/clients" },
  {
    title: "Add New User",
    icon: "assignment_ind",
    link: "/dashboard/addnewuser",
  },
  { title: "Logout", icon: "person_outline", link: "/dashboard" },
];

export default function SideNav() {
  return (
    <section className="fl p2 w-20-ns w-10-m w-20 bg-ez-light-black pa0 ma0 h-100 white-80">
      <div className="db w-100 bg-ez-dark-black mv-2">
        <h3 className="f3 ma0 pa2 black">Brand</h3>
      </div>
      <ul className="list pa1 center">
        {sideNavArray.map((val: SideNavOptionsType, idx: number) => {
          return (
            <li key={idx} className="tc-m hover-bg-blue pa3 pointer">
              {/* <i className="material-icons v-mid">{val.icon}</i> */}
              <>(Icon)</>
              <Link
                className="link pa2 pointer black dn-m v-mid"
                href={val.link}
              >
                {val.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
