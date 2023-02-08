import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import Link from "../components/Link"
import Input from "../components/Input"
import Button from "../components/Button"
import Select from "../components/Select"
import useProductType from "../hooks/useProductType"
import Toast from "../components/Toast"
import useAddProduct from "../hooks/useAddProduct"

const AddProduct = () => {

    const { onClickSaveProduct } = useAddProduct()
    const { productType, setProductType } = useProductType()

    return (
        <div className="d-flex flex-column m-auto" style={{ width: "80%", height: "99.94vh" }}>

            <Toast />

            <Header text={"Product Add"} buttons={[
                <Button text={"Save"} type={"light"} onClick={onClickSaveProduct} />,
                <Link text={"Cancel"} type={"light"} to={"/"} />
            ]} />

            <form className="col-lg-5 col-md-8 col-10">
                <Input id="#sku" inputClassName="col-8" labelClassName="col-2" text={"SKU"} type="text" validrules="required" />
                <Input id="#name" inputClassName="col-8" labelClassName="col-2" text={"Name"} type="text" validrules="required" />
                <Input id="#price" inputClassName="col-8" labelClassName="col-2" text={"Price ($)"} type="number" validrules="required|number" />
                <Select id="#productType" text={"Type Switcher"} values={["DVD-disc", "Book", "Furniture"]} onChange={setProductType} validrules="required|in[DVD-disc,Book,Furniture]" />
                <ProductTypeAttributes type={productType} />
            </form>

            <Footer />
        </div>
    )
}


const ProductTypeAttributes = ({type}) => {

    if (type === "DVD-disc") {
        return (
            <>
            <Input id="#size" inputClassName="col-6" labelClassName="col-4" text={"Size (MB)"} type="number" validrules="number" />
            <p className="fw-bolder mx-2 my-5">Please, provide disc space in MB</p>
            </>
        )
    }

    if (type === "Book") {
        return (
            <>
            <Input id="#weight" inputClassName="col-6" labelClassName="col-4" text={"Weight (Kg)"} type="number" validrules="number" />
            <p className="fw-bolder mx-2 my-5">Please, provide weight in Kg</p>
            </>
        )
    }

    if (type === "Furniture") {
        return (
            <>
            <Input id="#height" inputClassName="col-6" labelClassName="col-4" text={"Height"} type="number" validrules="number" />
            <Input id="#width" inputClassName="col-6" labelClassName="col-4" text={"Width"} type="number" validrules="number" />
            <Input id="#length" inputClassName="col-6" labelClassName="col-4" text={"Length"} type="number" validrules="number" />
            <p className="fw-bolder mx-2 my-5">Please, provide dimensions (HxWxL)</p>
            </>
        )
    }
}

export default AddProduct