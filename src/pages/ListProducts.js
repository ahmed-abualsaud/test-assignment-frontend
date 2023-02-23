import Link from "../components/Link"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import Button from "../components/Button"
import { getAllProducts } from "../lib/axios"
import CardGroup from "../components/CardGroup"
import { useEffect, useRef, useState } from "react"
import useDeleteProducts from "../hooks/useDeleteProducts"

const ListProducts = () => {

    const isInitialMount = useRef(true);
    const [products, setProducts] = useState([])
    const { setProductID, deleteProducts } = useDeleteProducts()

    useEffect(() => {
      const retrieveProducts = async () => {
        const allProducts = await getAllProducts()
        if (allProducts) setProducts(allProducts)
      }

      if (isInitialMount.current) {
        isInitialMount.current = false
      } else {
        retrieveProducts()
        isInitialMount.current = true
      }
    }, [products])

    const deleteSelectedProducts = async () => {
      const deleted = await deleteProducts()
      if (deleted) {
        setProducts([])
      }
    }

    return (
        <div className="d-flex flex-column m-auto page" >

            <Header text={"Product List"} buttons={[
                <Link key={0} text={"Add"} type={"light"} to={"add-product"} />,
                <Button id="#delete-product-btn" key={1} text={"Mass Delete"} type={"danger"} onClick={() => deleteSelectedProducts()} />
            ]} />

            <CardGroup elements={products} checkBoxOnCheck={setProductID} />

            <Footer />
        </div>
    )
}

export default ListProducts