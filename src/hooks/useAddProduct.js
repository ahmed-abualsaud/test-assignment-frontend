import useAddProductValidator from "./useAddProductValidator"

const useAddProduct = () => {

    const { validatFormInputs, showValidationError } = useAddProductValidator()

    const onClickSaveProduct = () => {

        validatFormInputs()
        showValidationError("#toast")
    }

    return { onClickSaveProduct }
}

export default useAddProduct