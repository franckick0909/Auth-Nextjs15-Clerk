"use client";

import { useUser } from "@clerk/nextjs";


export default function DashUser() {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-6xl font-black uppercase">Infos utilisateur</h1>
            <span className="text-blue-500 text-4xl font-bold">{user?.firstName} {user?.lastName}</span>

            <p className="text-slate-400">Email: {user?.emailAddresses[0].emailAddress}</p>
        </section>
    )
}
