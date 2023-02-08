import HR from "../components/HR"

const Header = ({ text, buttons }) => {

    return (
        <div className="mx-auto" style={{width: "98.6%"}}>
            <div  className="d-flex justify-content-between align-self-center mb-2" style={{height: "80px", paddingTop: "2rem"}}>
                <h1 className="text-nowrap col-5">{text}</h1>
                <div style={{marginRight: "-3px"}}> {buttons} </div>
            </div>
            <HR />
        </div>
    )
}

export default Header