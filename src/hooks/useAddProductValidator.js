import { useState } from "react"
import { isNull } from "../utils/helper"

const useAddProductValidator = () => {

    const [errorMessages, setErrorMessages] = useState([])

    const addErrorMessage = (errorMessage) => {

        setErrorMessages(oldArray => {
            if (oldArray.includes(errorMessage)) return oldArray
            else return [...oldArray, errorMessage]
        })
    }

    const validateElementValue = (value, rules) => {

        rules.forEach(rule => {
            
            rule = rule.trim()

            if(rule === "required") {
                if (isNull(value)) { addErrorMessage("Please, submit required data") }
            }

            if(rule === "number") {
                if (isNaN(value)) { addErrorMessage("Please, provide the data of indicated type") }
            }

            if(rule.includes("in[")) {
                const inValues = rule.substring(3, rule.length - 1).split(",")
                if (inValues.includes(value)) { addErrorMessage("Please, provide the data of indicated type") }
            }
        })
    }

    const validatFormInputs = () => {

        const validationElements = document.querySelectorAll('[validrules]')

        validationElements.forEach(element => {
            validateElementValue(element.value, element.getAttribute("validrules").split("|"))
        })
    }

    const showValidationError = (toastID) => {

        document.getElementById(toastID).style.display = "block"
        console.log(errorMessages)
    }

    return { validatFormInputs, showValidationError }
}

export default useAddProductValidator