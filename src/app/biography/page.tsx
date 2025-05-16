"use client";
import useApiData from "@/hooks/useApiData";

export default function BiographyPage() {
    const { data, loading, error } = useApiData("https://jsonplaceholder.typicode.com/posts/1");

    return (
        <section>
            <h1>Biography</h1>

            <p>
                Alexandre Cabanel was born in Montpellier, France in 1823. He studied at the École des Beaux-Arts in Paris and quickly rose to prominence after winning the Prix de Rome in 1845.
            </p>
            <p>
                During his stay in Rome, he refined his classical style and became a prominent figure of academic painting. In 1863, he gained major recognition with “The Birth of Venus,” presented at the Paris Salon. The work was praised for its elegance and idealized form.
            </p>
            <p>
                Cabanel later became a professor at the École des Beaux-Arts and influenced a generation of painters. He passed away in 1889, leaving behind a legacy of technical perfection and timeless beauty.
            </p>

            <hr style={{ margin: "2rem 0" }} />

            <h2>Historical Note from External API</h2>

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
