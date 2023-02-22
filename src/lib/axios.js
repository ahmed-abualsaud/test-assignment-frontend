import qs from "qs"
import axios from 'axios'
import { Config } from '../setup/Config'
import { getElementsWithAttribute } from '../utils/dom'
import { applyFormValidation, showValidationError } from "../utils/validator"

const url = Config.get("REACT_APP_SERVER_URL")
const api = axios.create({baseURL: url})

const getAllProducts = async () => {

    try {
        const response = await api.get("/")
        if(response.data.status === 200) return response.data.data
        showValidationError("#toast", [response.data.error[0]])

    } catch (error) {
        showValidationError("#toast", [error.message])
    }
}

const addProduct = async () => {

    if (applyFormValidation("#product_form", "#toast")) {
        const validationElements = getElementsWithAttribute("#product_form", "validrules")

        let data = {}

        validationElements.forEach(element => {
            data[element.name] = element.value
        })

        try {
            const response = await api.post(
                "/add-product", 
                qs.stringify(data), 
                {headers: { "Content-Type": "application/x-www-form-urlencoded"}}
            )

            if(response.data.status !== 200) {
                showValidationError("#toast", [response.data.error[0]])
                return false
            }
            return true

        } catch (error) {
            showValidationError("#toast", [error.message])
            return false
        }
   }
   return false
}

export { getAllProducts, addProduct }