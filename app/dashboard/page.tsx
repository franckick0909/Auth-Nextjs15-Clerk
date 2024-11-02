import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function PageDashboard() {

    const { userId } = await auth();

    if (!userId) {
        redirect("/");
    }

    console.log(userId);

    const user = await currentUser();
    console.log(user);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="max-w-xl text-center text-6xl text-white font-black uppercase mb-6">Bienvenue <span className="text-blue-500 text-4xl">{user?.firstName} {user?.lastName}</span></h1>

            <p className="text-slate-400">Email: {user?.emailAddresses[0].emailAddress}</p>

            <div className="flex gap-4 mt-6">
                <Link href="/dashboard/dashUser">
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">User</button>
            </Link>

            <Link href="/dashboard/dashAuth">
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">Admin</button>
                </Link>
            </div>
        </div>
    )
}
