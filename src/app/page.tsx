//import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Redirect } from "next";

const Home=()=> {

  return (
    <main className="flex justify-center items-center md:min-h-[500px] ">
        <div className="center space-y-3">
          <h1 className="text-4xl font-bold sm:text-left">
            Next.js App router Profile Template
          </h1>
          <div className="text-center">
            <Link href="/web3">
              <Button>Web3</Button>
            </Link>
          </div>
        </div>
    </main>
  );
}

export default Home;