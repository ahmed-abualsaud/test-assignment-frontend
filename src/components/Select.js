const Select = ({ id, name, text, values, onChange, validrules }) => {

    return (
        <div className="form-group row align-items-center my-4 mx-auto">
            <label className="fs-4 col-4 p-0 mx-2">{text}</label>

            <div className="col-6 mx-0">
                <select id={id} name={name} className="form-select form-select-lg border-dark" onClick={onChange} defaultValue="selectDefault" validrules={validrules}>
                    <option key={0} value={"selectDefault"}>Select Product Type</option>
                    {Array.from(values).map((value, index) => (
                        <option key={index+1} value={value.toString()}>{value}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Select