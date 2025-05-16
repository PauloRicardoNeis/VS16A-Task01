"use client";
import useGoogleAuth from "@/hooks/useGoogleAuth";

export default function GoogleLoginButton() {
    const { isAuthenticated, session, signIn, signOut } = useGoogleAuth();

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <p>Olá, {session?.user?.name}</p>
                    <button onClick={() => signOut()}>Sair</button>
                </>
            ) : (
                <button onClick={() => signIn()}>Entrar com Google</button>
            )}
        </div>
    );
}
