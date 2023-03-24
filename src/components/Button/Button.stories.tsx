import {Meta, StoryFn} from "@storybook/react";

import {Button, Props} from "./Button";

export default {
    component: Button,
} as Meta;

export const Primary: StoryFn<Props> = (args) => <Button {...args}>Button</Button>;

export const Outline: StoryFn<Props> = (args) => <Button {...args}>Button</Button>;
Outline.args = {
    variant: "outline"
};