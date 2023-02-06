import { Link } from "react-router-dom"
import HR from "../components/common/HR"
import Button from "../components/common/Button"

const Header = () => {

    return (
        <div className="mx-auto" style={{ width: "99%" }}>
            <div  className="d-flex justify-content-between align-items-center m-auto" style={{height: "80px", paddingTop: "2rem"}}>
                <h1>Product List</h1>
                <div>
                    <Link className="btn btn-light mx-2" to="add-product">Add</Link>
                    <Button />
                </div>
            </div>
            <HR />
        </div>

    )
}

export default Header