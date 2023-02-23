import HR from "../components/HR"

const Header = ({ text, buttons }) => {

    return (
        <div id="adjust-width" className="mx-auto">
            <div id="header" className="d-flex justify-content-between align-self-center mb-2">
                <h1 className="text-nowrap col-5">{text}</h1>
                <div> {buttons} </div>
            </div>
            <HR />
        </div>
    )
}

export default Header