"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function useGoogleAuth() {
    const { data: session } = useSession();

    return {
        session,
        isAuthenticated: !!session,
        signIn: () => signIn("google"),
        signOut,
    };
}
