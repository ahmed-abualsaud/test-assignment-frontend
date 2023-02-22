import { isNull, randomString, arrayMergeUnique, arrayIsEmpty } from "../utils/helper"
import { getElement, createElement, removeElement, fadeElementOut, getElementsWithAttribute } from "../utils/dom"

function addErrorMessage(errorMessage, errorMessages) {

    if (!errorMessages.includes(errorMessage)) {
        errorMessages.push(errorMessage)
    }
}

function validateElementValue(value, rules) {

    let errorMessages = []

    rules.forEach(rule => {

        rule = rule.trim()

        if(rule === "required") {
            if (isNull(value)) addErrorMessage("Please, submit required data", errorMessages) 
        }

        if(rule === "number") {
            if (isNaN(value)) addErrorMessage("Please, provide the data of indicated type", errorMessages) 
        }

        if(rule.includes("in[")) {
            const inValues = rule.substring(3, rule.length - 1).split(",")
            if (!inValues.includes(value)) addErrorMessage("Please, submit required data", errorMessages) 
        }
    })

    return errorMessages
}

function validatFormInputs(formID) {

    let errorMessages = []

    const validationElements = getElementsWithAttribute(formID, "validrules")

    validationElements.forEach(element => {
        errorMessages = arrayMergeUnique(errorMessages, validateElementValue(element.value, element.getAttribute("validrules").split("|")))
    })

    return errorMessages
}

function addToasts(toastContainerID, contents) {

    let toastID = null
    let toastElement = null
    let toastContainer = getElement(toastContainerID)

    contents.forEach(content => {

        toastID = randomString(10)
    
        toastElement = createElement("div")
        toastElement.setAttribute("id", toastID)
        toastElement.setAttribute("style", "dborder-radius:5px")
        toastElement.setAttribute("class", "alert alert-danger d-flex justify-content-between")
        toastContainer.style.display = "block"

        
        toastElement.appendChild(createElement("p", {
            text: content,
            attributes: [
                {
                    name: "class",
                    value: "m-0 me-2"
                }
            ]
        }))

        
        toastElement.appendChild(createElement("button", {
            attributes: [
                {
                    name: "type",
                    value: "button"
                },
                {
                    name: "class",
                    value: "btn-close bg-white"  
                }
            ],
            eventListeners: [
                {
                    name: "click",
                    callback: () => removeElement(toastID)
                }
            ]
        }))

        toastContainer.appendChild(toastElement)

        fadeElementOut(toastElement)
    })
}

export function showValidationError(toastID, errorMessages) {

    addToasts(toastID, errorMessages)
}

export function applyFormValidation(formID, toastID) {

    let errorMessages = validatFormInputs(formID)
    showValidationError(toastID, errorMessages)
    if (arrayIsEmpty(errorMessages)) {
        return true
    }
    return false
}