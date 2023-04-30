import { ChakraProvider } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import './form-input.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <ChakraProvider>
            <FormControl className='form-input'>
                {label &&
                    <FormLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input__label`}>
                        {label}
                    </FormLabel>
                }
                <Input className='form-input__input' {...otherProps} />
            </FormControl>
        </ChakraProvider>
    )
}

export default FormInput