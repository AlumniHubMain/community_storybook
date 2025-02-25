import React from 'react'
import { Button } from './Button'

export default {
    title: 'UI/Button',
    component: Button,
    args: {
        label: 'Click Me',
    },
} as const

const Template = (args: any) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Default Button',
}

export const CustomLabel = Template.bind({})
CustomLabel.args = {
    label: 'Custom Label',
}

export const ClickedButton = Template.bind({})
ClickedButton.args = {
    label: 'Clicked Button',
}
ClickedButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.getByText('Clicked Button')
    userEvent.click(button)
}
