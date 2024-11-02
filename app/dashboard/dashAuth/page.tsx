"use client";

import { useAuth } from "@clerk/nextjs";

export default function DashAuth() {

    const { isLoaded, userId, sessionId } = useAuth();    // getToken()

    if (!isLoaded || !userId || !sessionId) {
        return null;
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-6xl font-black uppercase">Infos auth</h1>

            <ul className="mt-6">
                <li>userId: {userId}</li>
                <li>sessionId: {sessionId}</li>
            </ul>
        </section>
    )

}
