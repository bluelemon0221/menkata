import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Link href="/daily">test</Link>
    </div>
  );
}
