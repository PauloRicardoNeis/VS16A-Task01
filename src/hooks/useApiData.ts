import { useEffect, useState } from "react";

export default function useApiData<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!url) return;

        setLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Erro na API");
                return res.json() as Promise<T>;
            })
            .then((json) => setData(json))
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}
