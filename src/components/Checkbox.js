const Checkbox = ({ className, onCheck }) => {

    const onChange = (event) => {
        if(event.target.checked){
            onCheck()
        }
    }

    return (
        <div className="m-3">
            <input className={`form-check-input m-0 ${className}`} type="checkbox" id="checkbox" onChange={onChange}></input>
        </div>
    )
}

export default Checkbox