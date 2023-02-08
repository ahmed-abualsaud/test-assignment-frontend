const Button = ({ text, type, onClick }) => {

    return (
        <button className={`border mx-2 btn btn-${type}`} to="/" onClick={onClick}>{text}</button>
    )
}

export default Button