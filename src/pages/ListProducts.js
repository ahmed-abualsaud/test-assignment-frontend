import Checkbox from "../components/Checkbox"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import Link from "../components/Link"
import Button from "../components/Button"
import CardGroup from "../components/CardGroup"
import { getAllProducts } from '../lib/axios'
import { useEffect, useState } from 'react'

const ListProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      const retrieveProducts = async () => {
        const allProducts = await getAllProducts()
        if (allProducts) setProducts(allProducts)
      }
      retrieveProducts()
    }, [])

    return (
        <div className="d-flex flex-column m-auto" style={{ width: "80%", height: "99.93vh" }}>

            <Header text={"Product List"} buttons={[
                <Link text={"Add"} type={"light"} to={"add-product"} />,
                <Button text={"Mass Delete"} type={"danger"} />
            ]} />

            <CardGroup constElements={<Checkbox className=".delete-checkbox" />} varElements={products} />

            <Footer />
        </div>
    )
}

export default ListProducts