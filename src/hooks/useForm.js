import { useState } from "react"

export const useForm = (initialForm = {}) => {


    const [formState, setFormState] = useState(initialForm);
    

    const onInputChange = ({target}) => {

        const {name, value} = target

        setFormState({
            ...formState,
            //propiedades computadas de objetos
            [ name ]: value,
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }




  return {
        //expongo los valores desestructurados
        ...formState,
        formState,
        onInputChange,
        onResetForm,
  }
}
