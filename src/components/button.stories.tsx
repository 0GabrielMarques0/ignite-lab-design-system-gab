import { Meta, StoryObj } from '@storybook/react'

import { button,buttonprops } from "./button";

export default {
    title: 'Componentes/button',
    component: button,
    args: {
        children:'Create account',
    },
    argTypes: {}
} as Meta<buttonprops>

export const Default: StoryObj<buttonprops> = {
    argTypes: {
        asChild: {
            table:{
                disable: true,
            }
        }
      }
}