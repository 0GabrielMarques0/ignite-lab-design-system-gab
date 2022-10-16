import { Meta, StoryObj } from '@storybook/react'

import { Text,Textprops } from "./text";

export default {
    title: 'Componentes/text',
    component: Text,
    args: {
        children:'Lorem ipsum',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm','md','lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<Textprops>

export const Default: StoryObj<Textprops> = {
    argTypes: {
        asChild: {
            table:{
                disable: true,
            }
        }
      }
}

export const Small: StoryObj<Textprops> = {
    args: {
      size: 'sm',
    },
    argTypes: {
        asChild: {
            table:{
                disable: true,
            }
        }
      }
}
export const Large: StoryObj<Textprops> = {
    args: {
        size: 'lg',
      },
      argTypes: {
        asChild: {
            table:{
                disable: true,
            }
        }
      }
}
export const CustomComponent: StoryObj<Textprops> = {
    args: {
        asChild: true,
        children: (
            <p>Text with P tag</p>
        )
      },
      argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table:{
                disable: true,
            }
        }
      }
}