import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { textinput, textinputrootprops } from "./textinput";

export default {
    title: 'Componentes/textinput',
    component: textinput.root,
    args: {
        children:[
            <textinput.icon>
                <Envelope />
            </textinput.icon>,
            <textinput.input placeholder='Type your address e-mail' />  
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<textinputrootprops>

export const Default: StoryObj<textinputrootprops> = {}