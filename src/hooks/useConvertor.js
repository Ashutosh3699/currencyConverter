import React, { useEffect, useState } from 'react'

function useConvertor(currency){

    const [data,setData] = useState({});
    console.log("useconveter");
    let api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

    async function fetchData(){

        console.log("first");
        let result =  await  fetch(api);
        let output = await result.json();

        setData(output[currency]);
    }
        console.log(data);

    useEffect(( )=>{

        fetchData();

    }, [currency]);

    return data;
}

export default useConvertor