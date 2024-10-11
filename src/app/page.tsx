import Image from "next/image";
import SideNav from "../components/SideNav";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="md:flex w-full h-svh overflow-hidden">
      <div className="md:w-2/12 h-svh bg-black text-white">
          <SideNav />
      </div> 
      <div className="md:w-11/12 bg-gray-800 text-white h-svh">
        <Dashboard />
      </div>

    </div>
  );
}
