import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface headingprops{
    size?: 'sm' | 'md' | 'lg' ; 
    children: ReactNode;
    asChild? : boolean;
    classname?: string;
}

export function Heading({ size = 'md', children, asChild, classname}: headingprops) {

    const Comp = asChild ? Slot : 'h2';

    return(
        <Comp 
            className={clsx(
                "text-gray-100 font-bold font-sans",
                {
                    'text-lg': size ==='sm',
                    'text-xl': size ==='md',
                    'text-2xl': size ==='lg',
                },
                classname   
            )}
        >
            {children}   
        </Comp>
    )
}