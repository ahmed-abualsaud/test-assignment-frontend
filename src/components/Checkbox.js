const Checkbox = (className) => {

    return (
        <div className="m-3">
            <input className={`form-check-input m-0 ${className}`} type="checkbox" id="checkboxNoLabel" style={{width: "18px", height: "18px"}}></input>
        </div>
    )
}

export default Checkbox