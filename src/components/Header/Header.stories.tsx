import {Meta, StoryFn} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

import {Header} from "./Header";

export default {
    component: Header,
    decorators: [(Story) => (
        <BrowserRouter>
            <Story/>
        </BrowserRouter>)],
} as Meta;

export const Default: StoryFn = () => <Header/>;
