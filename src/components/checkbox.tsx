import * as Checkboxprimari from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface checkboxprops extends Checkboxprimari.CheckboxProps{}

export function Checkbox(props: checkboxprops) {
    return(
        <Checkboxprimari.Root 
            className='w-6 h-6 p-[2px] bg-gray-800 rounded' {...props}>
            <Checkboxprimari.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500'/>
            </Checkboxprimari.Indicator>
        </Checkboxprimari.Root>
    )
}