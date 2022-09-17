import { useState } from "react";
import { useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then(res => {
                    console.log(res);
                    if (!res.ok) {
                        throw Error('Could Not Fetch Data For That Resource');
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted');
                    }
                    else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 2000);

        return () => abortController.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;