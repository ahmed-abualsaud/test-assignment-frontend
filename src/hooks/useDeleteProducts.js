import { useState } from "react"
import { arrayIsEmpty } from "../utils/helper"
import { deleteProductsByIDs } from "../lib/axios"

const useDeleteProducts = () => {

    const [ids, setIDs] = useState([])

    const setProductID = (id) => {
        setIDs((oldArray) => [...oldArray, id])
    }

    const deleteProducts = async () => {
        if (! arrayIsEmpty(ids)) {
            await deleteProductsByIDs(ids)
            setIDs([])
            return true
        }
        return false
    }

    return { setProductID, deleteProducts }
}

export default useDeleteProducts