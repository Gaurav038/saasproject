import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const MarketPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={
          cn("flex flex-col items-center justify-center",
          headingFont.className)
        }
      >
        <div className="flex border items-center bg-amber-100 text-amber-700 rounded-full p-4 shadow-sm uppercase mb-4">
          <Medal className="h-6 w-6 mr-2" />
          No 1 market Place
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps teams to move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Work forward
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketPage;
