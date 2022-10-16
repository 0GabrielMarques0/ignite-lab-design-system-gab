import { Meta, StoryObj } from '@storybook/react'

import { Button,buttonprops } from "./button";

export default {
    title: 'Componentes/button',
    component: Button,
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