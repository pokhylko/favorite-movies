import {Meta, StoryFn} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

import {Footer} from "./Footer";

export default {
    component: Footer,
    decorators: [(Story) => (
        <BrowserRouter>
            <Story/>
        </BrowserRouter>)],
} as Meta;

export const Default: StoryFn = () => <Footer/>;
