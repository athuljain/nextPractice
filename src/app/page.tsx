
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>welcome home</h1>

    <Link href={"/profile"}>  <h4>profile page</h4></Link>
    <Link href={'/about'}>  <h4>about us page</h4> </Link>
     <Link href={'/products'}><h4>products page</h4></Link> 
    </div>
  );
}
