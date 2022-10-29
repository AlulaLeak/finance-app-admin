import Link from "next/link";

export default function SideNav() {
  return (
    <section className="fl p2 w-20-ns w-10-m w-20 bg-ez-light-black pa0 ma0 h-100 white-80">
      <div className="db w-100 bg-ez-dark-black mv-2">
        <h3 className="f3 ma0 pa2">Brand</h3>
      </div>
      <ul className="list pa1 center">
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">home</i>
          <Link
            className="link pa2 pointer white dn-m v-mid"
            href="/dashboard/addnewuser"
          >
            Dashboard
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">class</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Classes
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">assignment_ind</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Instructors
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">person_outline</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Guests
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">place</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Locations
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">visibility</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Reporting
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">visibility</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Reporting
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">visibility</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Reporting
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">visibility</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Reporting
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">visibility</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Reporting
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">visibility</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Reporting
          </Link>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">visibility</i>
          <Link className="link pa2 pointer white dn-m v-mid" href="#">
            Reporting
          </Link>
        </li>
      </ul>
    </section>
  );
}
