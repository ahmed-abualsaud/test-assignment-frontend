import Checkbox from "../components/Checkbox"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import Link from "../components/Link"
import Button from "../components/Button"
import CardGroup from "../components/CardGroup"

const ListProducts = () => {

    return (
        <div className="d-flex flex-column m-auto" style={{ width: "80%", height: "99.93vh" }}>

            <Header text={"Product List"} buttons={[
                <Link text={"Add"} type={"light"} to={"add-product"} />,
                <Button text={"Mass Delete"} type={"danger"} />
            ]} />

            <CardGroup cardElements={[
                <Checkbox className=".delete-checkbox" />,
                <div className="text-center m-1">SKU</div>,
                <div className="text-center m-1">Name</div>,
                <div className="text-center m-1">Price</div>,
                <div className="text-center m-1">Description</div>
            ]} />

            <Footer />
        </div>
    )
}

export default ListProducts