export default function SideMenu() {
  return (
    <section className="fl p2 w-20-ns w-10-m w-20 bg-ez-light-black pa0 ma0 h-100 white-80">
      <div className="db w-100 bg-ez-dark-black mv-2">
        <h3 className="f3 ma0 pa2">Brand</h3>
      </div>
      <ul className="list pa1 center">
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">home</i>
          <a className="link pa2 pointer white dn-m v-mid" href="#">
            Dashboard
          </a>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">class</i>
          <a className="link pa2 pointer white dn-m v-mid" href="#">
            Classes
          </a>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">assignment_ind</i>
          <a className="link pa2 pointer white dn-m v-mid" href="#">
            Instructors
          </a>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">person_outline</i>
          <a className="link pa2 pointer white dn-m v-mid" href="#">
            Guests
          </a>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">place</i>
          <a className="link pa2 pointer white dn-m v-mid" href="#">
            Locations
          </a>
        </li>
        <li className="tc-m hover-bg-blue pa3 pointer">
          <i className="material-icons v-mid">visibility</i>
          <a className="link pa2 pointer white dn-m v-mid" href="#">
            Reporting
          </a>
        </li>
      </ul>
    </section>
  );
}
