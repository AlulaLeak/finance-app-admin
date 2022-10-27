import AddNewUser from "./AddNewUser";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";

export default function page() {
  return (
    <div className="cf w-100 w-100-ns vh-100">
      <SideMenu />
      <section className="fl w-80-ns w-80 bg-light-gray vh-100">
        <TopNav />
        <AddNewUser />
      </section>
    </div>
  );
}
