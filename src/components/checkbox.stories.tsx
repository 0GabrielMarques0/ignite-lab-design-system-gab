import { Meta, StoryObj } from '@storybook/react';
import { Checkbox,checkboxprops } from "./checkbox";
import { Text, } from "./text";

export default {
    title: 'Componentes/checkbox',
    component: Checkbox,
    args: {},  
    argTypes: {},
    decorators: [
        (Story) => {
            return(
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text>Lembrar-me por 30 dias</Text>
                </div>
            )
        }
    ]
} as Meta<checkboxprops>

export const Default: StoryObj<checkboxprops> = {}