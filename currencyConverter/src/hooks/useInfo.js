import { useEffect, useState } from "react";

function useInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/8fa7b320668da2b077a09187/latest/${currency}`);
                const result = await response.json();
                
                console.log('Fetched Data:', result);
                
                if (result && result.conversion_rates) {
                    setData(result.conversion_rates);
                }
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };
        
        fetchCurrencyData();
    }, [currency]);

    return data;
}

export default useInfo;