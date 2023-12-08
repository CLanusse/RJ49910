import { useEffect, useState } from "react"



const useFetch = (url, dependencies = []) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(respData => {
                setData(respData)
            })
    }, dependencies)

    return { data }
}

export default useFetch