import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{

        document.title = `${title} - Clothing Spark`;

    },[title])
}

export default useTitle;