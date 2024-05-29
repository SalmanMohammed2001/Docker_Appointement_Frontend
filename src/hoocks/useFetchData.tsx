import {useEffect, useState} from "react";
import axios from "axios";
import {token} from "../config.ts";

const useFetchData = (url: any) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


        useEffect(() => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const  result=await  axios.get(url,{
                        headers:{Authorization:`Bearer ${token}`}
                    })
                    setData(result.data.data);
                } catch (error) {
                    // @ts-ignore
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, [url]);

        return { data, loading, error };
}
export default useFetchData;