import { Meta, StoryObj } from '@storybook/react';
import { checkbox,checkboxprops } from "./checkbox";
import { text, } from "./text";

export default {
    title: 'Componentes/checkbox',
    component: checkbox,
    args: {},  
    argTypes: {},
    decorators: [
        (Story) => {
            return(
                <div className='flex items-center gap-2'>
                    {Story()}
                    <text >Lembrar-me por 30 dias</text>
                </div>
            )
        }
    ]
} as Meta<checkboxprops>

export const Default: StoryObj<checkboxprops> = {}