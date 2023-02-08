import { useState } from "react"

const useProductType = () => {

    const [productType, setProductState] = useState("")

    const setProductType = (event) => {
        setProductState(event.target.value)
    }

    return { productType, setProductType }
}

export default useProductType