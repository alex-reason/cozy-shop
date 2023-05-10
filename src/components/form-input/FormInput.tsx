import { ChangeEvent } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import './form-input.scss';

type FormInputProps = {
    label: string;
    value: string;
    type: string;
    name: string;
    required: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
    return (
        <ChakraProvider>
            <FormControl className='form-input'>
                {label &&
                    <FormLabel className={`${otherProps.value ? 'shrink' : ''} form-input__label`}>
                        {label}
                    </FormLabel>
                }
                <Input className='form-input__input' {...otherProps} />
            </FormControl>
        </ChakraProvider>
    )
}

export default FormInput