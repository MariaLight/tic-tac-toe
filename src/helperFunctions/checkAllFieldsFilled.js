export const checkAllFieldsFilled = (field) => {
    return field.every((item) => {
        return item !== '';
    })
}