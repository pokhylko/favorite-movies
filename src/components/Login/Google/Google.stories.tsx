import {Meta, StoryFn} from "@storybook/react";

import {Google} from "./Google";

export default {
    component: Google,
} as Meta;

export const Default: StoryFn = () => <Google/>;
