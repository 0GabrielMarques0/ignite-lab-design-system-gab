import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface textinputrootprops {
    children: ReactNode;
}
function textinputroot(props: textinputrootprops) {
    return(
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

export interface textinputiconprops {
    children: ReactNode;
}
function textinputicon (props: textinputiconprops) {
    return(
       <Slot className='w-6 h-6 text-gray-400'>
        {props.children}
       </Slot> 
    )
}

export interface textinputinputprops extends InputHTMLAttributes<HTMLInputElement>{}

function textinputinput(props: textinputinputprops) {

    return(    
        <input 
            className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
            {...props}
       />
    )
}

export const textinput = {
    root: textinputroot,
    input: textinputinput,
    icon: textinputicon
}