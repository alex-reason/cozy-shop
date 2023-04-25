import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import './form-input.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <FormControl className='form__input'>

            {label &&
                <FormLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input__label`}>
                    {label}
                </FormLabel>
            }
            <Input className='form-input__input' {...otherProps} />
        </FormControl>

    )
}

export default FormInput