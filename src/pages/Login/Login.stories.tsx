import {Meta, StoryFn} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

import {Login} from "./Login";

export default {
    component: Login,
    decorators: [(Story) => (
        <BrowserRouter>
            <Story/>
        </BrowserRouter>)],
} as Meta;

export const Default: StoryFn = () => <Login/>;
