"use client";
import useApiData from "@/hooks/useApiData";

type Post = {
    title: string;
    body: string;
};

export default function BiographyPage() {
    const { data, loading, error } = useApiData<Post>("https://jsonplaceholder.typicode.com/posts/1");

    return (
        <section>
            <h1>Biography</h1>

            <p>Alexandre Cabanel was born in Montpellier, France in 1823...</p>
            <p>During his stay in Rome...</p>
            <p>Cabanel later became a professor...</p>

            <hr style={{ margin: "2rem 0" }} />

            <h2>Historical Note from External Source</h2>

            {loading && <p>Loading external data...</p>}
            {error && <p style={{ color: "red" }}>Failed to load: {error.message}</p>}

            {data && (
                <>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </>
            )}
        </section>
    );
}
