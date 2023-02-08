import { Link as LNK} from "react-router-dom"

const Link = ({ text, type, to }) => {

    return (
        <LNK className={`border mx-2 btn btn-${type}`} to={to}>{text}</LNK>
    )
}

export default Link