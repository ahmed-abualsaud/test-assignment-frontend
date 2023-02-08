const Input = ({ id, text, type, inputClassName, labelClassName, validrules }) => {

    return (
        <div className="form-group row align-items-center my-4 mx-auto">
            <label className={`fs-4 p-0 mx-2 ${labelClassName}`}>{text}</label>

            <div className={inputClassName}>
                <input type={type} className="form-control border-dark" id={id} validrules={validrules} style={{height: "3.2rem"}}></input>
            </div>
        </div>
    )
}

export default Input