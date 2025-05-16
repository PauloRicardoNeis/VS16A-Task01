"use client";
import GoogleLoginButton from "@/components/GoogleLoginButton/GoogleLoginButton";
import useWindowSize from "@/hooks/useWindowSize";

export default function HomePage() {

    const { width, height } = useWindowSize();

    return (
        <section>
            <h1>Alexandre Cabanel</h1>
            <p>
                Alexandre Cabanel was a renowned 19th-century French academic painter known for his classical beauty, precise technique, and mythological themes. He was a favorite of Napoleon III and a symbol of the academic art tradition that dominated French salons before the rise of Impressionism.
            </p>
            <p>
                This website is dedicated to celebrating his life and works, featuring biographical information, selected masterpieces, and a visual gallery of his most iconic paintings.
            </p>
            <GoogleLoginButton />
            <p>Viewport size: {width} × {height}px</p>
        </section>
    );
}
