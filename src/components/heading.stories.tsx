import { Meta, StoryObj } from '@storybook/react'
import { heading, headingprops } from "./heading";

export default {
    title: 'Componentes/heading ',
    component: heading,
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
} as Meta<headingprops>

export const Default: StoryObj<headingprops> = {
    argTypes: {
        asChild: {
            table:{
                disable: true,
            }
        }
      }
}

export const Small: StoryObj<headingprops> = {
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
export const Large: StoryObj<headingprops> = {
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
export const CustomComponent: StoryObj<headingprops> = {
    args: {
        asChild: true,
        children: (
            <h1>heading with H1</h1>
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