import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-black uppercase">Hello World</h1>

        <div className="flex gap-2 mt-4">
          <Link href="/sign-in">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Sign In
            </button>
          </Link>

          <Link href="/sign-up">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
