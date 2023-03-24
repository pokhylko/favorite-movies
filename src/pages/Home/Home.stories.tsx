import {Meta, StoryFn} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

import {Home} from "./Home";

export default {
    component: Home,
    decorators: [(Story) => (
        <BrowserRouter>
            <Story/>
        </BrowserRouter>)],
} as Meta;

export const Default: StoryFn = () => <Home/>;
